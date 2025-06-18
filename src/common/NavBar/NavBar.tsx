/** @module NavBar */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin } from "lucide-react";
import type { NavBarProps } from "./types/navBarTypes";

import artemisLogo from "../assets/images/ArtemisLogo.png";
import "./NavBar.css";

const NavBar = ({ items }: NavBarProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <Link to="/" className="nav-bar-logo">
            <img 
              className="nav-bar-logo-image" 
              src={artemisLogo} 
              alt="Artemis Logo" 
            />
            <span className="nav-bar-logo-text">Artemis</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-bar-desktop">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-bar-link ${isActive(item.href) ? 'nav-bar-link-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://www.linkedin.com/company/boulder-artemis-consulting/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-bar-linkedin"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="nav-bar-mobile-button">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-bar-toggle"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="nav-bar-mobile">
          <div className="nav-bar-mobile-menu">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-bar-mobile-link ${isActive(item.href) ? 'nav-bar-mobile-link-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://www.linkedin.com/company/boulder-artemis-consulting/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-bar-mobile-linkedin"
              onClick={() => setIsOpen(false)}
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 