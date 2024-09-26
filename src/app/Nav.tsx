"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <section className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-28 xl:px56">
      <section className="hidden md:block h-full flex-wrap content-center">
        <nav>
          <ul className="nav-list flex flex-row space-x-5">
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#project">Project</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="md:hidden">
        <button
          className="w-8 h-6 flex flex-col justify-between z-10 relative"
          onClick={handleClick}
          aria-label="Menu"
        >
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default Nav;
