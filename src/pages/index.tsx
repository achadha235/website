import { Typography } from '@material-ui/core';
import Layout from 'src/components/Layout';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useRef, useEffect, MutableRefObject } from 'react';
import Head from 'next/head';

export function Home() {
  const linkRef: MutableRefObject<HTMLAnchorElement> = useRef();
  useEffect(() => {
    if (linkRef && linkRef.current) {
      linkRef!.current!.href = atob(
        'bWFpbHRvOmFiaGlzaGVrY2hhZGhhMjM1QGdtYWlsLmNvbQ==' // base64 contact add
      );
    }
  }, [linkRef, linkRef.current]);

  return (
    <Layout className='px-8'>
      <Head>
        <title>Abhishek Chadha - Blog, Website and more</title>
      </Head>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='max-w-2xl'>
          <Typography variant='h3' className='tracking-tighter'>
            Hey there! I'm <b>Abhishek</b>. <br /> I design and build software
            products.
          </Typography>

          <div className='w-full flex flex-row justify-between mt-12'>
            <a
              href='https://www.linkedin.com/in/abhishek-chadha-53b09364/'
              target='_blank'
            >
              <Typography variant='body1' className='tracking-tighter px-4'>
                <LinkedInIcon /> LinkedIn
              </Typography>
            </a>

            <a href='http://github.com/achadha235' target='_blank'>
              <Typography variant='body1' className='tracking-tighter px-4'>
                <GitHubIcon /> GitHub
              </Typography>
            </a>

            <a href='http://twitter.com/achadha235' target='_blank'>
              <Typography variant='body1' className='tracking-tighter px-4'>
                <TwitterIcon /> Twitter
              </Typography>
            </a>

            <a ref={linkRef}>
              <Typography variant='body1' className='tracking-tighter px-4'>
                <MailIcon /> Email
              </Typography>
            </a>
          </div>
        </div>
      </div>

      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='max-w-2xl'>
          <Typography variant='h5' className='font-thin'>
            I was born in New Delhi but had the fortune to travel and live in
            cities around the world like San Francisco, Vancouver, and
            Pittsburgh.
          </Typography>
          <Typography variant='h5'>
            Over the last 7 years, I've worked with world-class teams to ship
            innovative products.
          </Typography>

          <div className='w-full grid grid-cols-3 gap-2'>
            <div className='bg-white h-40 rounded-sm p-2 flex justify-start items-end'>
              <Typography variant='body1' className='text-black font-bold m-0'>
                Appcubator
              </Typography>
            </div>
            <div className='bg-white h-40 rounded-sm p-2 flex justify-start items-end'>
              <Typography variant='body1' className='text-black font-bold m-0'>
                Street Jumper
              </Typography>
            </div>
            <div className='bg-white h-40 rounded-sm p-2 flex justify-start items-end'>
              <Typography variant='body1' className='text-black font-bold m-0'>
                Games With Friends
              </Typography>
            </div>
            <div className='bg-white h-40 rounded-sm p-2 flex justify-start items-end'>
              <Typography variant='body1' className='text-black font-bold m-0'>
                CarnegieBot
              </Typography>
            </div>
            <div className='bg-white h-40 rounded-sm p-2 flex justify-start items-end'>
              <Typography variant='body1' className='text-black font-bold m-0'>
                CryptoKitties
              </Typography>
            </div>
            <div className='bg-white h-40 rounded-sm p-2 flex justify-start items-end'>
              <Typography variant='body1' className='text-black font-bold m-0'>
                ZeroDown
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
