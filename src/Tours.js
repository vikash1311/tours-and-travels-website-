import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPinIcon, Phone, Mail, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import EnquiryModal from './EnquiryModal';



const Tours = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeRegion, setActiveRegion] = useState('Chardham');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const regions = ['Chardham', 'Gujarat', 'Himachal Pradesh', 'Kashmir & Ladakh', 'Madhya Pradesh', 'Maharashtra', 'Northeast', 'Odisha & Chhattisgarh', 'Rajasthan', 'South India', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal & Sikkim'];

  const handleEnquireClick = (tour) => {
  setSelectedTour(tour);
  setIsEnquiryModalOpen(true);
};
  // ADD THIS AFTER LINE 10:
const regionLogos = {
  'Chardham': '/images/category/chardham.jpg', // Kedarnath Temple
  'Gujarat': '/images/category/gujrat.jpg', // Statue of Unity
  'Himachal Pradesh': '/images/category/hp.jpg', // Shimla hills
  'Kashmir & Ladakh': '/images/category/kashmir.jpg', // Dal Lake
  'Madhya Pradesh': '/images/category/mp.jpg', // Khajuraho temples
  'Maharashtra': '/images/category/mh.jpg', // Gateway of India
  'Northeast': '/images/category/ne.jpg', // Tawang Monastery
  'Odisha & Chhattisgarh': '/images/category/odisha.jpg', // Konark Sun Temple
  'Rajasthan': '/images/category/rj.jpg', // Hawa Mahal
  'South India': '/images/category/si.jpg', // Kerala Backwaters
  'Uttar Pradesh': '/images/category/up.jpg', // Taj Mahal
  'Uttarakhand': '/images/category/uk.jpg', // Himalayan peaks
  'West Bengal & Sikkim': '/images/category/wb.jpg' // Darjeeling tea gardens
};

  const content = {
    tours: {
      'Chardham': [
        { 
          id: 1,
          name: "Kedarnath - Badrinath", 
          description: "Embark on a divine journey to two of the most sacred Char Dham temples nestled in the Himalayas",
          duration: "7D/6N", 
          price: "₹18,500",
          startFrom: "Haridwar/Rishikesh", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["Kedarnath Temple Trek", "Badrinath Darshan", "Himalayan Views", "River Rafting in Rishikesh"],
          destinations: "Haridwar → Kedarnath → Badrinath → Rishikesh"
        },
        { 
          id: 2,
          name: "Yamunotri - Gangotri - Kedarnath - Badrinath", 
          description: "Complete Char Dham Yatra covering all four sacred shrines with experienced guides and comfortable stay",
          duration: "11D/10N", 
          price: "₹28,500",
          startFrom: "Haridwar/Rishikesh", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["All 4 Dhams", "Scenic Mountain Routes", "Spiritual Experience", "Expert Guides"],
          destinations: "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath"
        },
        { 
          id: 3,
          name: "Yamunotri - Gangotri - Kedarnath - Badrinath", 
          description: "Extended Char Dham tour starting from Delhi with additional sightseeing and comfortable travel",
          duration: "13D/12N", 
          price: "₹32,000",
          startFrom: "New Delhi", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["Delhi Pickup", "All 4 Temples", "Comfortable Hotels", "Meals Included"],
          destinations: "Delhi → Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Delhi"
        },
        { 
          id: 4,
          name: "Kedarnath - Badrinath (Helicopter)", 
          description: "Luxury helicopter darshan of Kedarnath and Badrinath temples for a quick spiritual journey",
          duration: "3D/2N", 
          price: "₹1,25,000",
          startFrom: "Dehradun", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["Helicopter Service", "VIP Darshan", "Luxury Stay", "Time Saving"],
          destinations: "Dehradun → Kedarnath (Heli) → Badrinath (Heli) → Dehradun"
        },
        { 
          id: 5,
          name: "Yamunotri - Gangotri - Kedarnath - Badrinath (Heli)", 
          description: "Ultimate luxury Char Dham by helicopter - complete spiritual journey in minimum time",
          duration: "2D/1N", 
          price: "₹1,85,000",
          startFrom: "Dehradun", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["Full Helicopter Tour", "All 4 Dhams in 2 Days", "Premium Service", "VIP Treatment"],
          destinations: "Dehradun → All Char Dhams by Helicopter → Dehradun"
        },
        { 
          id: 6,
          name: "Rishikesh - Badrinath - Auli", 
          description: "Combine spiritual pilgrimage with adventure at Auli ski resort and beautiful valleys",
          duration: "6D/5N", 
          price: "₹22,000",
          startFrom: "Rishikesh", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["Badrinath Temple", "Auli Ropeway", "Snow Activities", "Mountain Views"],
          destinations: "Rishikesh → Joshimath → Badrinath → Auli → Rishikesh"
        },
        { 
          id: 7,
          name: "Rishikesh - Kedarnath", 
          description: "Focused pilgrimage to Lord Shiva's abode with trekking and yoga in Rishikesh",
          duration: "6D/5N", 
          price: "₹16,500",
          startFrom: "Rishikesh", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["Kedarnath Trek", "Yoga in Rishikesh", "Ganga Aarti", "Temple Darshan"],
          destinations: "Rishikesh → Gaurikund → Kedarnath → Rishikesh"
        },
        { 
          id: 8,
          name: "Valley of Flowers - Hemkund Saheb - Badrinath - Auli", 
          description: "UNESCO heritage Valley of Flowers trek combined with sacred Sikh shrine and Hindu temple",
          duration: "8D/7N", 
          price: "₹25,500",
          startFrom: "Rishikesh", 
          image: "/images/tours/chardham.jpg",
          category: "Chardham",
          highlights: ["Valley of Flowers Trek", "Hemkund Sahib", "Badrinath Temple", "Alpine Meadows"],
          destinations: "Rishikesh → Govindghat → Valley of Flowers → Hemkund → Badrinath → Auli"
        }
      ],
      'Gujarat': [
        { 
          id: 9, 
          name: "Ahmedabad - Modera - Rann of Kutch", 
          description: "Explore Gujarat's vibrant culture, white desert, and ancient sun temple", 
          duration: "3D/2N", 
          price: "₹12,500", 
          startFrom: "Ahmedabad", 
          image: "/images/tours/gujrat.jpg", 
          category: "Gujarat", 
          highlights: ["Rann of Kutch", "Modera Sun Temple", "Cultural Shows", "Local Cuisine"], 
          destinations: "Ahmedabad → Modera → Rann of Kutch" 
        },
        { 
          id: 10, 
          name: "Dwarka - Porbandar - Gir Lion Safari", 
          description: "Divine journey to Krishna's kingdom combined with thrilling wildlife safari", 
          duration: "5D/4N", 
          price: "₹18,000", 
          startFrom: "Rajkot", 
          image: "/images/tours/gujrat.jpg", 
          category: "Gujarat", 
          highlights: ["Dwarka Temple", "Asiatic Lions", "Beach Visit", "Porbandar Heritage"], 
          destinations: "Rajkot → Dwarka → Porbandar → Gir" 
        }
      ],
      'Himachal Pradesh': [
        { 
          id: 11, 
          name: "Shimla - Manali - Chandigarh",
          description: "Experience the best of hill stations with colonial charm and mountain adventures", 
          duration: "7D/6N", 
          price: "₹22,000", 
          startFrom: "New Delhi", 
          image: "/images/tours/hp.jpg", 
          category: "Himachal Pradesh", 
          highlights: ["Mall Road Shimla", "Solang Valley", "Rohtang Pass", "Adventure Sports"], 
          destinations: "Delhi → Shimla → Manali → Chandigarh" 
        }
      ],
      'Kashmir & Ladakh': [
        { id: 12, name: "Srinagar - Gulmarg - Pahalgam - Sonamarg", description: "Discover paradise on earth with Kashmir's pristine valleys and meadows", duration: "8D/7N", price: "₹28,000", startFrom: "Srinagar", image: "/images/tours/kashmir.jpg", category: "Kashmir & Ladakh", highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Betaab Valley", "Snow Activities"], destinations: "Srinagar → Gulmarg → Pahalgam → Sonamarg" }
      ],
      'Rajasthan': [
        { id: 13, name: "Jaipur - Pushkar - Ajmer - Jaisalmer - Jodhpur", description: "Royal Rajasthan tour covering majestic forts, palaces and golden sand dunes", duration: "7D/6N", price: "₹24,000", startFrom: "Jaipur", image: "/images/tours/rj.jpg", category: "Rajasthan", highlights: ["Amber Fort", "Camel Safari", "Desert Camp", "Blue City"], destinations: "Jaipur → Pushkar → Jaisalmer → Jodhpur" }
      ],
      'South India': [
        { id: 14, name: "Cochin - Munnar - Thekkady - Alleppey", description: "God's Own Country - Kerala backwaters, tea gardens and wildlife sanctuary", duration: "6D/5N", price: "₹26,000", startFrom: "Cochin", image: "/images/tours/si.jpg", category: "South India", highlights: ["Houseboat Stay", "Tea Plantations", "Periyar Wildlife", "Kathakali Dance"], destinations: "Cochin → Munnar → Thekkady → Alleppey" }
      ],
      'Uttar Pradesh': [
        { id: 15, name: "Agra - Fatehpur Sikri - Mathura", description: "Mughal heritage trail featuring the iconic Taj Mahal and ancient temples", duration: "3D/2N", price: "₹14,500", startFrom: "Agra", image: "/images/tours/up.jpg", category: "Uttar Pradesh", highlights: ["Taj Mahal", "Agra Fort", "Krishna Janmabhoomi", "Fatehpur Sikri"], destinations: "Agra → Fatehpur Sikri → Mathura" }
      ],
      'Uttarakhand': [
        { id: 16, name: "Nainital - Kausani - Corbett N. Park", description: "Lake district beauty combined with exciting wildlife safari in Jim Corbett", duration: "6D/5N", price: "₹19,500", startFrom: "Kathgodam/Rampur", image: "/images/tours/uk.jpg", category: "Uttarakhand", highlights: ["Naini Lake", "Tiger Safari", "Himalayan Sunrise", "Nature Walks"], destinations: "Kathgodam → Nainital → Kausani → Corbett" }
      ],
      'West Bengal & Sikkim': [
        { id: 17, name: "Darjeeling - Gangtok", description: "Toy train ride, tea gardens and monasteries in the lap of Kanchenjunga", duration: "6D/5N", price: "₹21,000", startFrom: "Siliguri", image: "/images/tours/wb.jpg", category: "West Bengal & Sikkim", highlights: ["Toy Train Ride", "Tiger Hill Sunrise", "Tsomgo Lake", "Buddhist Monasteries"], destinations: "Siliguri → Darjeeling → Gangtok" }
      ],
      'Madhya Pradesh': [
        { id: 18, name: "Khajuraho - Orchha", description: "Explore UNESCO world heritage temples with stunning erotic sculptures and medieval forts", duration: "5D/4N", price: "₹16,500", startFrom: "Jhansi", image: "/images/tours/mp.jpg", category: "Madhya Pradesh", highlights: ["Khajuraho Temples", "Orchha Fort", "Light & Sound Show", "Heritage Walk"], destinations: "Jhansi → Khajuraho → Orchha" }
      ],
      'Maharashtra': [
        { id: 19, name: "Ellora - Ajanta - Grishneshwar - Aurangabad - Shirdi", description: "Ancient rock-cut caves, UNESCO sites and sacred Sai Baba temple", duration: "5D/4N", price: "₹17,500", startFrom: "Aurangabad", image: "/images/tours/mh.jpg", category: "Maharashtra", highlights: ["Ellora Caves", "Ajanta Paintings", "Shirdi Sai Baba", "Grishneshwar Jyotirlinga"], destinations: "Aurangabad → Ellora → Ajanta → Shirdi" }
      ],
      'Odisha & Chhattisgarh': [
        { id: 20, name: "Bhubaneswar - Konark - Puri", description: "Golden triangle of Odisha - temples, beach and Jagannath darshan", duration: "6D/5N", price: "₹15,500", startFrom: "Bhubaneswar", image: "/images/tours/odisha.jpg", category: "Odisha & Chhattisgarh", highlights: ["Jagannath Temple", "Konark Sun Temple", "Beach Festival", "Temple Architecture"], destinations: "Bhubaneswar → Konark → Puri" }
      ],
      'Northeast': [
        { id: 21, name: "Assam - Meghalaya", description: "Living root bridges, tea gardens and one-horned rhino safari", duration: "6D/5N", price: "₹23,000", startFrom: "Guwahati", image: "/images/tours/ne.jpg", category: "Northeast", highlights: ["Kaziranga Safari", "Living Root Bridges", "Cherrapunji Waterfalls", "Tea Garden Tours"], destinations: "Guwahati → Kaziranga → Shillong → Cherrapunji" }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white overflow-x-hidden">
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
            <Link to="/contact" className="hidden md:block px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full hover:shadow-xl hover:from-[#912082] hover:to-pink-900 transition text-sm lg:text-base font-semibold">
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
            <Link to="/tours" className="block px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 font-semibold text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              Tours
            </Link>
            {/* <a href="/#gallery" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </a> */}
            <Link to="/about" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      {/* Hero Banner */}
<section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img 
      src="/images/hero/2.jpg"
      alt="Tours Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-block mb-4 md:mb-6">
<span className="px-4 md:px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-sm md:text-lg shadow-xl border-2 border-white/30 animate-fadeInDown">
          ✨ Explore Incredible India ✨
        </span>
      </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 text-white drop-shadow-2xl animate-fadeInUp">
        Discover Our Tours
      </h1>
<p className="text-lg md:text-xl lg:text-2xl text-white/90 font-semibold drop-shadow-lg animate-fadeInUp animation-delay-200">
        Choose from our extensive collection of curated tours across India
      </p>
    </div>
  </div>
</section>

      {/* Tours Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            {/* Region Filter Tabs */}
<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
  {regions.map((region) => (
    <button
      key={region}
      onClick={() => setActiveRegion(region)}
      className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
        activeRegion === region
          ? 'bg-gradient-to-r from-[#912082] to-pink-900 text-white shadow-xl'
          : 'bg-white text-gray-700 border-2 border-pink-200 hover:border-[#912082]'
      }`}
    >
      <img src={regionLogos[region]} alt={region} className="w-6 h-6 md:w-7 md:h-7 rounded-full object-cover" />
      {region}
    </button>
  ))}
</div>
          </div>
          
          {/* Display Tours based on selected region */}
          <div>
<h3 className="text-2xl md:text-4xl font-black mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent text-center pb-1 overflow-visible" style={{lineHeight: '1.35'}}>{activeRegion} Tours</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {content.tours[activeRegion]?.map((tour) => (
                <div key={tour.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 group">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#912082] to-pink-900 px-3 py-1.5 rounded-full text-white font-bold text-xs shadow-lg">
                      {tour.duration}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-xl md:text-2xl font-black text-white drop-shadow-lg line-clamp-2 mb-1">{tour.name}</h4>
                      <p className="text-white/90 text-xs font-semibold line-clamp-2">{tour.description}</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-start gap-2 text-[#912082]">
                      <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-bold line-clamp-2">{tour.destinations}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-gray-500 uppercase">Highlights:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.highlights.slice(0, 3).map((highlight, i) => (
                          <span key={i} className="px-2 py-1 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-900 rounded-lg text-xs font-semibold border border-pink-200">
                            {highlight}
                          </span>
                        ))}
                        {tour.highlights.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                            +{tour.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                        <span className="font-semibold">Starting from: {tour.startFrom}</span>
                      </div>
                        <button 
                          onClick={() => handleEnquireClick(tour)}
                          className="w-full py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-xl font-bold hover:from-[#912082] hover:to-pink-900 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                        >
                          Enquire Now <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                  </div>
                </div>
              ))}
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
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
`}</style>
      <EnquiryModal 
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        tourData={selectedTour}
      />
    </div>
  );
};

export default Tours;
