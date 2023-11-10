import Link from "next/link";
import { navLinks } from "./nav-links";
// import {GiHamburgerMenu} from "react-icons/gi"

type Props = {};
export default function Nav({}: Props) {
  return (
    <>
    <div className="hidden md:flex gap-4 px-4 items-center h-9 bg-gray-700 mb-8">
<div className="mr-auto">Logo</div>
      {navLinks.map((link) => (
        <Link href={link.link} key={link.title} className="hover:text-red-500">
          {link.title}
        </Link>
      ))}
    </div>

{/* mobile  */}

    <div className="flex flex-col gap-4 px-4 items-center h-9 bg-gray-700 mb-8 md:hidden">
      <div className="mr-auto">Logo</div>
     {/* < GiHamburgerMenu /> */}
      {navLinks.map((link) => (
        <Link href={link.link} key={link.title} className="hover:text-red-500">
          {link.title}
        </Link>
      ))}
    </div>
      </>
  );
}
