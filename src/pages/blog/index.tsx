import { Button, Chip, Typography } from '@material-ui/core';
import Link from 'next/link';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import * as categories from 'src/categories';
import glob from 'glob';
import path from 'path';
import fs from 'fs';

function BlogHomepage({ blogPosts }) {
  return (
    <Layout className='h-full flex justify-center'>
      <Head>
        <title>All Articles by Abhishek Chadha</title>
      </Head>

      <div className='max-w-2xl w-full mt-20 flex flex-col items-center px-4'>
        {/* Hiding Search and Categories for now. Uncomment once you have enough posts! */}
        <TextField
          InputProps={{
            endAdornment: (
              <Button>
                <SearchIcon />
              </Button>
            ),
          }}
          size='small'
          placeholder='Enter keywords or query...'
          variant='outlined'
          className='w-full hidden'
        />

        <div id='categories' className='w-full mt-3 hidden'>
          <Typography variant='h5'>Categories</Typography>
          <div>
            {Object.values(categories).map((categoryName) => (
              <Chip
                key={categoryName}
                label={categoryName}
                onClick={() => {}}
                variant='outlined'
                className='m-1'
              />
            ))}
          </div>
        </div>

        <div className='w-full my-5 mb-20'>
          {blogPosts.map((postModule) => (
            <Link key={postModule.title} href={postModule.path}>
              <div className='w-full border-1 border-solid border-grey-700 p-5 cursor-pointer hover:border-blue-800 my-5'>
                <Typography variant='h4'>{postModule.title}</Typography>
                <Typography variant='body2' className='leading-loose mt-4'>
                  {postModule.banner}
                </Typography>
              </div>
            </Link>
          ))}

          {blogPosts.length === 0 && (
            <Typography variant='h5'>No posts yet</Typography>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogPaths = path.join(process.cwd(), 'src/pages/blog/**/*.mdx');
  const blogPosts = glob
    .sync(blogPaths)
    .map((filePath) => ({
      ...getMetaObject(filePath),
      path: getSlug(filePath),
    }))
    .filter((blogPost) => blogPost.hidden !== true);
  return {
    props: {
      blogPosts,
    },
  };
}

const getSlug = (blogPath) =>
  blogPath
    .toString()
    .replace(path.join(process.cwd(), 'src/pages').toString(), '')
    .replace('.mdx', '');

const getMetaObject = (filePath) =>
  new Function(
    `${
      fs
        .readFileSync(filePath)
        .toString()
        .match(/(const meta = )(\{[\s\S]+?\})/)[0]
    }; return meta;`
  )();

export default BlogHomepage;
