"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function BackButton({
  className = "btn-primary",
  icon = "close",
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className={clsx("text-4xl btn", className)}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </div>
  );
}
