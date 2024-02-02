"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { ExperienceCard } from "./ExperienceCard";
import { experience } from "./experience";

export var stopAllYouTubeVideos = () => {
  var iframes = document.querySelectorAll("iframe");
  Array.prototype.forEach.call(iframes, (iframe) => {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "stopVideo" }),
      "*"
    );
  });
};

export function Experience() {
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
    <div className="relative h-[calc(100lvh-56px)] w-screen flex flex-col justify-start items-center p-4 pt-0 from-transparent to-base-100 bg-gradient-to-t">
      <div className="max-w-4xl flex-shrink  h-fit text-base leading-relaxed py-6">
        <div
          style={{
            maxInlineSize: "100ch",
            textWrap: "balance",
          }}
          className="h-full font-light text-center py-2 my-auto"
        >
          I'm a <b>full-stack engineer</b> from New Delhi, India. Since 2012,
          I've had the opportunity to work on awesome products with world-class
          teams. <span>oopen</span>
        </div>
      </div>

      <div
        className={clsx(
          "relative flex-grow grid gap-4",
          "w-full max-w-4xl mx-auto py-4",
          "grid-cols-2 grid-rows-5 sm:max-w-xl md:sm:max-w-4xl",
          "md:grid-cols-3 md:grid-rows-3"
        )}
      >
        {experience.map((experience, i) => {
          return (
            <ExperienceCard
              key={i}
              onClick={async (e) => {
                card.current = e.target;
                setCurrentExperience(await experience.article);
                updateModalTranslate();
                changeModalState(true);
              }}
              className="h-full w-full mx-auto"
              imageURL={experience.imageURL}
              title={experience.title}
            />
          );
        })}
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
