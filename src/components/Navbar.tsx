"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

import { getThemeColorHex } from "./GradientCanvas";
export function Navbar({ theme }) {
  const pathName = usePathname();
  // const isSticky = pathName === "/";
  const [isSticky, setIsSticky] = useState(pathName === "/");
  useEffect(() => {
    setIsSticky(pathName === "/");
  }, [pathName]);

  const [logoColor, setLogoColor] = useState("white");
  useEffect(() => {
    setLogoColor(getThemeColorHex("--p"));
  }, [theme]);
  // const logoColor = getThemeColorHex("--p");
  // alert(config.theme.colors["primary"]);
  return (
    <div
      className={clsx("navbar z-50 gap-2 bg-base-300 shadow-sm", {
        "fixed top-0": isSticky,
        relative: !isSticky,
      })}
    >
      <Link href="/" className="btn hover:bg-base-100 btn-ghost text-xl">
        {/* <img src="/logo.svg" alt="logo" className="w-8 h-8" /> */}
        <Logo color={logoColor} className="w-8 h-8" />
      </Link>
      <div className=" mx-auto grid grid-cols-2 gap-2">
        <Link
          href="/"
          as={"/"}
          className={clsx("btn hover:bg-base-100 btn-ghost w-full", {
            "bg-base-100 bg-opacity-90 outline outline-base-content":
              pathName === "/",
          })}
        >
          About Me
        </Link>

        <Link href="/blog" as={"/blog"}>
          <div
            className={clsx("btn hover:bg-base-100 btn-ghost w-full", {
              " bg-base-100 bg-opacity-90 outline outline-base-content":
                pathName.startsWith("/blog"),
            })}
          >
            Blog
          </div>
        </Link>
      </div>
      <div className="w-14 h-8" />
    </div>
  );
}
