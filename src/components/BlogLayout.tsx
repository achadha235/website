import { Typography } from '@material-ui/core';
import moment from 'moment';
import { MDXProvider } from '@mdx-js/react';
import Layout from 'src/components/Layout';
import components from 'src/mdx';

interface BlogMetaComponentProps {
  meta: { title: string; author: string; publishedAt: string };
  className?: string;
}

function BlogTitle({ meta }: BlogMetaComponentProps) {
  return <Typography variant='h3'>{meta.title}</Typography>;
}

function BlogAuthor({ meta, className }: BlogMetaComponentProps) {
  return (
    <Typography variant='h6' className={className}>
      By <b>{meta.author}</b>
    </Typography>
  );
}

function BlogDate({ meta, className }: BlogMetaComponentProps) {
  return (
    <Typography variant='h6' className={className}>
      Published on {moment(meta.publishedAt).format('ll')}
    </Typography>
  );
}

function BlogLayout({ children, meta }) {
  return (
    <MDXProvider components={components}>
      <Layout className='h-auto' headerPosition='relative'>
        <div className='w-full justify-center items-center flex my-10'>
          <div className='max-w-2xl '>
            <BlogTitle meta={meta} />
            <BlogAuthor meta={meta} className='mt-3' />
            <BlogDate meta={meta} className='text-sm color-grey-900' />
            <hr />
            {children}
          </div>
        </div>
      </Layout>
    </MDXProvider>
  );
}

export default BlogLayout;
