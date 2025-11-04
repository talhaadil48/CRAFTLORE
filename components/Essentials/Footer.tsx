'use client';

import Link from 'next/link';
import { Mail, Mountain, ArrowRight, MapPin, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--secondary)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--secondary)] rounded-full blur-3xl" />
      </div>

      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--secondary)]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo & Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-[var(--secondary)]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-2xl border border-[var(--secondary)]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mountain className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    <span className="bg-gradient-to-r from-white via-white to-[var(--secondary)] bg-clip-text text-transparent">
                      Craftlore
                    </span>
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                  A <span className="text-[var(--secondary)] font-medium">non-commercial platform</span> and the world&apos;s largest <span className="text-[var(--secondary)] font-medium">open craft repository</span> dedicated to preserving and celebrating Kashmiri craftsmanship.
                </p>

                <p className="text-xs leading-relaxed text-gray-500 max-w-md">
                  We empower you with knowledge and tools to make informed, independent choices, free from external pressure or bias.
                </p>
              </div>

              {/* Mission Statement Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 rounded-full">
                <Globe className="w-3.5 h-3.5 text-[var(--secondary)]" />
                <span className="text-xs text-[var(--secondary)] font-medium">
                  Independent • Transparent • Community-First
                </span>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                {/* Craft Registry */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--secondary)] flex items-center gap-2">
                    <span className="w-8 h-px bg-[var(--secondary)]" />
                    Craft Registry
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "Kashmir Craft Profile",
                      "Geographical Indication",
                      "Blockchain Traceability",
                      "Carbon Footprint",
                      "Price Estimation",
                      "Trade Registry",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="group flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300"
                        >
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--secondary)]" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Craft Resources */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--secondary)] flex items-center gap-2">
                    <span className="w-8 h-px bg-[var(--secondary)]" />
                    Resources
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "Intellectual Property",
                      "Counterfeits",
                      "Production Insights",
                      "Export Data",
                      "Employment Trends",
                      "Gender Dynamics",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="group flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300"
                        >
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--secondary)]" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* About & Connect */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--secondary)] flex items-center gap-2">
                    <span className="w-8 h-px bg-[var(--secondary)]" />
                    About & Connect
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "Our Mission",
                      "Projects",
                      "Our Team",
                      "Careers",
                      "Contact Us",
                      "Become a Sponsor",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="group flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300"
                        >
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--secondary)]" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 lg:mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[var(--secondary)]" />
                  <h3 className="text-xl font-bold text-white">Stay Updated</h3>
                </div>
                <p className="text-sm text-gray-400 max-w-md">
                  Subscribe to our newsletter for the latest updates on Kashmir&apos;s craft heritage, artisan stories, and preservation initiatives.
                </p>
              </div>

              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 
                    focus:outline-none focus:border-[var(--secondary)]/50 focus:bg-white/10 transition-all duration-300"
                  />
                  <button
                    type="button"
                    className="px-6 py-3.5 bg-[var(--secondary)] text-white font-medium rounded-xl hover:bg-[var(--secondary)]/90 
                    hover:shadow-lg hover:shadow-[var(--secondary)]/20 transition-all duration-300 group flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="py-6 md:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              
              {/* Copyright */}
              <div className="text-gray-400 text-center md:text-left order-2 md:order-1">
                <p className="mb-1">© 2025 Craftlore. All rights reserved.</p>
                <p className="text-xs text-gray-500">
                  Powered and Maintained by{" "}
                  <Link href="#" className="text-[var(--secondary)] hover:underline font-medium transition-colors">
                    Prime Logic Solutions USA
                  </Link>
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-1 order-1 md:order-2">
                <Link 
                  href="#" 
                  className="px-4 py-2 text-gray-400 hover:text-[var(--secondary)] transition-colors rounded-lg hover:bg-white/5"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-600">•</span>
                <Link 
                  href="#" 
                  className="px-4 py-2 text-gray-400 hover:text-[var(--secondary)] transition-colors rounded-lg hover:bg-white/5"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
