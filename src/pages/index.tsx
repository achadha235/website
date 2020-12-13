import { Typography } from '@material-ui/core';
import Layout from 'src/components/Layout';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useRef, useEffect, MutableRefObject } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import css from 'styled-jsx/css';

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
      <div className='w-full min-h-screen flex justify-center items-center flex-col'>
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

      <div className='w-full min-h-screen flex justify-center items-center flex-col'>
        <div className='max-w-2xl'>
          <Typography variant='h5' className='font-thin'>
            Over the last 7 years, I've been fortunate enough to travel around
            the world and work on a variety of products with world-class teams.
          </Typography>

          <div className='w-full grid lg:grid-cols-3 gap-4 grid-cols-2'>
            <ExperienceCard
              imageUrl='/images/resume/appcubator.png'
              name='Appcubator'
            />

            <ExperienceCard
              imageUrl='/images/resume/streetjumper.png'
              name='Street Jumper'
            />

            <ExperienceCard
              imageUrl='/images/resume/gwf.jpeg'
              name='Games With Friends'
            />

            <ExperienceCard
              imageUrl='/images/resume/carnegiebot.png'
              name='CarnegieBot'
            />

            <ExperienceCard
              imageUrl='/images/resume/cryptokitties.png'
              name='CryptoKitties'
            />

            <ExperienceCard
              imageUrl='/images/resume/zerodown.jpg'
              name='ZeroDown'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ExperienceCard({ imageUrl, name }) {
  const { className, styles } = css.resolve`
    * {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.7077205882352942) 41%,
        rgba(0, 0, 0, 0.5284488795518207) 64%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  `;
  return (
    <div className='container h-40 p-2 pb-0 pl-0 pr-0 pt-0 flex flex-col justify-end items-center hover:scale-105 transform ease-in-out transition-transform duration-75 cursor-pointer overflow-hidden rounded-sm '>
      <div className='w-full h-full bg-white' />
      <Image
        layout='fill'
        className={`object-center object-cover `}
        src={imageUrl}
        alt={name}
      />
      <Typography
        variant='body2'
        className={`${className} font-semibold tracking-tighter m-0 py-2 w-full rounded-b-sm px-3 relative `}
      >
        {name}
      </Typography>
      {styles}
      <style global jsx>{`
        .container > div > img {
          opacity: 0.6;
          scale: scale(1);
          transition: all 40ms ease-in-out;
        }

        .container:hover > div > img {
          opacity: 1;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

export default Home;
