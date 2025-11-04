"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testIndex, setTestIndex] = useState(0);

  const testimonials = [
    {
      name: "Shabir Lone",
      role: "Kani Shawl Weaver, Kupwara",
      quote: "Craftlore gave me digital proof of my work — buyers finally believe in my originality.",
    },
    {
      name: "Tahira Jan",
      role: "Sozni Embroiderer, Anantnag",
      quote: "Weavers like me never had a voice — now we're on a global map.",
    },
    {
      name: "Basit Mir",
      role: "Walnut Wood Artisan, Chrar-e-Sharif",
      quote: "Our pricing was always guessed. Craftlore gave us science behind our art.",
    },
    // ... you can add more entries or load from data
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white text-[#102a43] antialiased relative overflow-x-hidden">
      <style jsx global>{`
        :root {
          --primary: #102a43;
          --secondary: #3edbf0;
        }
        /* subtle custom fonts can be plugged in via global CSS if desired */
      `}</style>

      {/* decorative background blobs */}
      <div className="absolute left-[-12%] top-[-10%] w-[46vw] h-[46vw] rounded-full bg-gradient-to-tr from-[rgba(16,42,67,0.06)] to-[rgba(62,219,240,0.04)] blur-3xl pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[-6%] w-[52vw] h-[52vw] rounded-full bg-gradient-to-br from-[rgba(62,219,240,0.04)] to-[rgba(16,42,67,0.03)] blur-3xl pointer-events-none"></div>

      {/* NAV */}
      <header className="relative z-30">
        <nav className="mx-6 md:mx-10 lg:mx-20 mt-6 flex items-center justify-between p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[rgba(16,42,67,0.08)] flex items-center justify-center shadow-sm">
              {/* simple craft icon SVG */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-95">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="#fff" strokeWidth="0.5" fill="none"/>
                <path d="M6 12c0-4 4-6 6-6s6 2 6 6-4 6-6 6-6-2-6-6z" stroke="#fff" strokeWidth="0.6" fill="none"/>
              </svg>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold tracking-tight text-[var(--primary)]">Craft Guru</h1>
              <p className="text-xs text-[var(--primary)]/60 -mt-0.5">by Craftlore — Authentic Kashmir Crafts</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--primary)]/90">
            <a href="#about" className="hover:text-[var(--secondary)] transition">About</a>
            <a href="#features" className="hover:text-[var(--secondary)] transition">Platform</a>
            <a href="#milestones" className="hover:text-[var(--secondary)] transition">Milestones</a>
            <a href="#partners" className="hover:text-[var(--secondary)] transition">Partners</a>
            <a href="#subscribe" className="hover:text-[var(--secondary)] transition">Subscribe</a>
          </div>

          <div className="hidden md:flex gap-4">
            <a
              href="#register"
              className="px-4 py-2 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-semibold shadow-md hover:brightness-95 transition"
            >
              Register
            </a>
            <a
              href="#profile"
              className="px-4 py-2 rounded-full border border-[var(--secondary)] text-[var(--secondary)] font-medium hover:bg-[var(--secondary)]/8 transition"
            >
              Profile
            </a>
          </div>

          {/* mobile burger */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((s) => !s)}
              className="p-2 rounded-lg bg-white/60 backdrop-blur-md border border-white/30"
            >
              <svg width="22" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#102a43" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        {menuOpen && (
          <div className="mx-6 md:mx-10 lg:mx-20 mt-3 p-4 bg-white/40 backdrop-blur-lg rounded-2xl border border-white/30 shadow-md md:hidden z-20">
            <nav className="flex flex-col gap-3 text-[var(--primary)]/90">
              <a href="#about" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/30 transition">About</a>
              <a href="#features" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/30 transition">Platform</a>
              <a href="#milestones" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/30 transition">Milestones</a>
              <a href="#partners" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/30 transition">Partners</a>
              <a href="#subscribe" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/30 transition">Subscribe</a>
              <div className="flex gap-3 mt-2">
                <a href="#register" className="flex-1 text-center py-2 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-semibold">Register</a>
                <a href="#profile" className="flex-1 text-center py-2 rounded-full border border-[var(--secondary)] text-[var(--secondary)]">Profile</a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <main className="relative z-10 mt-12 px-6 md:px-12 lg:px-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left - hero content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/30 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/30 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[var(--primary)]">
                Craft Guru
              </h2>
              <p className="mt-3 text-[var(--primary)]/85 text-lg md:text-xl leading-relaxed">
                A transformative guide to the world of authentic handicrafts. Craftlore integrates a robust network of ethnographers, material scientists, craft educators, cultural theorists, and technologists to preserve and advance the timeless heritage of Kashmiri crafts for future generations.
              </p>

              <div className="mt-6 flex gap-4 flex-col sm:flex-row">
                <a href="#register" className="px-6 py-3 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-semibold shadow hover:scale-[1.01] transition">
                  Explore Craftlore
                </a>
                <a href="#about" className="px-6 py-3 rounded-full border border-[var(--primary)] text-[var(--primary)] font-medium hover:bg-[var(--primary)]/6 transition">
                  Learn More
                </a>
              </div>

              <p className="mt-6 text-sm text-[var(--primary)]/70">
                We operate on a non-commercial basis under the Hamadan Craft Revival Foundation. We do not sell or endorse businesses — we empower you with tools and knowledge to make informed, independent choices.
              </p>
            </div>

            {/* short highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/25 backdrop-blur-xl p-5 rounded-2xl border border-white/30">
                <h4 className="text-sm font-semibold text-[var(--primary)]">Authenticity Guidance</h4>
                <p className="mt-1 text-[var(--primary)]/80 text-sm">Verified craft profiles & provenance data.</p>
              </div>
              <div className="bg-white/25 backdrop-blur-xl p-5 rounded-2xl border border-white/30">
                <h4 className="text-sm font-semibold text-[var(--primary)]">Value Estimation</h4>
                <p className="mt-1 text-[var(--primary)]/80 text-sm">Dynamic valuation tools for fair artisan pricing.</p>
              </div>
            </div>
          </div>

          {/* right - illustration card */}
          <div className="order-1 lg:order-2">
            <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 border border-white/30 backdrop-blur-2xl shadow-2xl">
              {/* craft illustration - stylized SVG */}
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <svg viewBox="0 0 600 400" className="w-full h-72 md:h-80">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#3edbf0" stopOpacity="0.9" />
                      <stop offset="1" stopColor="#102a43" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" rx="20" fill="url(#g1)" opacity="0.06" />
                  <g transform="translate(40,30)" fill="none" stroke="#102a43" strokeOpacity="0.12" strokeWidth="1.2">
                    <path d="M30 280 C 60 200, 220 200, 260 120" strokeLinecap="round"/>
                    <path d="M90 300 C 140 210, 320 210, 380 130" strokeLinecap="round"/>
                  </g>
                  <g transform="translate(120,50)">
                    <circle cx="70" cy="70" r="48" fill="#fff" opacity="0.8" />
                    <path d="M30 100 Q70 20 110 100" stroke="#102a43" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                    <rect x="140" y="40" width="120" height="80" rx="12" fill="#fff" opacity="0.85" />
                    <text x="150" y="90" fontSize="12" fill="#102a43">Craft Registry</text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 p-4 bg-white/40 backdrop-blur-lg rounded-2xl border border-white/30">
                <h4 className="text-lg font-semibold text-[var(--primary)]">Welcome to Craftlore</h4>
                <p className="mt-2 text-sm text-[var(--primary)]/80">Eliminating middlemen, empowering artisans and buyers through scientific verification, blockchain traceability, and sustainability metrics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & DETAILS */}
        <section id="about" className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/30 backdrop-blur-2xl p-8 rounded-3xl border border-white/30 shadow-xl">
            <h3 className="text-2xl font-bold text-[var(--primary)]">We are the driving force behind Craftlore</h3>
            <p className="mt-4 text-[var(--primary)]/85 leading-relaxed">
              We bring together a diverse group of professionals—Ethnographers, Material Scientists, Craft Educators, Cultural Theorists, Art Historians, Designers, Sociologists, Environmentalists, and Technologists—united in a mission to preserve and advance Kashmiri crafts.
            </p>

            <div className="mt-6 space-y-4 text-[var(--primary)]/85">
              <p>
                At Craft Guru, we operate on a non-commercial basis under the mandate of the Hamadan Craft Revival Foundation. We do not sell, endorse, or promote businesses. Instead, we empower you with knowledge and tools to make informed, independent choices.
              </p>
              <p>
                Empower Your Choices at no cost. We connect you with verified Kashmiri artisans, provide the Craft Registry, and offer value estimation so decisions are intentional and well-informed.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/25 p-4 rounded-xl border border-white/25">
                <h5 className="font-semibold text-[var(--primary)]">Geo-Certification</h5>
                <p className="text-sm text-[var(--primary)]/75 mt-1">Precise geospatial verification preventing counterfeits.</p>
              </div>
              <div className="bg-white/25 p-4 rounded-xl border border-white/25">
                <h5 className="font-semibold text-[var(--primary)]">Immutable Blockchain</h5>
                <p className="text-sm text-[var(--primary)]/75 mt-1">A permanent record of each craft's journey.</p>
              </div>
              <div className="bg-white/25 p-4 rounded-xl border border-white/25">
                <h5 className="font-semibold text-[var(--primary)]">Carbon Footprint Tracking</h5>
                <p className="text-sm text-[var(--primary)]/75 mt-1">Tools to measure & reduce environmental impact.</p>
              </div>
              <div className="bg-white/25 p-4 rounded-xl border border-white/25">
                <h5 className="font-semibold text-[var(--primary)]">Valuation Tool</h5>
                <p className="text-sm text-[var(--primary)]/75 mt-1">Fair, data-driven pricing for buyers and artisans.</p>
              </div>
            </div>
          </div>

          <aside className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-inner">
            <h4 className="text-lg font-semibold text-[var(--primary)]">Quick Facts</h4>
            <ul className="mt-4 text-[var(--primary)]/80 space-y-2 text-sm">
              <li>Non-Commercial platform focused on authenticity & transparency</li>
              <li>700+ year craft heritage digitized</li>
              <li>Geo-certification, blockchain, carbon metrics</li>
            </ul>
            <a href="#register" className="mt-6 inline-block px-4 py-2 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-semibold">Register for Craftlore</a>
          </aside>
        </section>

        {/* Features / Services */}
        <section id="features" className="mt-14">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Platform Services</h3>
          <p className="mt-3 text-[var(--primary)]/80 max-w-3xl">A wealth of tools and insights — completely free. From GI verification to blockchain traceability and carbon footprint measurement, Craftlore equips artisans and buyers with trust, transparency, and education.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Craft Profiling", desc: "Historical, artistic & scientific exploration." },
              { title: "Geographical Indicators", desc: "Geo-certification & standardization." },
              { title: "Block Chain Traceability", desc: "Verified craft journey against counterfeits." },
              { title: "Craft Carbon Footprint", desc: "Measure and endorse eco-friendly practice." },
              { title: "Craft Price Valuation", desc: "Self estimator — your craft, your value." },
              { title: "Craft Vulnerability", desc: "Detection & prevention of industry disruption." },
              { title: "Craft Economics", desc: "Supporting livelihoods and industry health." },
              { title: "Fair Wages Monitoring", desc: "Empowerment via education and monitoring." },
            ].map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/25 backdrop-blur-lg border border-white/30">
                <h5 className="font-semibold text-[var(--primary)]">{s.title}</h5>
                <p className="mt-2 text-sm text-[var(--primary)]/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Long-form sections (history, challenges, fight) */}
        <section className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/30 backdrop-blur-2xl p-6 rounded-2xl border border-white/30">
            <h4 className="text-xl font-bold text-[var(--primary)]">History & Challenge</h4>
            <p className="mt-3 text-[var(--primary)]/85">The anglicization of Kashmir to "Cashmere" in the 19th century led to widespread industrial imitation and commodification of Kashmiri craft. This legacy continues to affect artisans who now face mass-produced imitations from various global producers.</p>
            <p className="mt-3 text-[var(--primary)]/85">Craftlore defends authenticity, works to eliminate middlemen exploitation, and brings artisans direct access to global markets.</p>
          </div>

          <div className="bg-white/30 backdrop-blur-2xl p-6 rounded-2xl border border-white/30">
            <h4 className="text-xl font-bold text-[var(--primary)]">Why Craftlore Matters</h4>
            <ul className="mt-3 list-disc pl-5 text-[var(--primary)]/85 space-y-2">
              <li>Preserve timeless craft heritage.</li>
              <li>Provide fair pay and visibility for artisans.</li>
              <li>Enable buyers to make informed, ethical choices.</li>
            </ul>
          </div>
        </section>

        {/* Milestones 2025 (KPIs) */}
        <section id="milestones" className="mt-14">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Data Insights — 2025 Milestones</h3>
          <p className="mt-2 text-[var(--primary)]/80 max-w-3xl">Craftlore's 2025 milestones are critical metrics showing the platform's impact in fighting counterfeit products and growing artisan livelihoods through technology and traceability.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/25 backdrop-blur-lg border border-white/30">
              <h4 className="text-3xl font-extrabold text-[var(--secondary)]">108,562</h4>
              <p className="mt-1 text-[var(--primary)]/85">Platform Visitors</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/25 backdrop-blur-lg border border-white/30">
              <h4 className="text-3xl font-extrabold text-[var(--secondary)]">2,000</h4>
              <p className="mt-1 text-[var(--primary)]/85">Artisans</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/25 backdrop-blur-lg border border-white/30">
              <h4 className="text-3xl font-extrabold text-[var(--secondary)]">18</h4>
              <p className="mt-1 text-[var(--primary)]/85">Craft Associations</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-14">
          <h3 className="text-2xl font-bold text-[var(--primary)]">What Craftlore Subscribers Say</h3>
          <div className="mt-6 bg-white/30 backdrop-blur-xl p-6 rounded-2xl border border-white/30 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="text-[var(--primary)]/70 text-sm mb-4">Voices from Kashmir — Artisans & Craft Communities</div>
              <div className="text-lg md:text-xl font-semibold text-[var(--primary)]">"{testimonials[testIndex].quote}"</div>
              <div className="mt-3 text-sm text-[var(--primary)]/80">{testimonials[testIndex].name} — <span className="font-medium">{testimonials[testIndex].role}</span></div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => setTestIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="px-3 py-2 rounded-lg bg-white/40 border border-white/25"
                >
                  Prev
                </button>
                <button
                  onClick={() => setTestIndex((i) => (i + 1) % testimonials.length)}
                  className="px-3 py-2 rounded-lg bg-[var(--secondary)] text-[var(--primary)] font-semibold"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="w-full md:w-56 p-4 rounded-2xl bg-white/20 border border-white/20 text-sm">
              <h5 className="font-semibold text-[var(--primary)]">Subscriber Snapshots</h5>
              <ul className="mt-3 text-[var(--primary)]/80 space-y-2">
                <li>"I now sell without middlemen." — Firdous Ahmad</li>
                <li>"Blockchain certificate helped my son sell internationally." — Manzoor Hussain</li>
                <li>"I received a scholarship thanks to the artisan registry." — Yasmeen Bano</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partners / Support network */}
        <section id="partners" className="mt-14">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Who Support our Initiative</h3>
          <p className="mt-2 text-[var(--primary)]/80 max-w-3xl">Our formidable support network combines business, administrative, technological, and marketing partners who share the commitment to preserving Kashmiri crafts.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Hamdan Craft Revival Foundation", role: "Administrative Support", url: "https://www.khcrf.org" },
              { name: "Prime Logic Solutions USA", role: "Technology Support", url: "https://www.primelogicsol.com" },
              { name: "Kashmir ArtStay India", role: "Marketing Support", url: "https://www.kashmirartstay.com" },
              { name: "B2B Connect USA", role: "Business Support", url: "https://www.b2b.dekoshurcrafts.com" },
            ].map((p, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/25 backdrop-blur-lg border border-white/30">
                <h5 className="font-semibold text-[var(--primary)]">{p.name}</h5>
                <p className="mt-1 text-sm text-[var(--primary)]/80">{p.role}</p>
                <a href={p.url} className="mt-3 inline-block text-sm text-[var(--secondary)] underline">{p.url.replace(/^https?:\/\//, "")}</a>
              </div>
            ))}
          </div>
        </section>

        {/* Long-form content dump included as requested */}
        <section className="mt-14 bg-white/25 backdrop-blur-lg p-6 rounded-2xl border border-white/30">
          <h4 className="text-xl font-bold text-[var(--primary)]">Full Content</h4>
          <div className="mt-4 text-[var(--primary)]/85 space-y-4 text-sm leading-relaxed">
            {/* Put the long provided content here verbatim — trimmed only for layout */}
            <p>
              Craftlore is a cutting-edge, Non-Commercial digital platform engineered for the in-depth analysis of Kashmir's 700+ year craft heritage. By seamlessly blending historical, artistic, and scientific frameworks, Craftlore sets the benchmark for authenticity and transparency.
            </p>

            <p>
              Craftlore uses advanced Geo-Certification protocols to ensure precise geospatial verification of craft origins, delivering unmatched accuracy in counterfeit prevention. Our Craft Profile Registry stands as a dynamic digital powerhouse, delivering in-depth insights into the origins, techniques, & materials of authentic Kashmiri crafts, empowering instant recognition of imitations and safeguarding heritage with precision.
            </p>

            <p>
              We track the Carbon Footprint of each craft, enabling artisans to embrace sustainable practices and empowering consumers to choose eco-friendly products, collectively reducing impact. Craftlore offers an Immutable Blockchain Record of every craft's journey, guaranteeing authenticity, preventing counterfeits, and ensuring sustainability, empowering consumers with confidence.
            </p>

            <p>
              Our Valuation Tool-Calculator delivers fair, Dynamic Data-Driven Pricing for authentic Kashmiri crafts, providing accurate pricing for buyers and fair compensation for artisans. Unlock Everything Our Platform Offers—At No Cost to You. A wealth of tools and insights, completely free. Our platform provides a comprehensive suite of tools designed to offer transparency, ethical evaluation, and deeper insights into the craftsmanship behind every piece.
            </p>

            <p>
              From verifying origins through Geographical Indications (GI) to tracking each product's journey with blockchain, we ensure every craft you encounter reflects true heritage and integrity. With services ranging from price valuation and carbon footprint assessment to empowering women artisans and protecting vulnerable crafts, Craftlore is your trusted source for everything related to Kashmir's rich craft tradition.
            </p>

            <p>
              We tackle the longstanding issues of Counterfeit Products and Middlemen Exploitation in the Kashmiri handicraft industry. Craftlore utilizes advanced technology to ensure direct connections between buyers and artisans, providing traceability and verification for every handmade product. Together, we can eliminate middlemen and counterfeit traders, preserving the true essence of Kashmiri craftsmanship.
            </p>

            <p>
              The anglicization of Kashmir into "Cashmere" in the 19th century marked the beginning of a strategic and ongoing exploitation of Kashmir's cultural heritage. British colonial powers deliberately rebranded it as "Cashmere", stripping away cultural significance and paving the way for mass-produced imitations. Today, global mass production continues to threaten artisan livelihoods and authenticity.
            </p>

            <p>
              Despite these challenges, Kashmir and its artisans remain a living repository of craft knowledge, recognized by UNESCO and World Craft networks, and Craftlore stands to protect, digitize, and elevate this heritage for future generations.
            </p>
          </div>
        </section>

        {/* Subscribe / CTA */}
        <section id="subscribe" className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 bg-white/30 backdrop-blur-2xl p-6 rounded-2xl border border-white/30">
            <h4 className="text-2xl font-bold text-[var(--primary)]">Stay Connected to Craftlore</h4>
            <p className="mt-2 text-[var(--primary)]/80">Subscribe to receive updates, research, and artisan stories from the Craftlore-Kashmir Craft Repository.</p>

            <form className="mt-4 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input aria-label="Email" type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 focus:outline-none" />
              <button type="submit" className="px-5 py-3 rounded-lg bg-[var(--secondary)] text-[var(--primary)] font-semibold">Subscribe Today</button>
            </form>
          </div>

          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl border border-white/30">
            <h5 className="font-semibold text-[var(--primary)]">Platform Metrics</h5>
            <div className="mt-3 grid grid-cols-2 gap-3 text-[var(--primary)]/85">
              <div>
                <div className="text-xl font-bold text-[var(--secondary)]">108,562</div>
                <div className="text-sm">Platform Visitors</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[var(--secondary)]">2,000</div>
                <div className="text-sm">Artisans</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[var(--secondary)]">18</div>
                <div className="text-sm">Craft Associations</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[var(--secondary)]">5</div>
                <div className="text-sm">Institutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Register / CTA */}
        <section id="register" className="mt-14 mb-20">
          <div className="bg-gradient-to-r from-[var(--secondary)]/8 to-white/6 p-6 rounded-3xl border border-white/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold text-[var(--primary)]">Join Craftlore — Empower Artisans & Protect Heritage</h4>
              <p className="text-[var(--primary)]/80 mt-2">Register to access the craft registry, valuation tools, and geo-certification services.</p>
            </div>
            <div className="flex gap-3">
              <a href="#register" className="px-5 py-3 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-semibold">Register</a>
              <a href="#contact" className="px-5 py-3 rounded-full border border-white/30 text-[var(--primary)]">Contact</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 mt-6 border-t border-white/30 bg-white/10 backdrop-blur-lg">
        <div className="mx-6 md:mx-10 lg:mx-20 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-[var(--primary)]">Craft Guru</h5>
            <p className="text-sm mt-2 text-[var(--primary)]/75">Empowering Authentic Kashmir Crafts — Non-commercial initiative under Hamdan Craft Revival Foundation.</p>
          </div>
          <div>
            <h5 className="font-semibold text-[var(--primary)]">Links</h5>
            <ul className="mt-2 text-sm text-[var(--primary)]/75 space-y-1">
              <li><a href="#about" className="hover:text-[var(--secondary)]">About</a></li>
              <li><a href="#features" className="hover:text-[var(--secondary)]">Platform</a></li>
              <li><a href="#partners" className="hover:text-[var(--secondary)]">Partners</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-[var(--primary)]">Contact</h5>
            <p className="mt-2 text-sm text-[var(--primary)]/75">For institutional queries & partnership: <br/> <a href="mailto:info@craftlore.org" className="text-[var(--secondary)]">info@craftlore.org</a></p>
          </div>
        </div>

        <div className="text-center text-sm text-[var(--primary)]/60 pb-6">© {new Date().getFullYear()} Craft Guru — Craftlore. All rights reserved.</div>
      </footer>
    </div>
  );
}
