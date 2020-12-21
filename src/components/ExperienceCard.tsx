import Image from 'next/image';
import { Paper, Typography } from '@material-ui/core';
import css from 'styled-jsx/css';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ExperienceCardProps {
  imageUrl: string;
  name: string;
  children?: React.ReactNode;
}

function ExperienceCard({ imageUrl, name, children }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        onClick={handleOpen}
        loading='eager'
        layout='fill'
        className={`object-center object-cover `}
        src={imageUrl}
        alt={name}
      />
      <Typography
        onClick={handleOpen}
        variant='body2'
        className={`${className} font-semibold tracking-tighter m-0 py-2 w-full rounded-b-sm px-3 relative `}
      >
        {name}
      </Typography>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className='justify-center flex items-center p-5'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper
            className='max-w-2xl w-full min-h-full h-full p-4 bg-black outline-none'
            variant='outlined'
          >
            <div className='w-full flex justify-end'>
              <CloseIcon className='ml-auto' onClick={handleClose} />
            </div>

            <div className='overflow-x-hidden overflow-y-scroll modalContainerHeight'>
              {children}
            </div>
          </Paper>
        </Fade>
      </Modal>

      {styles}
      <style global jsx>{`
        .container > div > img {
          opacity: 0.8;
          scale: scale(1);
          transition: all 100ms ease-in-out;
        }

        .container:hover > div > img {
          opacity: 1;
          transform: scale(1.05);
        }

        .modalContainerHeight {
          height: 95%;
        }
      `}</style>
    </div>
  );
}

export default ExperienceCard;
