import { Button, Chip, Typography } from '@material-ui/core';
import Link from 'next/link';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import * as categories from 'src/categories';
import * as posts from 'src/manifest';

function BlogHomepage() {
  return (
    <Layout className='h-full flex justify-center'>
      <Head>
        <title>All Articles by Abhishek Chadha</title>
      </Head>

      <div className='max-w-2xl w-full mt-20 flex flex-col items-center px-4'>
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
          className='w-full'
        />

        <div id='categories' className='w-full mt-3'>
          <Typography variant='h5'>Categories</Typography>
          <div>
            {Object.values(categories).map((categoryName) => (
              <Chip
                label={categoryName}
                onClick={() => {}}
                variant='outlined'
                className='m-1'
              />
            ))}
          </div>
        </div>

        <div className='w-full mt-5'>
          {Object.values(posts).map((postModule) => (
            <Link key={postModule.meta.title} href={postModule.meta.path}>
              <div className='w-full border-1 border-solid border-grey-700 p-5 cursor-pointer hover:border-blue-800'>
                <Typography variant='h4'>{postModule.meta.title}</Typography>
                <Typography variant='body2' className='leading-loose mt-4'>
                  {postModule.meta.banner}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <UnderConstruction /> */}
    </Layout>
  );
}

export default BlogHomepage;
