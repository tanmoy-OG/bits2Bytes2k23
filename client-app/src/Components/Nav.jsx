import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 mb-0 bg-sky-900 text-neutral-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="hover:text-orange-400 hover:shadow-sm text-xl font-bold font-custom-sans transition-all duration-200 tracking-widest uppercase"
          >
            <span className="text-2xl">B</span>ITS
            <span className="text-orange-400 text-3xl">2</span>
            <span className="text-2xl">B</span>YTES 2K23
          </Link>
          <div className="-mr-2 flex 950px:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-400/60 focus:outline-none transition-all duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden 950px:flex items-center">
            <Link
              to="/principal"
              className="hover:text-orange-400 hover:translate-y-[-0.4em] px-3 py-2 transition-all duration-200 tracking-widest uppercase"
            >
              PRINCIPAL'S MESSAGE
            </Link>
            <Link
              to="/gallery"
              className="hover:text-orange-400 hover:translate-y-[-0.4em] px-3 py-2 transition-all duration-200 tracking-widest uppercase"
            >
              GALLERY
            </Link>
            <Link
              to="/events"
              className="hover:text-orange-400 hover:translate-y-[-0.4em] px-3 py-2 transition-all duration-200 tracking-widest uppercase"
            >
              EVENTS
            </Link>
            <Link
              to="/crew"
              className="hover:text-orange-400 hover:translate-y-[-0.4em] px-3 py-2 transition-all duration-200 tracking-widest uppercase"
            >
              CREW
            </Link>
            <Link
              to="/registration"
              className="hover:text-orange-400 hover:translate-y-[-0.4em] px-3 py-2 transition-all duration-200 tracking-widest uppercase"
            >
              LOGIN/SIGNUP
            </Link>
            <Link
              to="/adminprofile/details"
              className="hover:text-orange-400 hover:translate-y-[-0.4em] px-3 py-2 transition-all duration-200 tracking-widest uppercase"
            >
              PROFILE
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="shadow-lg bg-sky-900 950px:hidden w-full absolute">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/principal"
              className="bg-orange-400/10 hover:bg-orange-400/60 hover:font-bold hover:shadow-sm block px-3 py-2 rounded-md text-base transition-all duration-200 tracking-widest uppercase"
            >
              PRINCIPAL'S MESSAGE
            </Link>
            <Link
              to="/gallery"
              className="bg-orange-400/10 hover:bg-orange-400/60 hover:font-bold hover:shadow-sm block px-3 py-2 rounded-md text-base transition-all duration-200 tracking-widest uppercase"
            >
              GALLERY
            </Link>
            <Link
              to="/events"
              className="bg-orange-400/10 hover:bg-orange-400/60 hover:font-bold hover:shadow-sm block px-3 py-2 rounded-md text-base transition-all duration-200 tracking-widest uppercase"
            >
              EVENTS
            </Link>
            <Link
              to="/crew"
              className="bg-orange-400/10 hover:bg-orange-400/60 hover:font-bold hover:shadow-sm block px-3 py-2 rounded-md text-base transition-all duration-200 tracking-widest uppercase"
            >
              CREW
            </Link>
            <Link
              to="/registration"
              className="bg-orange-400/10 hover:bg-orange-400/60 hover:font-bold hover:shadow-sm block px-3 py-2 rounded-md text-base transition-all duration-200 tracking-widest uppercase"
            >
              LOGIN/SIGNUP
            </Link>
            <Link
              to="/adminprofile/details"
              className="bg-orange-400/10 hover:bg-orange-400/60 hover:font-bold hover:shadow-sm block px-3 py-2 rounded-md text-base transition-all duration-200 tracking-widest uppercase"
            >
              PROFILE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
