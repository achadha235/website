"use client";

import themes, { defaultTheme } from "@/themes";
import { getCookie, setCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { isNil } from "lodash";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useEventListener, useIsClient, useMediaQuery } from "usehooks-ts";
import { Navbar } from "../components/Navbar";
import GradientCanvas, { getThemeColorHex } from "./GradientCanvas";

interface LayoutProps {
  children?: any;
  className?: string;
  theme?: string;
  showNav?: boolean;
}

const themeList = themes;
const maxAge = 60 * 60 * 399;

function Layout({ theme, children, showNav = true }: LayoutProps) {
  const pathName = usePathname();
  const isClient = useIsClient();
  const prefersLightTheme = useMediaQuery("(prefers-color-scheme: light)");

  if (isNil(theme)) {
    setCookie(
      "theme",
      prefersLightTheme ? defaultTheme.light : defaultTheme.dark,
      { maxAge }
    );
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

  const toggleTheme = () => {
    if (currentTheme === defaultTheme.dark) {
      setCurrentTheme(defaultTheme.light);
    } else {
      setCurrentTheme(defaultTheme.dark);
    }
  };
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
      {showNav && <Navbar onToggleClicked={toggleTheme} theme={currentTheme} />}
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
  fallbackStyle: { opacity: 1, y: 0 },
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
