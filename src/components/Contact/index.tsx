"use client";

import { IconCalendarEvent, IconMail, IconMessages } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";

export function Contact() {
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
          <IconMessages size={42} className="mx-auto" />
          <b className="font-bold text-center">Let's talk!</b>
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
              <IconMail />
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
              <IconCalendarEvent />
              <div className="text-xl font-bold">Schedule a meeting</div>
            </div>

            <p className="text-base font-light">
              Find a time on my calendar to meet.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
