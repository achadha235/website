import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";
import { Fade, Modal, Paper, Typography } from "@mui/material";
import css from "styled-jsx/css";

export default function ExperienceCard({ children, imageUrl, name }) {
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
    <div className="container h-40 p-2 pb-0 pl-0 pr-0 pt-0 flex flex-col justify-end items-center hover:scale-105 transform ease-in-out transition-transform duration-75 cursor-pointer overflow-hidden rounded-sm ">
      <div className="w-full h-full bg-white" />
      <Image
        fill
        sizes="100vw"
        onClick={handleOpen}
        loading="eager"
        className={`object-center object-cover `}
        src={imageUrl}
        alt={name}
      />
      <span
        onClick={handleOpen}
        className={`${className} font-semibold tracking-tighter m-0 py-2 w-full rounded-b-sm px-3 relative `}
      >
        {name}
      </span>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="justify-center flex items-center p-5"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Paper
            className="max-w-2xl w-full h-screen p-4 bg-black text-white outline-none overflow-scroll"
            variant="outlined"
          >
            <div className="w-full flex justify-end">
              <CloseIcon className="ml-auto" onClick={handleClose} />
            </div>
            <div>{children}</div>
          </Paper>
        </Fade>
      </Modal>
      {styles}
    </div>
  );
}
