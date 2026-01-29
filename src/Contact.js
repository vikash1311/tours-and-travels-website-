import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight, Clock } from 'lucide-react';
import EnquiryModal from './EnquiryModal';
const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
const [selectedCategory, setSelectedCategory] = useState('');
const [selectedTour, setSelectedTour] = useState('');  

 const toursByCategory = {
  'Chardham': [
    { id: 1, name: "Kedarnath - Badrinath" },
    { id: 2, name: "Yamunotri - Gangotri - Kedarnath - Badrinath (11D/10N)" },
    { id: 3, name: "Yamunotri - Gangotri - Kedarnath - Badrinath (13D/12N)" },
    { id: 4, name: "Kedarnath - Badrinath (Helicopter)" },
    { id: 5, name: "Yamunotri - Gangotri - Kedarnath - Badrinath (Heli)" },
    { id: 6, name: "Rishikesh - Badrinath - Auli" },
    { id: 7, name: "Rishikesh - Kedarnath" },
    { id: 8, name: "Valley of Flowers - Hemkund Saheb - Badrinath - Auli" }
  ],
  'Gujarat': [
    { id: 9, name: "Ahmedabad - Modera - Rann of Kutch" },
    { id: 10, name: "Dwarka - Porbandar - Gir Lion Safari" }
  ],
  'Himachal Pradesh': [
    { id: 11, name: "Shimla - Manali" },
    { id: 12, name: "Dharamshala - Dalhousie" },
    { id: 13, name: "Spiti Valley Adventure" }
  ],
  'Kashmir & Ladakh': [
    { id: 14, name: "Srinagar - Gulmarg - Pahalgam" },
    { id: 15, name: "Leh - Ladakh Adventure" },
    { id: 16, name: "Kashmir Great Lakes Trek" }
  ],
  'Madhya Pradesh': [
    { id: 17, name: "Khajuraho - Orchha" },
    { id: 18, name: "Kanha - Bandhavgarh Tiger Safari" }
  ],
  'Maharashtra': [
    { id: 19, name: "Mumbai - Lonavala - Mahabaleshwar" },
    { id: 20, name: "Ajanta - Ellora Caves" }
  ],
  'Northeast': [
    { id: 21, name: "Meghalaya - Cherrapunji - Shillong" },
    { id: 22, name: "Arunachal Pradesh - Tawang" },
    { id: 23, name: "Sikkim - Gangtok - Pelling" }
  ],
  'Odisha & Chhattisgarh': [
    { id: 24, name: "Puri - Konark - Bhubaneswar" },
    { id: 25, name: "Bastar Tribal Tour" }
  ],
  'Rajasthan': [
    { id: 26, name: "Jaipur - Udaipur - Jodhpur" },
    { id: 27, name: "Golden Triangle Tour" },
    { id: 28, name: "Jaisalmer Desert Safari" }
  ],
  'South India': [
    { id: 29, name: "Kerala Backwaters & Beaches" },
    { id: 30, name: "Tamil Nadu Temple Tour" },
    { id: 31, name: "Karnataka Heritage Tour" },
    { id: 32, name: "Andhra Pradesh - Tirupati" }
  ],
  'Uttar Pradesh': [
    { id: 33, name: "Varanasi - Sarnath" },
    { id: 34, name: "Agra - Taj Mahal Tour" },
    { id: 35, name: "Lucknow Heritage Walk" }
  ],
  'Uttarakhand': [
    { id: 36, name: "Nainital - Mussoorie - Jim Corbett" },
    { id: 37, name: "Haridwar - Rishikesh Yoga Retreat" }
  ],
  'West Bengal & Sikkim': [
    { id: 38, name: "Darjeeling - Kalimpong" },
    { id: 39, name: "Sundarbans Mangrove Safari" },
    { id: 40, name: "Sikkim - North East Himalaya" }
  ]
};

