import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import MDXComponent from "./MDXComponent";

export default function Experience() {
  return (
    <>
      <ExperienceCard
        name="Appcubator"
        imageUrl="/images/resume/appcubator.png"
      >
        <MDXComponent importedModule={import("./experience/appcubator.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="Street Jumper"
        imageUrl="/images/resume/streetjumper.png"
      >
        <MDXComponent
          importedModule={import("./experience/street-jumper.mdx")}
        />
      </ExperienceCard>

      <ExperienceCard
        name="Games With Friends"
        imageUrl="/images/resume/gwf.jpeg"
      >
        <MDXComponent
          importedModule={import("./experience/games-with-friends.mdx")}
        />
      </ExperienceCard>

      <ExperienceCard
        name="CarnegieBot"
        imageUrl="/images/resume/carnegiebot.png"
      >
        <MDXComponent importedModule={import("./experience/carnegiebot.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="CryptoKitties"
        imageUrl="/images/resume/cryptokitties.png"
      >
        <MDXComponent
          importedModule={import("./experience/cryptokitties.mdx")}
        />
      </ExperienceCard>

      <ExperienceCard name="ZeroDown" imageUrl="/images/resume/zerodown.jpg">
        <MDXComponent importedModule={import("./experience/zerodown.mdx")} />
      </ExperienceCard>
    </>
  );
}
