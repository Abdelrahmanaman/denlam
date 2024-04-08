"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const links = [
  {
    title: "L'Artiste",
    path: "/artiste",
  },
  {
    title: "Collection",
    path: "/collection",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const NavLinks = () => {
  const [opemMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const handleMenu = () => {
    setOpenMenu((prevStatus) => !prevStatus);
  };

  return (
    <div className="md:flex md:items-center md:gap-12">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-base font-light">
          {links.map((link) => (
            <li key={link.title}>
              <Link className={`${pathname === link.path ? "underline text-color" : "text-gray-950"} hover:underline hover:text-color`} href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <div className="block md:hidden relative">
          <button onClick={handleMenu} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`absolute z-50 right-0 bg-white w-40 p-2 rounded-md ${opemMenu ? "visible opacity-100 translate-x-0 " : "invisible opacity-0 -translate-x-full"} transition-all duration-300`}>
            <ul className={`space-y-1`}>
              {links.map((link) => (
                <li key={link.title}>
                  <Link className={`${pathname === link.path ? "bg-gray-100 text-color" : ""} block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium`} href={link.path}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
