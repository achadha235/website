import { Button, Typography } from '@material-ui/core';
import { Fade } from '@material-ui/core';

function CookieModal({ showPrompt, enableCookies, disableCookies }) {
  return (
    <Fade in={showPrompt} timeout={500}>
      <div className='fixed bottom-0 h-56 lg:h-48 w-full flex justify-center'>
        <div className=' m-4 h-40 lg:h-32 py-3 rounded-md shadow-xs border-1 border-solid border-gray-700 bg-black max-w-xl left-auto right-auto px-3 mx-3 flex justify-center items-center text-center flex-col '>
          <Typography
            variant='body1'
            className='m-0 text-sm leading-5 text-center font-bold'
          >
            We use cookies in order to personalize and enhance your user
            experience.
          </Typography>
          <div className='w-full flex flex-row justify-center mt-4'>
            <Button
              onClick={() => enableCookies && enableCookies()}
              variant='contained'
              size='small'
              className='mr-1'
              color='primary'
            >
              Allow 🍪
            </Button>
            <Button onClick={() => disableCookies && disableCookies()}>
              No Thanks 🙅
            </Button>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default CookieModal;
