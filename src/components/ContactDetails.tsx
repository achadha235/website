import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useRef, useEffect, MutableRefObject } from 'react';

function ContactDetails() {
  const linkRef: MutableRefObject<HTMLAnchorElement> = useRef();
  useEffect(() => {
    if (linkRef && linkRef.current) {
      linkRef!.current!.href = atob(
        'bWFpbHRvOmFiaGlzaGVrY2hhZGhhMjM1QGdtYWlsLmNvbQ=='
      );
    }
  }, [linkRef, linkRef.current]);
  return (
    <>
      <a
        href='https://www.linkedin.com/in/abhishek-chadha-53b09364/'
        target='_blank'
        className='no-underline outline-none'
      >
        <Typography variant='body1' className='tracking-tighter px-4'>
          <LinkedInIcon /> LinkedIn
        </Typography>
      </a>
      <a
        href='http://github.com/achadha235'
        target='_blank'
        className='no-underline outline-none'
      >
        <Typography variant='body1' className='tracking-tighter px-4'>
          <GitHubIcon /> GitHub
        </Typography>
      </a>
      <a
        href='http://twitter.com/achadha235'
        target='_blank'
        className='no-underline outline-none'
      >
        <Typography variant='body1' className='tracking-tighter px-4'>
          <TwitterIcon /> Twitter
        </Typography>
      </a>
      <a ref={linkRef} className='no-underline outline-none'>
        <Typography variant='body1' className='tracking-tighter px-4'>
          <MailIcon /> Email
        </Typography>
      </a>
    </>
  );
}

export default ContactDetails;
