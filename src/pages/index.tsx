import { Typography } from '@material-ui/core';
import Layout from 'src/components/Layout';
import Image from 'next/image';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

import Link from 'next/link';
import { useRef, useEffect, MutableRefObject } from 'react';
import { isNil } from 'lodash';
export function Home() {
  // const linkRef = useRef();
  // useEffect(() => {
  //   if (!isNil(linkRef) && !isNil(linkRef.current)) {
  //     (linkRef as MutableRefObject<HTMLAnchorElement>).current!.href = atob(
  //       'bWFpbHRvOmFiaGlzaGVrY2hhZGhhMjM1QGdtYWlsLmNvbQ=='
  //     );
  //   }
  // }, [linkRef, linkRef.current]);
  return (
    <Layout>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='max-w-2xl sm:px-6'>
          <Typography variant='h3' className='tracking-tighter px-4'>
            Hey there! I'm <b>Abhishek</b>. <br /> I design and build software
            products.
          </Typography>

          <div className='w-full flex flex-row justify-between mt-12'>
            <a
              href='https://www.linkedin.com/in/abhishek-chadha-53b09364/'
              target='_blank'
            >
              <Typography variant='h6' className='tracking-tighter px-4'>
                <LinkedInIcon /> LinkedIn
              </Typography>
            </a>

            <a href='http://github.com/achadha235' target='_blank'>
              <Typography variant='h6' className='tracking-tighter px-4'>
                <GitHubIcon /> GitHub
              </Typography>
            </a>

            <a href='http://twitter.com/achadha235' target='_blank'>
              <Typography variant='h6' className='tracking-tighter px-4'>
                <TwitterIcon /> Twitter
              </Typography>
            </a>

            <a href='mailto:abhishekchadha235@gmail.com'>
              <Typography variant='h6' className='tracking-tighter px-4'>
                <MailIcon /> Email
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
