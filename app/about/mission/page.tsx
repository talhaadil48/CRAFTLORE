'use client';

import Link from 'next/link';
import { ArrowRight, Database, Shield, TrendingUp, Globe, Award, Users, BookOpen, Search, Link2, Leaf, BarChart3, Cpu } from 'lucide-react';

const heroMissions = [
  {
    title: "Universal Craft Pricing",
    description: "Establishing fair, global pricing for artisan crafts.",
    icon: TrendingUp,
    link: "#pricing"
  },
  {
    title: "Biggest Craft Repository of Kashmir",
    description: "Comprehensive database of Kashmiri craftsmanship.",
    icon: Database,
    link: "#repository"
  },
  {
    title: "Transforming Colonial Narrative",
    description: "Rewriting craft history with scientific approach.",
    icon: BookOpen,
    link: "#narrative"
  },
  {
    title: "Setting a Universal Craft Price Model",
    description: "Data-driven pricing standards for authenticity.",
    icon: Award,
    link: "#price-model"
  }
];

const missionCategories = [
  {
    category: "Categories A-D",
    missions: [
      { id: "A", title: "Biggest Craft Repository", icon: Database },
      { id: "B", title: "Changing the Narrative to Science", icon: BookOpen },
      { id: "C", title: "Universal Craft Price Model", icon: TrendingUp },
      { id: "D", title: "Developing Kashmir as a Brand", icon: Award }
    ]
  },
  {
    category: "Categories E-H",
    missions: [
      { id: "E", title: "Mitigating Vulnerabilities", icon: Shield },
      { id: "F", title: "Craft Economics Monitoring", icon: BarChart3 },
      { id: "G", title: "Education & Awareness", icon: Users },
      { id: "H", title: "Counterfeit Detection", icon: Search }
    ]
  },
  {
    category: "Categories I-M",
    missions: [
      { id: "I", title: "Supply Chain Optimization", icon: Link2 },
      { id: "J", title: "Blockchain Authentication", icon: Shield },
      { id: "K", title: "Sustainable Leadership", icon: Leaf },
      { id: "L", title: "Big Data Platform", icon: Database },
      { id: "M", title: "Tech-Powered Insights", icon: Cpu }
    ]
  }
];

