"use client"

import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";

const DesktopNav = ({ links, activeDropdown, toggleDropdown, closeDropdown }) => {
  return (
    <nav className="space-x-3 text-sm xl:space-x-6 xl:text-lg xl:text-[1.1rem] relative">
      {links.map((link) => (
        <div key={link.name} className="inline-block relative dropdown">
          {link.hasDropdown ? (
            <>
              <button
                onClick={() => toggleDropdown(link.name)}
                className="flex items-center focus:outline-none"
              >
                {link.name}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${activeDropdown === link.name ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeDropdown === link.name && link.content && (
                <>
                  {link.name === "Eğitimlerimiz" && <Dropdown items={link.content} left="-400px" closeDropdown={closeDropdown} />}
                  {link.name === "Öğrenci Kulüpleri" && <Dropdown items={link.content} left="-650px" closeDropdown={closeDropdown} />}
                  {link.name === "Kurumsal" && <Dropdown items={link.content} left="-730px" closeDropdown={closeDropdown} />}
                  {link.name === "Kampüs" && <Dropdown items={link.content} left="-450px" closeDropdown={closeDropdown} />}
                </>
              )}
            </>
          ) : (
            <Link href={link.href} className="flex items-center" onClick={closeDropdown}>
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
