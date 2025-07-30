import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/companyLogo2025.jpg";
import gsap from "gsap";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin-logo.png";
import facebook from "../assets/facebook.png";
import AnimatedButton from "./AnimatedButton";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            handleToggleMenu();
        }
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle hover effects for menu items
    const handleMenuItemHover = (e, isEntering) => {
        const menuItem = e.currentTarget;

        if (isEntering) {
            gsap.to(menuItem, {
                backgroundColor: "#f3f4f6",
                color: "#5f97ff",
                duration: 0,
                ease: "power2.out",
            });
        } else {
            gsap.to(menuItem, {
                backgroundColor: "transparent",
                color: "#000000",
                duration: 0.1,
                ease: "power2.out",
            });
        }
    };

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    // Close mobile menu when route changes
    useEffect(() => {
        handleCloseMenu();
    }, [location]);

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-gradient-primary shadow-sm">
            <div
                className={`w-full mx-auto flex justify-between items-center max-w-[1280px] h-[80px] px-6 z-50 transition-all duration-200 ease-in-out ${
                    isMenuOpen
                        ? "border-b border-gray-200"
                        : "border-b border-transparent"
                }`}
            >
                <div className="flex items-center gap-6">
                    <a
                        href="/"
                        className="text-3xl font-bold text-[#1b1b1b] uppercase flex items-center gap-1 hover:text-primary cursor-pointer transition-colors duration-300 max-sm:text-2xl"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            className="w-10 h-10 rounded-lg shadow-sm"
                        />
                        <h1 className="text-3xl font-bold text-[#1b1b1b] uppercase flex items-center gap-1 hover:text-primary cursor-pointer transition-colors duration-300 max-sm:text-2xl">
                            Taiyo Tuition
                        </h1>
                    </a>
                    <ul className="flex items-center gap-4 max-md:hidden">
                        <li>
                            <Link
                                to="/subjects"
                                className={`hover:text-primary cursor-pointer transition-colors duration-300 ${
                                    isActiveLink("/subjects")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                            >
                                Subjects
                            </Link>
                        </li>
                        {/* <li>
              <Link 
                to='/tutors' 
                className={`hover:text-primary cursor-pointer transition-colors duration-300 ${
                  isActiveLink('/tutors') ? 'text-primary font-semibold' : ''
                }`}
              >
                Our Tutors
              </Link>
            </li> */}
                        <li>
                            <Link
                                to="/contact"
                                className={`hover:text-primary cursor-pointer transition-colors duration-300 ${
                                    isActiveLink("/contact")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <AnimatedButton
                        text="Enrol Now"
                        className="max-md:hidden"
                    />

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 z-50 relative"
                        onClick={handleToggleMenu}
                        onKeyDown={handleKeyDown}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-evenly gap-1">
                            <span
                                className={`w-full h-0.5 bg-black transform transition-all duration-100 origin-center ${
                                    isMenuOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`absolute w-full h-0.5 bg-black transform transition-all duration-300 origin-center ${
                                    isMenuOpen ? "-rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`absolute w-full h-0.5 bg-black transform transition-all duration-300 origin-center ${
                                    isMenuOpen ? "-rotate-[-45deg]" : ""
                                }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-black transform transition-all duration-100 origin-center ${
                                    isMenuOpen ? "opacity-0" : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={`fixed -top-200 left-0 right-0 h-screen w-full bg-white transform transition-transform duration-400 ease-in-out md:hidden z-40 ${
                    isMenuOpen ? "translate-y-200" : "-translate-y-full"
                }`}
            >
                <div className="flex flex-col mt-20 h-full ">
                    <ul className="flex flex-col">
                        <li
                            className="border-b border-gray-200 p-6 cursor-pointer transition-all duration-300 text-center"
                            onMouseEnter={(e) => handleMenuItemHover(e, true)}
                            onMouseLeave={(e) => handleMenuItemHover(e, false)}
                        >
                            <Link
                                className={`text-lg font-medium block w-full h-full ${
                                    isActiveLink("/")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                                to="/"
                                onClick={handleCloseMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li
                            className="border-b border-gray-200 p-6 cursor-pointer transition-all duration-300 text-center"
                            onMouseEnter={(e) => handleMenuItemHover(e, true)}
                            onMouseLeave={(e) => handleMenuItemHover(e, false)}
                        >
                            <Link
                                className={`text-lg font-medium block w-full h-full ${
                                    isActiveLink("/subjects")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                                to="/subjects"
                                onClick={handleCloseMenu}
                            >
                                Subjects
                            </Link>
                        </li>
                        {/* <li
                            className="border-b border-gray-200 p-6 cursor-pointer transition-all duration-300 text-center"
                            onMouseEnter={(e) => handleMenuItemHover(e, true)}
                            onMouseLeave={(e) => handleMenuItemHover(e, false)}
                        >
                            <Link
                                className={`text-lg font-medium block w-full h-full ${
                                    isActiveLink("/tutors")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                                to="/tutors"
                                onClick={handleCloseMenu}
                            >
                                Our Tutors
                            </Link>
                        </li> */}
                        <li
                            className="border-b border-gray-200 p-6 cursor-pointer transition-all duration-300 text-center"
                            onMouseEnter={(e) => handleMenuItemHover(e, true)}
                            onMouseLeave={(e) => handleMenuItemHover(e, false)}
                        >
                            <Link
                                className={`text-lg font-medium block w-full h-full ${
                                    isActiveLink("/contact")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                                to="/contact"
                                onClick={handleCloseMenu}
                            >
                                Contact
                            </Link>
                        </li>
                        <li
                            className="border-b border-gray-200 p-6 cursor-pointer transition-all duration-300 text-center"
                            onMouseEnter={(e) => handleMenuItemHover(e, true)}
                            onMouseLeave={(e) => handleMenuItemHover(e, false)}
                        >
                            <Link
                                className={`text-lg font-medium block w-full h-full ${
                                    isActiveLink("/privacy")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                                to="/privacy"
                                onClick={handleCloseMenu}
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li
                            className="border-b border-gray-200 p-6 cursor-pointer transition-all duration-300 text-center"
                            onMouseEnter={(e) => handleMenuItemHover(e, true)}
                            onMouseLeave={(e) => handleMenuItemHover(e, false)}
                        >
                            <Link
                                className={`text-lg font-medium block w-full h-full ${
                                    isActiveLink("/legal")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                                to="/legal"
                                onClick={handleCloseMenu}
                            >
                                Legal Terms
                            </Link>
                        </li>
                        <li className="p-6 text-center">
                            <AnimatedButton text="Enrol Now" />
                        </li>
                        <li className="p-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <a
                                    href="https://www.instagram.com/taiyo_tuition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={instagram}
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/taiyo-tuition/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={linkedin}
                                        alt="LinkedIn"
                                        className="w-6 h-6"
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61569894218115"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={facebook}
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
