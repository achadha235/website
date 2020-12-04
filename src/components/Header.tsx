import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import css from 'styled-jsx/css';

function Header({}) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <AppBar position='fixed' variant='elevation' color='primary'>
      <Toolbar variant='dense'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='/images/logo.svg'
            alt='AC'
            height={40}
            width={40}
          />
        </Link>
        <div className='w-full flex flex-row justify-between max-w-sm mx-auto'>
          <Link href='/'>
            <Button
              classes={{ label: classNames({ [className]: path === '/' }) }}
            >
              Home
            </Button>
          </Link>

          <Link href='/blog'>
            <Button
              classes={{ label: classNames({ [className]: path === '/blog' }) }}
            >
              Articles
            </Button>
          </Link>

          <Link href='/photos'>
            <Button
              classes={{
                label: classNames({ [className]: path === '/photography' }),
              }}
            >
              Photography
            </Button>
          </Link>
        </div>
        <div style={{ height: 40, width: 40 }} />
      </Toolbar>

      {styles}
    </AppBar>
  );
}

const { className, styles } = css.resolve`
  span {
    font-weight: 800;
  }
`;

export default Header;
