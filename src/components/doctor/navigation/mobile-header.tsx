import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "./nav-links";

export default function MobileHeader() {
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
              href={section.href}
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <section.icon className="h-6 w-6" />
              {section.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-y-4">Footer</div>
      </SheetContent>
    </Sheet>
  </header>
  )
}
