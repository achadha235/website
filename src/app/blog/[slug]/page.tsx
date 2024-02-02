import { loadArticle, getArticles } from "@/app/blog/utils";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const articlePaths = await getArticles();
  return articlePaths.map(({ slug }) => ({ slug }));
}

async function PostLayout({ children }) {
  return (
    <div className=" h-fit prose prose-lg prose-p:py-1 max-w-full mx-auto prose-headings:py-2 overflow-scroll">
      <div className="max-w-3xl mx-auto bg-base-300 bg-opacity-80 p-6">
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
