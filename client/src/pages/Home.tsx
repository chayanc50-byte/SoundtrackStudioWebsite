import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Soundtrack</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:+919804019019"
            className="hidden md:block px-8 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:+919804019019" className="px-8 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all w-full text-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/manus-storage/studio-hero-main_5df2a435.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Soundtrack Studio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
              Professional Recording, Mixing & Mastering for Artists & Filmmakers
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919804019019" className="px-8 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" style={{ animation: 'bounce 2s infinite' }}>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" style={{ animation: 'pulse 2s infinite' }}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4 text-accent">Our Services</h2>
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Professional Audio Solutions
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Recording',
                description: 'State-of-the-art recording facilities with premium microphones and preamps',
                icon: '🎙️',
              },
              {
                title: 'Mixing',
                description: 'Professional mixing using the best plugins and outboard gear',
                icon: '🎚️',
              },
              {
                title: 'Mastering',
                description: 'Tube mastering with Neve 1073 EQ and premium compressors',
                icon: '✨',
              },
              {
                title: 'Production',
                description: 'Full production services from concept to final delivery',
                icon: '🎵',
              },
              {
                title: 'Dubbing & Foley',
                description: 'Professional dubbing and foley work for films and media',
                icon: '🎬',
              },
              {
                title: 'Background Scoring',
                description: 'Custom background scoring and soundtrack composition',
                icon: '🎼',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 100}ms both` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4 text-accent">Our Arsenal</h2>
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Premium Equipment & Gear
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Software',
                items: ['Pro Tools', 'Logic Pro', 'Cubase', 'Ableton Live'],
              },
              {
                category: 'Microphones',
                items: ['Neumann U87', 'Shure SM7B', 'Condenser Array', 'Dynamic Mics'],
              },
              {
                category: 'Mixers',
                items: ['SSL Console', 'Neve 1073 EQ', 'API 2500', 'Analog Summing'],
              },
              {
                category: 'Acoustics',
                items: ['Acoustic Foam Treatment', 'Bass Traps', 'Diffusers', 'Isolation'],
              },
              {
                category: 'Monitoring',
                items: ['Genelec Monitors', 'Sennheiser Headphones', 'Reference Monitors', 'Calibration'],
              },
              {
                category: 'Instruments',
                items: ['Keyboards', 'Guitars', 'Drums', 'Percussion'],
              },
            ].map((gear, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 100}ms both` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>{gear.category}</h3>
                <ul className="space-y-2">
                  {gear.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div style={{ animation: 'slideInLeft 0.6s ease-out' }}>
              <img
                src="/manus-storage/studio-interior-full_2250ccf9.png"
                alt="Studio Interior"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div style={{ animation: 'slideInRight 0.6s ease-out' }}>
              <h2 className="text-accent mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Real-World Recording Solutions
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Soundtrack Studio was built with one vision in mind: to provide people with real-world recording solutions at affordable prices.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that quality music production should be accessible to everyone. Whether you're recording a song, mixing a project, mastering a track, or working on dubbing, foley, and background scoring for films, we're here to help you achieve your creative vision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team is passionate about delivering exceptional audio quality while maintaining competitive pricing. We use the best available equipment and techniques to ensure your project sounds professional and polished.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4 text-accent">Studio Showcase</h2>
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Inside Our Studio
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/manus-storage/studio-hero-main_5df2a435.png',
              '/manus-storage/studio-microphone-detail_11ba25b4.png',
              '/manus-storage/studio-mixing-console_35d74470.png',
              '/manus-storage/studio-interior-full_2250ccf9.png',
              '/manus-storage/studio-microphone-detail_11ba25b4.png',
              '/manus-storage/studio-mixing-console_35d74470.png',
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                style={{ animation: `scaleIn 0.6s ease-out ${idx * 100}ms both` }}
              >
                <img
                  src={img}
                  alt={`Studio ${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4 text-accent">Our Work</h2>
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Artists & Collaborations
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Independent Artists',
                description: 'We work with emerging and established independent musicians to bring their vision to life.',
              },
              {
                title: 'Film Productions',
                description: 'Professional dubbing, foley, and background scoring for films and documentaries.',
              },
              {
                title: 'Music Labels',
                description: 'Collaboration with music labels for album production and mastering.',
              },
              {
                title: 'Podcasts & Media',
                description: 'High-quality audio production for podcasts and digital media content.',
              },
              {
                title: 'Commercial Projects',
                description: 'Audio production for commercials, advertisements, and promotional content.',
              },
              {
                title: 'Educational Content',
                description: 'Audio engineering and production for educational and training materials.',
              },
            ].map((client, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 100}ms both` }}
              >
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{client.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4 text-accent">Get in Touch</h2>
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8" style={{ animation: 'slideInLeft 0.6s ease-out' }}>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+919804019019" className="text-accent hover:underline">
                    +91 98040 19019
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:chayanc50@gmail.com" className="text-accent hover:underline">
                    chayanc50@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Boro Pukur Dhar, Sukantanagar, Leninnagar<br />
                    Chinsurah, West Bengal 712102<br />
                    India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="http://www.facebook.com/studiosoundtrack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://soundcloud.com/soundtrack_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Music className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6" style={{ animation: 'slideInRight 0.6s ease-out' }}>
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6 text-accent" />
                <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Soundtrack</span>
              </div>
              <p className="text-muted-foreground">Professional audio production for artists and filmmakers.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-accent transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+919804019019" className="hover:text-accent transition-colors">
                    +91 98040 19019
                  </a>
                </li>
                <li>
                  <a href="mailto:chayanc50@gmail.com" className="hover:text-accent transition-colors">
                    chayanc50@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Soundtrack Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
