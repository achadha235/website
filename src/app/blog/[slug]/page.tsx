import { getArticlePaths, loadArticle } from "@/app/blog/utils";

export async function generateStaticParams() {
  const articlePaths = await getArticlePaths();
  return articlePaths.map((p) => ({ slug: p.replace(".mdx", "") }));
}

function PostLayout({ title, post }) {
  return (
    <div className=" h-fit prose prose-lg prose-p:py-1 max-w-full mx-auto prose-headings:py-2 overflow-scroll">
      <div className="max-w-3xl mx-auto bg-base-300 p-6">
        <post.default />
      </div>
    </div>
  );
}

export default async function Post({ params }) {
  const post = await loadArticle(`${params.slug}.mdx`);
  return <PostLayout post={post} title={post.metadata.name} />;
}
