import { loadArticle, getArticles } from "@/app/blog/utils";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const articlePaths = await getArticles();
  return articlePaths.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  { params, searchParams },
  parent
): Promise<Metadata> {
  const result = await loadArticle(params.slug + ".mdx");
  return {
    title: result.metadata.title,
    description: result.metadata.banner,
    icons: ["/logo.svg"],
  };
}

async function PostLayout({ children }) {
  return (
    <div className=" h-fit prose prose-lg prose-p:py-1 max-w-full mx-auto prose-headings:py-2 overflow-scroll">
      <div className="max-w-3xl mx-auto bg-base-100 bg-opacity-90 p-6">
        {children}
      </div>
    </div>
  );
}

export default async function Post({ params }) {
  const article = await loadArticle(params.slug + ".mdx");
  return (
    <PostLayout>
      <article.default />
    </PostLayout>
  );
  // const post = await loadArticle(`${params.slug}.mdx`);
  // return <PostLayout post={post} title={post.metadata.name} />;
}
