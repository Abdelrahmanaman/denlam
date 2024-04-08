import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block" href={"/"}>
              <span className="sr-only">Accueil</span>
              <Logo />
            </Link>
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
};
export const Logo = () => {
  return (
    <div className="size-20 flex items-center">
      <Image className="" src={"/logo.jpg"} width={500} height={500} />
    </div>
  );
};
