import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../components/ui/button";
import { Gamepad, LayoutDashboardIcon, Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboardIcon  className="size-4"/> },
  { path: "/dashboard/pokemon", label: "Pokemon", icon: <Gamepad className="size-4"/> },
];

export default function MobileHeader( ) {
  return (
    <header className="md:hidden flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <span className="sr-only text-red-">Sellify</span>
          </Link>
          {navLinks.map((section) => (
            <Link
              key={section.label}
              href={section.path}
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              {section.icon}
              {section.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-y-4 sr-only">Footer</div>
      </SheetContent>
    </Sheet>
  </header>
  )
}
