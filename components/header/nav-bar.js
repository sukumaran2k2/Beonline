"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./nav-bar.css";
import {
  Search,
  Megaphone,
  MonitorSmartphone,
  Smartphone,
  Code,
  Lightbulb,
  Share2,
  LineChart,
  Wrench,
} from "lucide-react";

const servicesList = [
  { name: "SEO", icon: <Search size={20} className="service-icon" /> },
  {
    name: "Content Marketing",
    icon: <Megaphone size={20} className="service-icon" />,
  },
  {
    name: "UI/UX Design",
    icon: <MonitorSmartphone size={20} className="service-icon" />,
  },
  {
    name: "Mobile App Development",
    icon: <Smartphone size={20} className="service-icon" />,
  },
  {
    name: "Web Development",
    icon: <Code size={20} className="service-icon" />,
  },
  {
    name: "Creative Brand Design",
    icon: <Lightbulb size={20} className="service-icon" />,
  },
  {
    name: "Social Media Marketing",
    icon: <Share2 size={20} className="service-icon" />,
  },
  {
    name: "Performance Marketing",
    icon: <LineChart size={20} className="service-icon" />,
  },
  {
    name: "Website Maintenance",
    icon: <Wrench size={20} className="service-icon" />,
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <div className="nav-bar">
      <div className="logo">
        <Image src="/logo.png" alt="BeOnline" width={218} height={55} />
      </div>

      <div className="nav-center">
        <div className="links">
          <ul>
            <li>
              <a href="#">Home ▾</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li className="has-dropdown">
              <a href="#">Services ▾</a>
              <div className="dropdown-menu">
                {servicesList.map((service, index) => (
                  <a key={index} href="#" className="dropdown-item">
                    {service.icon}
                    <span>{service.name}</span>
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a href="#">Cyber Security ▾</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog ▾</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <a href="#" className="contact-btn">
        Contact Us
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <div
                className={`mobile-dropdown-toggle ${mobileServicesOpen ? "open" : ""}`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services {mobileServicesOpen ? "▴" : "▾"}
              </div>
              {mobileServicesOpen && (
                <div className="mobile-dropdown-menu">
                  {servicesList.map((service, index) => (
                    <a
                      key={index}
                      href="#"
                      className="mobile-dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Cyber Security
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Career
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Blog ▾
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mobile-contact-btn"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
