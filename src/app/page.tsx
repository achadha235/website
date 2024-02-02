import { Experience } from "@/components/Experience";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";

export default async function Page() {
  return (
    <>
      <Splash />
      <Experience />
      <Contact />
    </>
  );
}
