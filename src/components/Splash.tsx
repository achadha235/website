"use client";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };

export function Splash({}) {
  return (
    <motion.div
      className="snap-page h-svh min-h-[400px] mx-auto flex flex-col justify-center items-center p-4 backdrop-blur-md"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="bg-base-100 rounded-btn bg-opacity-40 ">
        <motion.div
          style={{
            textWrap: "balance",
            maxInlineSize: "20ch",
            backgroundBlendMode: "color-burn",
          }}
          className="text-5xl max-w-xl leading-tight p-4 text-base-content"
          variants={item}
        >
          Hey there!{" "}
          <b className="whitespace-nowrap">
            <span className="font-normal">{"I'm"}</span> Abhishek
          </b>
          . <br /> I design and build software products.
        </motion.div>
      </div>
      <motion.div
        className="w-full flex flex-row flex-wrap items-center justify-center mt-12 "
        variants={item}
      >
        <ContactDetails />
      </motion.div>
    </motion.div>
  );
}
