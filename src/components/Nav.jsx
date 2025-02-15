
import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { HiX } from "react-icons/hi"; // Close icon

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-gray-800 hover:text-[#ff6600] transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Menu"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Full-Width Modal */}
      {isOpen && (
   <div
   className="fixed inset-0 bg-black bg-opacity-5 z-50"
   onClick={() => setIsOpen(false)}
 >
   <div
     className="fixed top-0 left-0 h-full w-full bg-white/90 shadow-lg z-50 transform transition-transform translate-x-0 "
     onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
   >
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-gray-800 hover:text-[#ff6600] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <HiX size={32} />
            </button>

            {/* Mobile Navigation Links */}
            <ul className="mt-20 flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-2xl font-semibold text-gray-900 hover:text-[#ff6600] transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;