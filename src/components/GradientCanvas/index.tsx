//  @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { Gradient } from "./Gradient";
import clsx from "clsx";
import Color from "colorjs.io";
import { useReducedMotion } from "framer-motion";
import _JSXStyle from "styled-jsx/style";

export function themeRoot() {
  if (typeof document === "undefined") {
    return;
  }
  return document.querySelector("[data-theme]");
}

export function getThemeColorHex(varName) {
  const root = themeRoot();
  if (!root) {
    return "#ffffff";
  }
  const oklchCol = getComputedStyle(root).getPropertyValue(varName);
  return new Color(`hsl(${oklchCol})`).to("sRGB").toString({ format: "hex" });
}

function getGradientColors() {
  return [
    new Color(getThemeColorHex("--b1"))
      .lighten(0.08)
      .toString({ format: "hex" }),
    getThemeColorHex("--p"),
    getThemeColorHex("--b3"),
    new Color(getThemeColorHex("--s")).darken(0.1).toString({ format: "hex" }),
  ];
}

export default function GradientCanvas({ className = "", id, theme }) {
  const stopAnimation = useReducedMotion();

  const [colors, setColors] = useState(getGradientColors());
  useEffect(() => {
    setColors(getGradientColors());
  }, [theme]);

  useEffect(() => {
    if (!id || !colors) {
      return;
    }

    const newGradient = new Gradient();
    newGradient.initGradient("#" + id);

    if (stopAnimation) {
      setTimeout(() => {
        newGradient.pause();
      }, 200);
    }
  }, [id, colors]);

  if (!id) {
    return;
  }

  return (
    <>
      <canvas id={id} className={clsx(className, "h-lvh w-screen")} />
      <style jsx global>{`
        #gradient-canvas {
          --gradient-color-1: ${colors[0]};
          --gradient-color-2: ${colors[1]};
          --gradient-color-3: ${colors[2]};
          --gradient-color-4: ${colors[3]};
        }
      `}</style>
    </>
  );
}
