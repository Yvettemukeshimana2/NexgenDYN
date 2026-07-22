 import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Nexgen (2).png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/aboutus1", label: "About Us" },
    { to: "/contactus", label: "Contact" },
    { to: "/venue", label: "Services" },
     { to: "/ImageSlider", label: "SHOP WITH US" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-brand-navy transition-shadow duration-300 ${
        isScrolled || isMenuOpen ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-sm">
              <img
                src={logo}
                alt="NEXGEN DYN Logo"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-semibold text-xl tracking-wide">
                NEXGEN DYN
              </span>
              <span className="text-brand-yellow text-[11px] tracking-[0.15em] uppercase font-medium">
                Engineering &middot; Technology &middot; Innovation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white hover:text-brand-yellow transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden flex flex-col items-center py-3 shadow-lg border-t border-white/10"
          style={{ backgroundColor: "#0f1b33" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="w-full text-center py-3 font-medium transition-colors"
              style={{ color: "#ffffff" }}
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default NavBar;