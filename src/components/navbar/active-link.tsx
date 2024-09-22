"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  href: string;
  label: string;
}

export default function ActiveLink({ href, label }: Props) {
  const pathname = usePathname();
  return (
    <Link
      key={href}
      href={href}
      className={clsx("", {
        "underline text-blue-100": pathname === href,
      })}
    >
      {label}
    </Link>
  );
}