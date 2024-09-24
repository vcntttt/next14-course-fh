import { SquareActivityIcon } from "lucide-react";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import DoctorProfile from './doctor-profile';
import { Gamepad, LayoutDashboardIcon } from "lucide-react";

const navLinks = [
  { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboardIcon  className="size-4"/> },
  { path: "/dashboard/pokemon", label: "Pokemon", icon: <Gamepad className="size-4"/> },
];

export default function Sidebar() {
  return (
    <div className="hidden border-r shadow-xl md:block h-screen">
      <div className="flex h-full max-h-screen flex-col gap-2 mt-2">
        <header className="">
          <div className="flex h-14 justify-between items-center px-4 lg:h-[60px] lg:px-6 text-black">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SquareActivityIcon className="h-8 w-8" />
            <span>Data Fetching Tutorial</span>
          </Link>
          </div>
        <DoctorProfile/>
        </header>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navLinks.map((link) => (
              <SidebarItem
                key={link.path}
                {...link}
              />
            ))}
          </nav>
        </div>
        <div className="mt-auto mb-4 mx-4 sr-only">Footer</div>
      </div>
    </div>
  );
}
