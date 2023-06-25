import React, { useState, useEffect } from 'react';


export const Nav = () => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 transition duration-5 backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-violet-300 text-xl font-bold font-custom-sans">
            BITS2BYTES 2K23
          </a>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          <div className="hidden md:flex items-center">
            <a
              href="/"
              className="text-violet-300 hover:translate-y-[-0.5em] px-3 py-2"
            >
              PRINCIPAL'S MESSAGE
            </a>
            <a
              href="/events"
              className="text-violet-300 hover:translate-y-[-0.5em] px-3 py-2"
            >
              EVENTS
            </a>
            <a
              href="/crew"
              className="text-violet-300 hover:translate-y-[-0.5em] px-3 py-2"
            >
              CREW
            </a>
            <a
              href="/you"
              className="text-violet-300 hover:translate-y-[-0.5em] px-3 py-2"
            >
              YOU
            </a>
            <a
              href="/contact"
              className="text-violet-300 hover:translate-y-[-0.5em] px-3 py-2"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-violet-300 hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              PRINCIPAL'S MESSAGE
            </a>
            <a
              href="/events"
              className="text-violet-300 hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              EVENTS
            </a>
            <a
              href="/crew"
              className="text-violet-300 hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              CREW
            </a>
            <a
              href="/you"
              className="text-violet-300 hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              YOU
            </a>
            <a
              href="/contact"
              className="text-violet-300 hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              CONTACT US
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;