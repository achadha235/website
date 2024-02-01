"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function BackButton({ className }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className={clsx("text-4xl btn btn-primary", className)}
    >
      <span className="material-symbols-outlined">close</span>
    </div>
  );
}
