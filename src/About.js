// About.js
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Shield, Award, Globe, Users, Target, CheckCircle, Star, Phone, Mail, MapPin, Facebook, Instagram, Twitter, TrendingUp, Smile, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "20+", label: "Years Experience", icon: <TrendingUp className="w-8 h-8 md:w-12 md:h-12" /> },
    { value: "500+", label: "Tours Conducted", icon: <Globe className="w-8 h-8 md:w-12 md:h-12" /> },
    { value: "5000+", label: "Happy Travelers", icon: <Smile className="w-8 h-8 md:w-12 md:h-12" /> },
    { value: "100%", label: "Safety Record", icon: <Shield className="w-8 h-8 md:w-12 md:h-12" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Safety First",
      description: "Your security and wellbeing are our top priority. We ensure every journey is safe, secure, and comfortable with trained professionals and 24/7 support."
    },
    {
      icon: <Heart className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Women-Centric Travel",
      description: "As a women-led organization with women tour coordinators and managers, we understand and cater to the unique needs of women travelers, making their journeys pleasant and memorable."
    },
    {
      icon: <Award className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Professional Excellence",
      description: "IATA certified professionals with HMI training and over 20 years of experience in travel and tourism, ensuring the highest standards in every tour we conduct."
    },
    {
      icon: <Globe className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Customized Tours",
      description: "We specialize in customizing tours as per your requirements - combining facilities and services to create your self-visualized vacation across India, Nepal, and Bhutan."
    }
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      description: "20+ years in tourism industry"
    },
    {
      name: "Anjali Reddy",
      role: "Operations Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      description: "Expert in tour planning"
    },
    {
      name: "Meera Patel",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80",
      description: "Ensuring happy journeys"
    }
  ];

  const certifications = [
    { name: "NIDHI Registered", description: "Ministry of Tourism & Maharashtra Tourism" },
    { name: "IATA Certified", description: "International Air Transport Association" },
    { name: "HMI Trained", description: "Hospitality Management Institute" },
    { name: "ISO Certified", description: "Quality Management Standards" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg ' : 'bg-transparent py-4 md:py-6'}`}>
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1 md:p-2 rounded-xl bg-transparent">
              <img src="/images/logo.png" alt="India Tour Company" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
            {/* <div>
              <span className={`text-lg md:text-2xl font-bold block ${isScrolled ? 'bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent' : 'text-white drop-shadow-lg'}`}>India Tour Company</span>
              <span className={`text-xs font-semibold hidden md:block ${isScrolled ? 'text-pink-900' : 'text-white/90'}`}>NIDHI Certified</span>
            </div> */}
          </Link>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
           <Link 
             to="/" 
             className={`font-semibold transition-all duration-300 relative group ${
               isScrolled 
                 ? 'text-gray-700 hover:text-[#912082]' 
                 : 'text-white hover:text-[#912082] px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm'
             }`}
           >
             Home
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#912082] to-pink-900 rounded-full group-hover:w-full transition-all duration-300"></span>
           </Link>
           <Link 
             to="/tours" 
             className={`font-semibold transition-all duration-300 relative group ${
               isScrolled 
                 ? 'text-gray-700 hover:text-[#912082]' 
                 : 'text-white hover:text-[#912082] px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm'
             }`}
           >
             Tours
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#912082] to-pink-900 rounded-full group-hover:w-full transition-all duration-300"></span>
           </Link>
             {/* <a href="#gallery" className={`font-semibold transition-all duration-300 relative group ${isScrolled ? 'text-gray-700 hover:text-[#912082]' : 'text-white hover:text-[#912082]'}`}>
               Gallery
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#912082] to-pink-900 rounded-full group-hover:w-full transition-all duration-300"></span>
             </a> */}
           <Link 
             to="/about" 
             className={`font-semibold transition-all duration-300 relative group ${
               isScrolled 
                 ? 'text-gray-700 hover:text-[#912082]' 
                 : 'text-white hover:text-[#912082] px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm'
             }`}
           >
             About Us
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#912082] to-pink-900 rounded-full group-hover:w-full transition-all duration-300"></span>
           </Link>
           <Link 
             to="/contact" 
             className={`font-semibold transition-all duration-300 relative group ${
               isScrolled 
                 ? 'text-gray-700 hover:text-[#912082]' 
                 : 'text-white hover:text-[#912082] px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm'
             }`}
           >
             Contact
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#912082] to-pink-900 rounded-full group-hover:w-full transition-all duration-300"></span>
           </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Link to="/contact" className="hidden md:block px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full hover:shadow-xl transition text-sm lg:text-base font-semibold">
              Enquire Now
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-xl bg-gradient-to-br from-[#912082] to-pink-900">
              {isMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full mt-3 py-4 rounded-b-2xl border-t-4 border-[#912082]">
            <Link to="/" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/tours" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              Tours
            </Link>
            {/* <a href="/#gallery" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </a> */}
            <Link to="/about" className="block px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 font-semibold text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero/3.jpeg"
            alt="Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20 pb-10">
          <div className="inline-block mb-4 md:mb-6 animate-fadeInDown">
            <div className="px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm shadow-lg rounded-full border-2 border-white/30">
              <span className="text-white font-bold text-sm md:text-lg">
                ✨ About Our Journey ✨
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl animate-fadeInUp">
            20 Years of Creating Memories
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 md:mb-10 font-semibold px-2 drop-shadow-lg animate-fadeInUp animation-delay-200">
            Your trusted partner in exploring Incredible India
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#912082] to-pink-900 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-bold text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block mb-3 md:mb-4">
                <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                  📖 Our Story 📖
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
                Journey of Excellence
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12">
              <div className="relative order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" alt="Our Story" className="rounded-2xl md:rounded-3xl shadow-2xl w-full" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#912082] to-pink-900 rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                  A <span className="font-black text-[#912082]">NIDHI registered company</span> under the Ministry of Tourism and Maharashtra Tourism, we are a <span className="font-black text-[#912082]">women-led organization</span> committed to providing safe, secure, and happy vacations for all.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                  The company is dedicated to providing comfortable travel and tours, especially for women. Understanding the basic needs of women travelers, our <span className="font-black text-[#912082]">women tour coordinators and tour managers</span> make their journeys and visits pleasant and memorable.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                  Professionally qualified with <span className="font-black text-[#912082]">IATA certification</span> and training from Hotel Management Institutes (HMI), our promoters have <span className="font-black text-[#912082]">over 20 years of experience</span> in travel and tourism.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-black mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">
                Our Approach
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold mb-4">
                With the support and collaboration of many associates at different tourist destinations, every effort is taken to make a tour <span className="font-black text-[#912082]">seamless and smooth</span> so that tourists enjoy the place with its cultural ethnicity, heritage, and natural beauty.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                <span className="font-black text-[#912082]">Customizing tours is our specialty</span> wherein facilities and services are combined together as per the requirements of tourists, thus making these tours self-visualized vacations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                🎯 Our Expertise 🎯
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
              Specialized Tours We Conduct
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { title: "Couple Tours", icon: "💑", desc: "Romantic getaways designed for couples" },
              { title: "Family Tours", icon: "👨‍👩‍👧‍👦", desc: "Memorable vacations for the whole family" },
              { title: "Family-Friends Tours", icon: "👥", desc: "Group tours with loved ones" },
              { title: "Common Interest Tours", icon: "🎨", desc: "Tours based on shared interests" },
              { title: "Eco Tours", icon: "🌿", desc: "Sustainable and nature-focused journeys" },
              { title: "Hiking Adventures", icon: "🥾", desc: "Trekking and mountain expeditions" },
              { title: "Jungle Safaris", icon: "🦁", desc: "Wildlife exploration experiences" },
              { title: "Pilgrimage Tours", icon: "🙏", desc: "Spiritual journeys to sacred sites" },
              { title: "Off-beat Destinations", icon: "🗺️", desc: "Scenic unexplored locations" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink-200">
                <div className="text-4xl md:text-5xl mb-3">{item.icon}</div>
                <h4 className="text-lg md:text-xl font-black mb-2 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
              We create and conduct tours in <span className="font-black text-[#912082]">Pan India, Nepal, and Bhutan</span>, specializing in eco tours, hiking, jungle safaris, pilgrimage tours, and off-beat scenic destination tours - something which tourists can look forward to.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                ⭐ Our Values ⭐
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink-200">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#912082] to-pink-900 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-semibold text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                🏆 Certifications 🏆
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
              Trusted & Certified
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#912082]">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#912082] to-pink-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-black text-center mb-2 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">
                  {cert.name}
                </h4>
                <p className="text-gray-600 text-center text-xs md:text-sm font-semibold">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                👥 Our Team 👥
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
              Meet Our Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-4 md:mb-6 inline-block">
                  <img src={member.image} alt={member.name} className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 md:border-8 border-[#912082] shadow-2xl group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-2 right-2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#912082] to-pink-900 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-[#912082] font-bold text-sm md:text-base mb-2">{member.role}</p>
                <p className="text-gray-600 font-semibold text-xs md:text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#912082]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 font-semibold">
              Let us create unforgettable memories for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tours" className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm md:text-lg">
                Explore Tours
              </Link>
              <Link to="/contact" className="px-8 md:px-12 py-3 md:py-4 bg-white border-2 border-[#912082] text-[#912082] rounded-full font-bold hover:bg-[#912082] hover:text-white transition-all duration-300 transform hover:scale-105 text-sm md:text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-2">
                Follow Us
              </h3>
              <p className="text-gray-600 font-semibold mb-6">Stay connected on social media</p>
              <div className="flex justify-center gap-4 md:gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#912082] to-pink-900 hover:from-pink-900 hover:to-[#912082] rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Facebook className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#912082] to-pink-900 hover:from-pink-900 hover:to-[#912082] rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Instagram className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#912082] to-pink-900 hover:from-pink-900 hover:to-[#912082] rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Twitter className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </a>
              </div>
            </div>
          </div>
      </section>

      {/* Footer */}
     {/* Footer */}
<footer className="bg-[#912082] text-white py-8 md:py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
      {/* Quick Links */}
      <div>
        <h5 className="font-black text-base md:text-xl mb-3 md:mb-4">Quick Links</h5>
        <ul className="space-y-1 md:space-y-2 text-white/80 font-semibold text-xs md:text-sm">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/tours" className="hover:text-white transition">Tours</Link></li>
          <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
        </ul>
      </div>
      
      {/* Popular Tours */}
      <div>
        <h5 className="font-black text-base md:text-xl mb-3 md:mb-4">Popular Tours</h5>
        <ul className="space-y-1 md:space-y-2 text-white/80 font-semibold text-xs md:text-sm">
          <li><Link to="/tours" className="hover:text-white transition">Chardham</Link></li>
          <li><Link to="/tours" className="hover:text-white transition">Kerala</Link></li>
          <li><Link to="/tours" className="hover:text-white transition">Rajasthan</Link></li>
          <li><Link to="/tours" className="hover:text-white transition">Ladakh</Link></li>
        </ul>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="p-2 md:p-3 bg-transparent rounded-xl md:rounded-2xl">
          <img src="/images/logo1.jpeg" alt="India Tour Company" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain shadow-lg" />
        </div>
      </div>
    </div>
    
    {/* Copyright Section */}
    <div className="border-t border-white/20 pt-6 md:pt-8">
      <div className="text-center">
        <p className="text-white/90 font-semibold text-xs md:text-sm">&copy; 2026 India Tour Company. All rights reserved.</p>
        <p className="text-white/80 mt-1 md:mt-2 font-semibold text-xs md:text-sm">✨ NIDHI Registered | IATA Certified | Ministry of Tourism ✨</p>
      </div>
    </div>
  </div>
</footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default About;