"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./nav-links";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

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
        className={`flex justify-end items-center mx-auto h-full ${
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
        className={`text-2xl right-0 absolute text-white  z-20 font-semibold transform -rotate-90 border border-red-500 bg-red-500 rounded-t-2xl ${
          isMenuOpen
            ? "text-5xl -mr-[38px] md:-mr-11 xl:-mr-[52px]  pb-1 py-1 px-10 md:px-14"
            : "-mr-10 md:-mr-11 xl:-mr-[53px] py-3 px-8 md:px-12"
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoClose /> : "Menu"}
      </button>

      <div
        className={`flex ${
          isMenuOpen
            ? "absolute w-full h-full my-auto bg-gray-800 bg-opacity-80 transition-transform  duration-1000 transform -translate-y-0 md:transform md:-translate-x-0 md:duration-900"
            : "hidden"
        }`}
      >
        <aside className="flex m-auto overflow-hidden">
          <nav className="flex">
            <ul className="flex flex-col overflow-hidden">
              {navLinks.map(({ link, title }) => (
                <li className="m-2" key={title}>
                  <Link href={link} onClick={closeMenu}>
                    <div
                      className={`flex py-2 md:py-3 px-8 md:px-12 my-auto bg-orange-500 font-medium md:font-semibold rounded hover:bg-red-500 cursor-pointer`}
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
