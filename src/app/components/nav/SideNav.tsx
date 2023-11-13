"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./nav-links";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import {IoClose} from "react-icons/io5";

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
        className={`flex justify-end items-center h-full border border-blue-500 ${
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

        className={`${
          isMenuOpen
            ? "text-white text-5xl right-0 absolute -mr-[52px] z-20 font-semibold transform -rotate-90 border border-red-500 py-1 px-[56px] rounded-t-2xl bg-red-500"
            : " text-white text-2xl right-0 absolute -mr-[53px] z-20 font-semibold transform -rotate-90 border border-red-500 py-3 px-12 rounded-t-2xl bg-red-500"
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoClose /> : "Menu"}
      </button>

      <div
        className={`flex ${
          isMenuOpen
            ? "absolute w-full h-full my-auto bg-gray-800 bg-opacity-80 transition-transform  duration-1000 transform -translate-y-0 md:transform md:-translate-x-0 md:duration-900 border border-green-500"
            : "hidden"
        }`}
      >
        <aside className="flex m-auto border border-red-500 overflow-hidden">
          <nav className="flex">
            <ul className="flex flex-col overflow-hidden">
              {navLinks.map(({ link, title }) => (
                <li className="m-2" key={title}>
                  <Link href={link} onClick={closeMenu}>
                    <div
                      className={`flex py-1 md:py-3 px-6 md:px-12 my-auto bg-orange-500 rounded hover:bg-red-500 cursor-pointer`}
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
