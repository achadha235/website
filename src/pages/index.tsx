import Head from 'next/head';
import { Typography } from '@material-ui/core';
import Layout from 'src/components/Layout';
import ExperienceCard from 'src/components/ExperienceCard';
import ContactDetails from 'src/components/ContactDetails';
import Experience from 'src/components/Experience.mdx';

export function Home() {
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
            <ContactDetails />
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
            <Experience />

            <ExperienceCard
              imageUrl='/images/resume/appcubator.png'
              name='Appcubator'
            >
              <Typography variant='h1'>Hello world</Typography>
            </ExperienceCard>

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

export default Home;
