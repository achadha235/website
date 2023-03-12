import Layout from "@/components/Layout";
import { Button, Chip } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import * as categories from "@/categories";
import Search from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import fs from "fs";
import { globSync } from "glob";
import path from "path";

function BlogHomepage({ blogPosts }) {
  return (
    <Layout className="h-full flex justify-center">
      <Head>
        <title>All Articles by Abhishek Chadha</title>
      </Head>

      <div className="max-w-2xl w-full mt-20 flex flex-col items-center px-4">
        {/* Hiding Search and Categories for now. Uncomment once you have enough posts! */}
        <TextField
          InputProps={{
            endAdornment: (
              <Button>
                <Search />
              </Button>
            ),
          }}
          size="small"
          placeholder="Enter keywords or query..."
          variant="outlined"
          className="w-full hidden"
        />

        <div id="categories" className="w-full mt-3 hidden">
          <h5>Categories</h5>
          <div>
            {Object.values(categories).map((categoryName) => (
              <Chip
                key={categoryName as string}
                label={categoryName}
                onClick={() => {}}
                variant="outlined"
                className="m-1"
              />
            ))}
          </div>
        </div>

        <div className="w-full my-5 mb-20">
          {blogPosts.map((postModule) => (
            <Link key={postModule.title} href={postModule.path}>
              <div className="w-full border border-solid border-gray-500 p-5 cursor-pointer hover:border-indigo-500 my-5 transition-colors">
                <h2 className="font-bold">{postModule.title}</h2>
                <p>{postModule.banner}</p>
              </div>
            </Link>
          ))}

          {blogPosts.length === 0 && <h5>No posts yet</h5>}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogPaths = path.join(process.cwd(), "src/pages/blog/**/*.mdx");
  const blogPosts = await Promise.all(
    globSync(blogPaths).map(async (filePath) => {
      return getMetaObject(filePath);
    })
  );

  return {
    props: {
      blogPosts: blogPosts.filter((post) => post.hidden !== true),
    },
  };
}

const getSlug = (blogPath) =>
  blogPath
    .toString()
    .replace(path.join(process.cwd(), "src/pages").toString(), "")
    .replace(".mdx", "");

const getMetaObject = (filePath) => {
  const fileContent = (fs as any).readFileSync(filePath).toString();
  const metaEles = fileContent.match(/(const meta = )(\{[\s\S]+?\})/);
  if (metaEles?.length > 0) {
    const metaFn = `${metaEles?.[0]}; return meta;`;
    const meta = new Function(metaFn)();
    return { ...meta, path: getSlug(filePath) };
  }
  return null;
};

export default BlogHomepage;
