'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Twitter, Facebook, Linkedin, BarChart3 } from 'lucide-react';
import Image from 'next/image';

interface SubmenuItem {
  title: string;
  href: string;
  submenu?: SubmenuItem[];
}

interface MenuItemProps {
  title: string;
  href: string;
  submenu?: SubmenuItem[];
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
    title: "ABOUT CRAFTLORE",
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--primary)] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4 text-sm flex-1 justify-center">
              <span className="text-[var(--secondary)] font-bold">Craftlore</span>
              <span className="hidden sm:inline text-gray-300">- Kashmir Craft Repository System</span>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-px h-4 bg-[var(--secondary)]/30" />
                <span className="text-xs text-gray-400">Initiative of Hamadan Craft Revival Foundation</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-4 py-1.5 bg-[var(--secondary)] text-[var(--primary)] rounded-lg text-sm font-medium hover:bg-[var(--secondary)]/90 transition-colors">
                Register / Login
              </button>
              <div className="hidden sm:flex items-center gap-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                  <BarChart3 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Left Aligned */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center border-2 border-[var(--secondary)]">
                <span className="text-[var(--secondary)] font-bold text-lg">CL</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-[var(--primary)] font-bold text-base leading-tight">CRAFTLORE</div>
                <div className="text-xs text-gray-500">CRAFT REPOSITORY</div>
              </div>
            </Link>

            {/* Desktop Menu - All in One Line */}
            <div className="hidden xl:flex items-center flex-1 justify-end gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors whitespace-nowrap"
                  >
                    {item.title}
                    {item.submenu && (
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && openDropdown === item.title && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.title} className="relative group/sub">
                          <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--secondary)]/10 hover:text-[var(--primary)] transition-colors"
                          >
                            <span>{subItem.title}</span>
                            {subItem.submenu && <ChevronDown className="w-4 h-4 -rotate-90" />}
                          </Link>

                          {/* Nested Dropdown */}
                          {subItem.submenu && (
                            <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                              {subItem.submenu.map((nestedItem) => (
                                <Link
                                  key={nestedItem.title}
                                  href={nestedItem.href}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--secondary)]/10 hover:text-[var(--primary)] transition-colors"
                                >
                                  {nestedItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--primary)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--primary)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-140px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => {
                          setOpenMobileDropdown(openMobileDropdown === item.title ? null : item.title);
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--primary)] hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === item.title ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileDropdown === item.title && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[var(--secondary)] hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm font-semibold text-[var(--primary)] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}