const additionalMissions = [
  {
    title: "Education & Market Awareness",
    description: "Empowering artisans and consumers with knowledge.",
    icon: Users,
    link: "#education"
  },
  {
    title: "Blockchain-Backed Digital Authentication",
    description: "Secure verification for authentic crafts.",
    icon: Shield,
    link: "#blockchain"
  },
  {
    title: "Big Data-Driven Craft Platform",
    description: "Insights powered by advanced analytics.",
    icon: Database,
    link: "#data-platform"
  },
  {
    title: "Sustainable Craft Leadership",
    description: "Leading the way in eco-conscious craftsmanship.",
    icon: Leaf,
    link: "#sustainability"
  },
  {
    title: "Advanced Counterfeit Detection",
    description: "Protecting authenticity with cutting-edge technology.",
    icon: Search,
    link: "#counterfeit"
  }
];

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      {/* Hero Section */}
      <section className="relative bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--secondary)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--secondary)] rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-full text-sm">
              <Globe className="w-4 h-4 text-[var(--secondary)]" />
              <span className="text-[var(--secondary)] font-medium">Our Vision & Mission</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Craftlore <span className="text-[var(--secondary)]">Mission</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Our mission is to establish Kashmiri crafts as a premium global brand, carefully curating their identity to embody the highest standards of authenticity, craftsmanship excellence, and cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroMissions.map((mission, index) => (
            <Link 
              key={index}
              href={mission.link}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <mission.icon className="w-7 h-7 text-[var(--secondary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--secondary)] transition-colors">
                  {mission.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {mission.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--secondary)] text-sm font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--secondary)] rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--secondary)] rounded-full blur-3xl" />
          </div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--secondary)]">
              Craftlore Mission
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                Our mission is to establish Kashmiri crafts as a premium global brand, carefully curating their identity to embody the highest standards of authenticity, craftsmanship excellence, and cultural heritage. Through this initiative, we aim to position Kashmiri crafts as the epitome of artisanal luxury, driving brand recognition and consumer loyalty on the international stage.
              </p>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg mt-4">
                We are committed to strategic global market expansion, elevating Kashmir's craft industry to a leadership position within the luxury handicraft sector. By employing cutting-edge market entry strategies and forging international partnerships, CraftLore aims to expand the global presence of Kashmiri crafts, solidifying their status as a dominant player in high-value, culturally significant markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Missions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalMissions.map((mission, index) => (
            <Link
              key={index}
              href={mission.link}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--secondary)]/30"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--secondary)]/5 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[var(--secondary)]/20">
                  <mission.icon className="w-8 h-8 text-[var(--secondary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--secondary)] transition-colors">
                  {mission.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {mission.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--secondary)] text-sm font-medium">
                  <span>See more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission Categories */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Craftlore <span className="text-[var(--secondary)]">Missions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Where Do We Stand Now?
            </p>
          </div>

          {/* Progress Bar Chart */}
          <div className="mb-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mb-2">
                Craftlore Mission Alignment Progress
              </h3>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-4 h-4 bg-[var(--primary)] rounded-sm" />
                <span className="text-sm text-gray-600 font-medium">Mission Alignment Progress (%)</span>
              </div>
            </div>
            
            {/* Vertical Bar Chart */}
            <div className="relative">
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-12 w-12 flex flex-col justify-between text-right pr-4 text-xs text-gray-500 font-medium">
                <span>100</span>
                <span>90</span>
                <span>80</span>
                <span>70</span>
                <span>60</span>
                <span>50</span>
                <span>40</span>
                <span>30</span>
                <span>20</span>
                <span>10</span>
                <span>0</span>
              </div>

              {/* Chart Container */}
              <div className="ml-12 pl-4">
                {/* Grid Lines */}
                <div className="absolute left-12 right-0 top-0 bottom-12 pointer-events-none">
                  {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
                    <div
                      key={value}
                      className="absolute left-0 right-0 border-t border-gray-200"
                      style={{ bottom: `${value}%` }}
                    />
                  ))}
                </div>

                {/* Bars Container */}
                <div className="relative h-96 flex items-end justify-around gap-2 sm:gap-4">
                  {[
                    { id: 'A', value: 80, label: 'A' },
                    { id: 'B', value: 70, label: 'B' },
                    { id: 'C', value: 55, label: 'C' },
                    { id: 'D', value: 75, label: 'D' },
                    { id: 'E', value: 70, label: 'E' },
                    { id: 'F', value: 60, label: 'F' },
                    { id: 'G', value: 85, label: 'G' },
                    { id: 'H', value: 75, label: 'H' },
                    { id: 'I', value: 65, label: 'I' },
                    { id: 'J', value: 90, label: 'J' },
                    { id: 'K', value: 85, label: 'K' },
                    { id: 'L', value: 70, label: 'L' },
                    { id: 'M', value: 80, label: 'M' }
                  ].map((bar, index) => (
                    <div key={bar.id} className="flex-1 flex flex-col items-center group max-w-20">
                      {/* Bar */}
                      <div className="w-full relative">
                        <div
                          className="w-full bg-[var(--primary)] rounded-t-lg transition-all duration-1000 ease-out group-hover:bg-[var(--secondary)] relative overflow-hidden"
                          style={{ 
                            height: `${(bar.value / 100) * 384}px`,
                            animationDelay: `${index * 50}ms`
                          }}
                        >
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
                        </div>
                        
                        {/* Value Label on Hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--primary)] text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                          {bar.value}%
                        </div>
                      </div>
                      
                      {/* X-Axis Label */}
                      <div className="mt-2 text-sm font-bold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
                        {bar.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* X-Axis Line */}
                <div className="w-full h-px bg-gray-300 mt-2" />
              </div>

              {/* Y-Axis Label */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-sm font-bold text-gray-600 whitespace-nowrap">
                Progress
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {missionCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3">
                  <span className="w-12 h-px bg-[var(--secondary)]" />
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.missions.map((mission, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] text-[var(--secondary)] rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                          {mission.id}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="mb-3">
                            <mission.icon className="w-5 h-5 text-[var(--secondary)] opacity-60 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <h4 className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors leading-tight">
                            {mission.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]/80 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Join Our Mission
          </h2>
          <p className="text-[var(--primary)]/80 text-lg mb-8 max-w-2xl mx-auto">
            Be part of preserving and elevating Kashmiri craftsmanship to new heights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact-us"
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-[var(--primary)]/90 transition-all hover:shadow-xl inline-flex items-center justify-center gap-2 group"
            >
              <span>Get Involved</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about/sponsor"
              className="px-8 py-4 bg-white text-[var(--primary)] rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 border-2 border-[var(--primary)]"
            >
              <span>Become a Sponsor</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}