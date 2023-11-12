"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./nav-links";
import Image from "next/image";

type Props = {};
export default function SideNav({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col justify-center max-w-7xl relative">
      <div
        className={`flex justify-end items-center h-[450px] border border-blue-500 ${
          isMenuOpen ? "bg-gray-800" : "bg-transparent"
        }`}
      >
        <Image
          src="/Nissan.jpg"
          alt="Nissan"
          width={590}
          height={400}
          className="object-cover mx-auto"
        />
      </div>
      <button
        className="text-white text-2xl right-0 absolute
           -mr-12 z-20 font-semibold transform -rotate-90 border border-red-500 py-2 px-10  rounded-t-2xl bg-red-500"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div
        className={`flex ${
          isMenuOpen
            ? "absolute w-full bg-gray-800 bg-opacity-80 transition-transform border border-green-500 duration-500 transform translate-y-0 md:transform translate-x-0"
            : "hidden"
        }`}
      >
        <aside className="flex mx-auto border border-red-500 overflow-hidden ">
          <nav className="flex flex-col">
            <ul className="flex flex-col  ">
              {navLinks.map(({ link, title }) => (
                <li className="m-2 " key={title}>
                  <Link href={link} onClick={closeMenu}>
                    <div
                      className={`flex py-2 px-12 bg-orange-500 rounded hover:bg-red-500 cursor-pointer`}
                    >
                      {title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
