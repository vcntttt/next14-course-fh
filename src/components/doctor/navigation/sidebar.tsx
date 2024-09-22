"use client";
import { SquareActivityIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-links";
import Image from "next/image";
import { useAuthStore } from "@/store/user";

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();

  return (
    <div className="hidden border-r shadow-xl md:block h-screen">
      <div className="flex h-full max-h-screen flex-col gap-2 mt-2">
        <header className="">
          <div className="flex h-14 justify-between items-center px-4 lg:h-[60px] lg:px-6 text-black">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SquareActivityIcon className="h-8 w-8" />
            <span>Agenda Médica</span>
          </Link>
          </div>
        <div id="profile" className="py-4">
            <Image
              src="/person.png"
              alt="Avatar user"
              width={50}
              height={100}
              className="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                {user.name}
              </h2>
              <p className="text-xs text-gray-500 text-center">{user.role}</p>
            </div>
          </div>
        </header>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navLinks.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={clsx(
                  "py-2 px-2 rounded-md transition duration-100 hover:text-base",
                  {
                    "bg-teal-500 text-white": pathname === section.href,
                    "text-black/50 hover:text-black": pathname !== section.href,
                  }
                )}
              >
                <section.icon className="h-4 w-4" />
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto mb-4 mx-4 sr-only">Footer</div>
      </div>
    </div>
  );
}
