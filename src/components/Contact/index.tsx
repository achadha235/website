"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";

export var stopAllYouTubeVideos = () => {
  var iframes = document.querySelectorAll("iframe");
  Array.prototype.forEach.call(iframes, (iframe) => {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "stopVideo" }),
      "*"
    );
  });
};

export function Contact() {
  const [currentExperience, setCurrentExperience] = useState<any>(null);
  const card = useRef<any>(null);
  const animatingModal = useRef(false);
  const [modalOpen, setModalOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const [modalTranslate, setModalTranslate] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  const [showContent, setShowContent] = useState(false);

  function updateModalTranslate() {
    if (!card.current) {
      return;
    }
    const box = card.current.getBoundingClientRect();
    setModalTranslate({
      x: box.x,
      y: box.y,
      width: box.width,
      height: box.height,
    });
  }

  useEventListener("resize", () => {
    if (modalOpen) {
      updateModalTranslate();
    }
  });

  function changeModalState(isOpen) {
    if (animatingModal.current === true) {
      return;
    }
    setModalOpen(isOpen);
  }

  return (
    <div className="snap-page relative h-[calc(100lvh-56px)]  min-h-[300px] w-screen flex flex-col justify-center items-center p-4 pt-0 from-transparent to-bg-base-100 bg-gradient-to-t">
      <div className="max-w-4xl flex-shrink  h-fit text-base leading-relaxed py-6">
        <div
          style={{
            maxInlineSize: "100ch",
            textWrap: "balance",
          }}
          className="h-full text-4xl text-start py-2 my-auto flex flex-col items-start justify-center gap-2 bg-primary text-primary-content p-4 font-light shadow-lg rounded-box"
        >
          <span className="material-symbols-outlined text-6xl mx-auto">
            forum
          </span>{" "}
          Got an idea?
          <b className="font-bold">Let's talk!</b>
        </div>
      </div>
      <div
        className={clsx(
          "relative flex-grow grid gap-4",
          "w-full max-w-sm max-h-[36vh] min-h-[200px] mx-auto py-4",
          "grid-cols-1 grid-rows-2"
        )}
      >
        <Link href="mailto:hello@achadha.com" target="_blank">
          <div className="w-full h-full bg-base-100 p-8 flex flex-col gap-2 items-start justify-center hover:bg-base-200 rounded-btn transition-all cursor-pointer shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">mail</span>
              <div className="text-xl font-bold">Email</div>
            </div>

            <p className="text-base font-light">
              I'll usually respond within 48 hours.
            </p>
          </div>
        </Link>

        <Link href="https://calendly.com/abhishekchadha/30min" target="_blank">
          <div className="w-full h-full bg-base-100 p-8 flex flex-col gap-2 items-start justify-center hover:bg-base-200 transition-all cursor-pointerr shadow-md rounded-btn">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">event</span>
              <div className="text-xl font-bold">Schedule a meeting</div>
            </div>

            <p className="text-base font-light">
              Find a time on my calendar to meet.
            </p>
          </div>
        </Link>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            onAnimationStart={() => {
              animatingModal.current = true;
              setShowContent(!modalOpen);
            }}
            onAnimationComplete={() => {
              animatingModal.current = false;
              setShowContent(modalOpen);
            }}
            key="modal"
            transition={{
              ease: "backInOut",
              duration: reducedMotion ? 0 : 0.6,
            }}
            initial={{
              opacity: 0,
              height: modalTranslate.height,
              width: modalTranslate.width,
              translateX: modalTranslate.x,
              translateY: modalTranslate.y,
            }}
            animate={{
              opacity: 1,
              height: "100dvh",
              width: "100dvw",
              translateX: 0,
              translateY: 0,
            }}
            exit={{
              opacity: 0,
              height: modalTranslate.height,
              width: modalTranslate.width,
              translateX: modalTranslate.x,
              translateY: modalTranslate.y,
            }}
            className="fixed top-0 left-0 z-50 w-screen overflow-scroll overscroll-contain bg-base-200"
          >
            <div
              onClick={() => {
                changeModalState(false);
              }}
              className={clsx(
                "fixed top-2 right-2 text-4xl btn btn-primary btn-circle"
              )}
            >
              <span className="material-symbols-outlined">close</span>
            </div>
            <motion.div
              className={clsx(
                "max-w-2xl prose prose-base mx-auto py-10 px-4 transition-all mt-0",
                {
                  "opacity-0 mt-3": !showContent,
                }
              )}
            >
              {showContent && <currentExperience.default />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
