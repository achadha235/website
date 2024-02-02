import { Experience } from "@/components/Experience";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhishek Chadha | Blog & Portfolio",
  description:
    "Abhishek is a full stack software engineer from New Delhi with over 10 years of experience, specialized in B2C products.",
  icons: ["/logo.svg"],
  openGraph: {
    images: ["/og"],
  },
};

export default async function Page() {
  return (
    <>
      <Splash />
      <Experience />
      <Contact />
    </>
  );
}
