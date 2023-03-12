import Layout from "@/components/Layout";
import { DateTime } from "luxon";
import Head from "next/head";

interface BlogMetaComponentProps {
  meta: { title: string; author: string; publishedAt: string };
  className?: string;
}

function BlogTitle({ meta }: BlogMetaComponentProps) {
  return <h1 className="font-bold">{meta.title}</h1>;
}

function BlogAuthor({ meta, className }: BlogMetaComponentProps) {
  return (
    <h6 className={className}>
      By <b>{meta.author}</b>
    </h6>
  );
}

function BlogDate({ meta, className }: BlogMetaComponentProps) {
  return (
    <h6 className={`${className} text-sm font-light`}>
      Published on {DateTime.fromISO(meta.publishedAt).toFormat("DD")}
    </h6>
  );
}

function BlogLayout({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Layout className="h-auto" headerPosition="relative">
        <div className="w-full justify-center items-center flex my-10">
          <div className="max-w-2xl p-4">
            <BlogTitle meta={meta} />
            <BlogAuthor meta={meta} className="mt-3" />
            <BlogDate meta={meta} className="text-sm color-grey-900" />
            <hr />
            {children}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogLayout;
