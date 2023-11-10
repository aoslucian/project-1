import Link from "next/link";
import { navLinks } from "./nav/nav-links";

type Props = {};
export default function Footer({}: Props) {
  return (
    <div className="flex bg-gray-700 mt-auto justify-between p-4">
      <h1 className="">Logo</h1>
      <ul className="flex flex-col">
        <li>Useful Links</li>
        {navLinks.map((link) => (
          <Link
            href={link.link}
            key={link.title}
            className="hover:text-red-500"
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <ul className="flex flex-col">
        <li>Contact Us</li>
        <Link href="tel:116313351" className="hover:text-red-500">
          116313351
        </Link>
        <Link href="mailto: hello@email.com" className="hover:text-red-500">
          hello@email.com
        </Link>
      </ul>
    </div>
  );
}