const categories = Object.keys(toursByCategory);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedTour(''); // Reset tour selection when category changes
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      {/* Header - Same as Home Page */}
<header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent py-4 md:py-6'}`}>
  <nav className="container mx-auto px-4 flex items-center justify-between">
    <Link to="/" className="flex items-center space-x-2 md:space-x-3">
      <div className="p-1 md:p-2 rounded-xl bg-transparent">
        <img src="/images/logo.png" alt="India Tour Company" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
      </div>
      {/* <div>
        <span className={`text-lg md:text-2xl font-bold block ${isScrolled ? 'bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent' : 'text-white drop-shadow-lg'}`}>
          India Tour Company
        </span>
        <span className={`text-xs font-semibold hidden md:block ${isScrolled ? 'text-pink-900' : 'text-white/90'}`}>
          NIDHI Certified
        </span>
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
      <a 
        href="#contact-form" 
        className="hidden md:block px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full hover:shadow-xl hover:from-[#912082] hover:to-pink-900 transition text-sm lg:text-base font-semibold"
      >
        Enquire Now
      </a>
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
      <Link to="/about" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
        About Us
      </Link>
      <Link to="/contact" className="block px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 font-semibold text-[#912082]" onClick={() => setIsMenuOpen(false)}>
        Contact Us
      </Link>
    </div>
  )}
</header>

     {/* Hero Section with Background Image */}
<section className="relative h-[80vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
      alt="Contact Us"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10 text-center pt-20 pb-10">
    <div className="inline-block mb-4 md:mb-6 animate-fadeInDown">
      <div className="px-4 md:px-6 py-2 md:py-3 bg-white/95 shadow-lg rounded-full border-2 border-[#912082]">
        <span className="bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent font-bold text-sm md:text-lg">
          📞 Get In Touch 📞
        </span>
      </div>
    </div>

    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl animate-fadeInUp">
      Contact Us
    </h1>
    
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 md:mb-10 font-semibold px-2 drop-shadow-lg animate-fadeInUp animation-delay-200">
      We're here to help plan your perfect Indian adventure
    </p>
    
    <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center px-4 animate-fadeInUp animation-delay-400">
      <a href="tel:+918767764784" className="px-6 md:px-12 py-3 md:py-5 bg-white text-pink-900 rounded-full font-bold hover:bg-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-lg lg:text-xl">
        <Phone className="w-4 h-4 md:w-6 md:h-6" />
        Call Now
      </a>
      <a href="mailto:itcindia05@gmail.com" className="px-6 md:px-12 py-3 md:py-5 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold hover:from-[#912082] hover:to-pink-900 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm md:text-lg lg:text-xl flex items-center justify-center gap-2">
        <Mail className="w-4 h-4 md:w-6 md:h-6" />
        Email Us
      </a>
    </div>
  </div>
</section>



      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <section id="contact-form" className="py-12 md:py-20 bg-gradient-to-br from-pink-50 to-rose-50"></section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
                Send Us a Message
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-semibold">
                Fill out the form and we'll get back to you shortly
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-4 border-pink-200">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault();  }}>

{/* Tour Selection - Two Step */}
<div className="mb-6 space-y-4">
  <h3 className="text-lg font-bold text-[#912082]">Select Your Tour (Optional)</h3>
  
  {/* Step 1: Select Category */}
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
      1. Choose Category
    </label>
    <select 
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base"
    >
      <option value="">-- Select a category --</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
  
  {/* Step 2: Select Tour (Only shows when category is selected) */}
  {selectedCategory && (
    <div className="animate-fadeInUp">
      <label className="block text-sm font-bold text-gray-700 mb-2">
        2. Choose Tour from {selectedCategory}
      </label>
      <select 
        value={selectedTour}
        onChange={(e) => setSelectedTour(e.target.value)}
        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base"
      >
        <option value="">-- Select a tour --</option>
        {toursByCategory[selectedCategory].map((tour) => (
          <option key={tour.id} value={tour.id}>
            {tour.name}
          </option>
        ))}
      </select>
    </div>
  )}
  
  {/* Display Selected Tour */}
  {selectedTour && (
    <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200">
      <p className="text-sm font-bold text-[#912082]">
        ✓ Selected: {toursByCategory[selectedCategory].find(t => t.id === parseInt(selectedTour))?.name}
      </p>
    </div>
  )}
