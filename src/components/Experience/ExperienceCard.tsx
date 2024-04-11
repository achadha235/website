"use client";
import clsx from "clsx";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { IconChevronRight } from "@tabler/icons-react";

export function ExperienceCard({
  className,
  imageURL,
  title,
  onClick,
}: {
  className?: string;
  imageURL: string;
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "relative rounded-lg select-none bg-base-300 overscroll-none flex justify-center items-start shadow-lg overflow-hidden max-w-80",
        className
      )}
    >
      <div className="w-full h-full transition-transform cursor-pointer">
        <Image
          className={clsx(
            "object-cover hover:scale-[1.08] transition-transform cursor-pointer saturate-[0.95] hover:saturate-[1] ",
            className
          )}
          fill={true}
          alt={title}
          src={imageURL}
        />
      </div>
      <IconChevronRight className="absolute bottom-2 right-1 opacity-70" />
    </div>
  );
}
