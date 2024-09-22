"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  path: string;
  label: string;
  icon: JSX.Element;
}

export default function SidebarItem({ path, label, icon }: Props) {
  const pathname = usePathname();

  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        "py-2 px-2 rounded-md transition duration-100 hover:text-base",
        {
          "bg-teal-500 text-white": pathname === path,
          "text-black/50 hover:text-black": pathname !== path,
        }
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
