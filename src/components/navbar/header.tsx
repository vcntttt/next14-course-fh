import { HomeIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import ActiveLink from "@/components/navbar/active-link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/doctor", label: "Doctor" },
];

export default function Header() {
  return (
    <header>
      <nav className="flex gap-x-4 items-center p-2 rounded mx-2 justify-between">
        <Link href="/" className="flex items-center">
          <HomeIcon className="mr-2 size-5" />
          Home
        </Link>
        <div className="flex gap-x-2 items-center">
          {navLinks.map((link) => (
            <ActiveLink key={link.href} {...link} />
          ))}
          <Button asChild className="ml-4">
            <Link href={"/login"}>
              <User2Icon className="mr-2 size-5" />
              Iniciar Sesion
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}