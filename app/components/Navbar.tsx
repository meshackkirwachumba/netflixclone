"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserNav from "./UserNav";

interface NavbarLinkProps {
  name: string;
  href: string;
}

const links: NavbarLinkProps[] = [
  { name: "Home", href: "/home" },
  { name: "TV Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <div
      className="
         w-full
         max-w-7xl
         mx-auto
         px-5
         py-5
         sm:px-6
         sm:py-8
         flex
         items-center
         justify-between
     "
    >
      <div className="flex items-center">
        <Link href="/home" className="w-32 h-6 sm:h-8 relative">
          <Image src="/netflix_logo.svg" alt="logo" fill priority />
        </Link>
        <ul className="hidden lg:flex gap-x-4 ml-14">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold text-sm underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-normal text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-8 ">
        <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}

export default Navbar;