</div>


                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
      <input 
        type="tel" 
        required
        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" 
        placeholder="+91 98765 43210"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
    <input 
      type="email" 
      required
      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" 
      placeholder="your@email.com"
    />
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
      <input 
        type="date" 
        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" 
      />
    </div>
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Number of Days</label>
      <input 
        type="number" 
        min="1"
        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" 
        placeholder="e.g., 7"
      />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Number of Adults</label>
      <input 
        type="number" 
        min="1"
        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" 
        placeholder="e.g., 2"
      />
    </div>
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Number of Children</label>
      <input 
        type="number" 
        min="0"
        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" 
        placeholder="e.g., 1"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">Your Query</label>
    <textarea 
      rows="4" 
      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition resize-none bg-white font-semibold text-sm md:text-base" 
      placeholder="Tell us about your travel plans..."
    ></textarea>
  </div>

  <button 
    type="submit" 
    className="w-full py-4 md:py-5 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-xl font-black text-base md:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
  >
    Send Message <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
  </button>
</form>
            </div>
          </div>
        </div>
      </section>

            {/* Contact Information Cards */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#912082] to-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl">
                <Phone className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent mb-3">
                Call Us
              </h3>
              <p className="text-gray-600 font-semibold mb-2">Available 24/7</p>
              <a href="tel:+918767764784" className="block text-lg font-bold text-gray-700 hover:text-[#912082] transition mb-2">
                +91 87677 64784
              </a>
              <a href="tel:+919373757002" className="block text-lg font-bold text-gray-700 hover:text-[#912082] transition">
                +91 93737 57002
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#912082] to-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl">
                <Mail className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent mb-3">
                Email Us
              </h3>
              <p className="text-gray-600 font-semibold mb-2">Response within 24 hours</p>
              <a href="mailto:itcindia05@gmail.com" className="block text-lg font-bold text-gray-700 hover:text-[#912082] transition">
                itcindia05@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#912082] to-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent mb-3">
                Visit Us
              </h3>
              <p className="text-gray-600 font-semibold mb-2">Mon - Sat: 9 AM - 6 PM</p>
              <a href="https://maps.app.goo.gl/TXut2vHd3GErUTAf7" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-700 hover:text-[#912082] transition">
                9, Suryodaya, Gazetted Officers Colony, West High Court Road, Civillines, Nagpur 440001
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Map Section */}
<section className="py-12 md:py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8 md:mb-12">
      <div className="inline-block mb-4">
        <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
          🗺️ Our Location 🗺️
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent pb-1 overflow-visible" style={{lineHeight: '1.35'}}>
        Find Us Here
      </h2>
      <p className="text-lg text-gray-600 font-semibold">
        9, Suryodaya, Gazetted Officers Colony, Civil Lines, Nagpur 440001
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      {/* Map Container */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-4 md:p-6 shadow-2xl border-4 border-pink-200">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3536.9510034511754!2d79.05939867525991!3d21.149761180530064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA4JzU5LjEiTiA3OcKwMDMnNDMuMSJF!5e1!3m2!1sen!2sin!4v1769581663655!5m2!1sen!2sin"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="India Tour Company Office Location"
          ></iframe>
        </div>
      </div>
      
      {/* Get Directions Button */}
      <div className="text-center mt-8">
        <a 
          href="https://maps.app.goo.gl/TXut2vHd3GErUTAf7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <MapPin className="w-5 h-5" />
          Get Directions
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Social Media Section */}
<section className="py-8 md:py-12 bg-gradient-to-br from-pink-50 to-rose-50">
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

  .animation-delay-400 {
    animation-delay: 0.4s;
  }
`}</style>
      <EnquiryModal 
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        tourData={null}
      />
    </div>
  );
};

export default Contact;