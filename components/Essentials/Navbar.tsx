// app/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  href: string;
  submenu?: MenuItemProps[];
}

const menuItems: MenuItemProps[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "CRAFT REPOSITORY REGISTRY",
    href: "#",
    submenu: [
      {
        title: "KASHMIR CRAFT PROFILE",
        href: "/craft-registry/profiling",
      },
      {
        title: "GEOGRAPHICAL INDICATION",
        href: "/craft-registry/GI",
        submenu: [
          { title: "ABOUT GI & IT PROCESS", href: "/craft-registry/GI/process" },
          { title: "CONSUMER REPORTING", href: "/craft-registry/GI/reporting" },
          { title: "GI LISTING", href: "/craft-registry/GI/listing" },
        ],
      },
      {
        title: "CRAFT CARBON FOOTPRINT",
        href: "/craft-registry/carbon-footprint",
      },
      {
        title: "CRAFT APPRAISAL TOOL",
        href: "/craft-registry/cost-estimation",
      },
      {
        title: "CRAFT TRADE REGISTRY",
        href: "/listing",
      },
      {
        title: "BLOCK CHAIN TRACEABILITY",
        href: "/craft-registry/blockchain",
      },
    ],
  },
  {
    title: "CRAFT TRADE REGISTRY",
    href: "/listing",
  },
  {
    title: "CRAFT VULNERABILITY",
    href: "#",
    submenu: [
      {
        title: "INTELLECTUAL PROPERTY",
        href: "/craft-vulnerability/property",
      },
      { title: "COUNTERFEITS", href: "/craft-vulnerability/counterfeit" },
      { title: "DEPENDENCY", href: "/craft-vulnerability/dependency" },
      { title: "TECHNOLOGICAL GAPS", href: "/craft-vulnerability/gap" },
      { title: "GENERATIONAL SHIFT", href: "/craft-vulnerability/shift" },
    ],
  },
  {
    title: "CRAFT SOCIO-ECONOMICS",
    href: "#",
    submenu: [
      {
        title: "ECONOMICS",
        href: "/economics",
        submenu: [
          { title: "PRODUCTION INSIGHTS", href: "/economics/production" },
          { title: "EXPORT DATA", href: "/economics/export" },
        ],
      },
      {
        title: "EMPLOYMENT",
        href: "/employment",
        submenu: [
          { title: "WAGE EQUITY", href: "/employment/wage" },
          { title: "EMPLOYMENT TRENDS", href: "/employment/trend" },
          { title: "EMPLOYMENT GROWTH", href: "/employment/growth" },
        ],
      },
      {
        title: "GENDER DYNMAICS",
        href: "/gender",
        submenu: [{ title: "STATISTICAL INSIGHTS", href: "/gender/insight" }],
      },
    ],
  },
  {
    title: "ABOUT CRATFLORE",
    href: "#",
    submenu: [
      { title: "MISSION", href: "/about/mission" },
      { title: "CRAFTLORE PROJECTS", href: "/about/project" },
      { title: "CRAFTLORE REGISTRY", href: "/about/registry" },
      { title: "REGISTRY ARCHITECTURE", href: "/about/architecture" },
      {
        title: "LISTING",
        href: "#",
        submenu: [
          { title: "ARTISANS", href: "/listing/registration" },
          { title: "BUSINESSES", href: "/listing/registration" },
          { title: "INSTITUTES", href: "/listing/registration" },
        ],
      },
      {
        title: "CRAFT ALLIANCE",
        href: "#",
        submenu: [{ title: "SPONSORS", href: "/about/sponsor" }],
      },
      {
        title: "MEMBERSHIP",
        href: "#",
        submenu: [
          { title: "BUYER SUPPORT MEMBERSHIP", href: "/buyer" },
          { title: "CORPORATE MEMBERSHIP", href: "/corporate" },
          { title: "SPONSOR MEMBERSHIP", href: "/sponsorship" },
        ],
      },
      {
        title: "NETWORK",
        href: "#",
        submenu: [
          { title: "INTERNATIONAL", href: "/about/network" },
          { title: "INDIA", href: "/about/network/institution" },
        ],
      },
      { title: "CAREER", href: "/about/career" },
      { title: "TEAM", href: "/about/team" },
      { title: "CONTACT US", href: "/about/contact-us" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo; integrate with auth in real app

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMenuItem = (item: MenuItemProps, depth: number = 0) => {
    const hasSubmenu = !!item.submenu && item.submenu.length > 0;

    return (
      <div key={item.title} className="relative group">
        <Link
          href={item.href}
          className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
            depth === 0
              ? 'text-white hover:text-amber-300'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          {item.title}
        </Link>
        {hasSubmenu && (
          <div
            className={`absolute left-0 mt-0 w-48 bg-gray-900 shadow-lg rounded-lg overflow-hidden z-50 transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out ${
              depth > 0 ? 'top-full left-[-100%]' : 'top-full'
            }`}
          >
            {item.submenu.map((subItem) => renderMenuItem(subItem, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'h-16 bg-gray-900/90 shadow-md'
          : 'h-24 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <Link
          href="/"
          className={`font-bold transition-all duration-300 ${
            isScrolled ? 'text-2xl' : 'text-3xl'
          } bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text`}
        >
          CRAFTLORE
        </Link>
        <div className="flex items-center space-x-6">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Profile
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-amber-300 border border-amber-300 rounded-full hover:bg-amber-300 hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;