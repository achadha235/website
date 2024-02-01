"use client";

import { getCookie, setCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { isNil } from "lodash";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useEventListener, useIsClient, useMediaQuery } from "usehooks-ts";
import { Navbar } from "../components/Navbar";
import GradientCanvas, { getThemeColorHex } from "./GradientCanvas";
import themes from "@/themes";

interface LayoutProps {
  children?: any;
  className?: string;
  theme?: string;
  showNav?: boolean;
}

const themeList = themes;
const maxAge = 60 * 60 * 399;
function Layout({ theme, children, className, showNav = true }: LayoutProps) {
  const pathName = usePathname();
  const isClient = useIsClient();
  const prefersLightTheme = useMediaQuery("(prefers-color-scheme: light)");
  if (isNil(theme)) {
    setCookie("theme", prefersLightTheme ? "winter" : "coffee", { maxAge });
  }
  const [currentTheme, setCurrentTheme] = useState(
    theme || getCookie("theme") || "dark"
  );

  const [progressBarColor, setProgressBarColor] = useState(
    getThemeColorHex("--a")
  );
  useEffect(() => {
    setProgressBarColor(getThemeColorHex("--p"));
  }, [currentTheme]);

  useEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "t") {
      const currThemeIndex = themeList.indexOf(currentTheme);
      const nextThemeIndex = (currThemeIndex + 1) % themeList.length;
      setCurrentTheme(themeList[nextThemeIndex]);
    }
  });

  useEffect(() => {
    setCookie("theme", currentTheme, { maxAge });
  }, [currentTheme]);

  return (
    <div data-theme={currentTheme} id="layout">
      {isClient && (
        <ProgressBar
          color={progressBarColor}
          options={{ showSpinner: false }}
          height="2px"
        />
      )}
      <GradientCanvas
        theme={currentTheme}
        className="fixed top-0 left-0 z-0"
        id={"gradient-canvas"}
      />
      {showNav && (
        <Navbar
          onToggleClicked={() => {
            if (currentTheme === "coffee") {
              setCurrentTheme("winter");
            } else {
              setCurrentTheme("coffee");
            }
          }}
          theme={currentTheme}
        />
      )}
      <AnimatePresence key={pathName} mode={"wait"}>
        <motion.div
          viewport={{ once: true }}
          style={{ position: "relative" }}
          key={pathName}
          {...pageAnimations}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const pageAnimations = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 },
  exit: {
    y: 5,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  transition: { duration: 0.2, ease: "easeInOut" },
};

export default Layout;
