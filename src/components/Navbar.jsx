import { useState, useEffect, useRef } from 'react';
import { Sidebar } from './Sidebar'; // Import the Sidebar component

export function Navbar() {
  // State to toggle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference for the mobile menu to check clicks outside
  const menuRef = useRef(null);

  const handleViewResume = () => {
    const pdfUrl = "https://drive.google.com/file/d/19Vv1J2-pZc8BxSl0Sfp4j1VQRGsWCx5O/view?usp=sharing";
    window.open(pdfUrl, "_blank");
  };

  // Toggle the menu when hamburger icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close the menu if clicked outside
  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  // Adding the event listener to detect clicks outside
  useEffect(() => {
    if (isMenuOpen) {
      // Listen for clicks outside the mobile menu
      document.addEventListener('mousedown', closeMenu);
    } else {
      // Clean up the event listener when the menu is closed
      document.removeEventListener('mousedown', closeMenu);
    }

    return () => {
      document.removeEventListener('mousedown', closeMenu); // Clean up on component unmount
    };
  }, [isMenuOpen]);

  // Hamburger icon (SVG)
  const hamburgerIcon = (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20 7L4 7"
          stroke="#8b8a91"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M20 12L4 12"
          stroke="#8b8a91"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M20 17L4 17"
          stroke="#8b8a91"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );

  return (
    <>
      <nav className="py-4 px-4 xs:px-6 sm:px-8 lg:px-10 flex justify-between items-center fixed bg-bodyBg top-0 w-screen">
        {/* Hamburger Icon for mobile (Left side) */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {hamburgerIcon}
        </div>

        {/* Icons (Sparkle, Moon, and Flower) - Centered */}
        <div className="flex justify-center flex-grow gap-2">
          <span className="text-[rgb(149,125,173)] text-lg">✨</span>
          <span className="text-[rgb(149,125,173)] text-lg">🌙</span>
          <span className="text-[rgb(216,191,216)] text-lg">✿</span>
        </div>

        {/* View Resume Button */}
        <button
          onClick={handleViewResume}
          className="text-white text-sm bg-[rgb(210,145,188)] p-2 rounded-md hover:outline-2 hover:outline-[rgb(210,145,188)] hover:bg-white hover:text-green-500"
        >
          View Resume
        </button>
      </nav>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Reference for the mobile menu
          className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 z-10"
        >
          <div className="flex flex-col items-center justify-center py-10">
            {/* Close Button inside the mobile menu */}
            <button
              onClick={() => setIsMenuOpen(false)} // Close the menu when clicked
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✖
            </button>

            <button
              onClick={handleViewResume}
              className="text-white text-lg mb-4"
            >
              View Resume
            </button>

            {/* Render Sidebar inside the mobile menu */}
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}
