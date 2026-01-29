import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Award, Globe, Heart, Shield, Compass, Mountain, Camera, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Star, Plane, Ship, Clock, CheckCircle, Calendar, MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';
import GalleryModal from './GalleryModal';
const TourismWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeGallerySlide, setActiveGallerySlide] = useState(0);
  const [activeFeaturedSlide, setActiveFeaturedSlide] = useState(0); // 👈 ADD THIS LINE
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedTourGallery, setSelectedTourGallery] = useState(null);

  const handleEnquireClick = (tour) => {
  setSelectedTour(tour);
  setIsEnquiryModalOpen(true);
};

const handleGalleryClick = (tour) => {
  setSelectedTourGallery(tour);
  setIsGalleryModalOpen(true);
};

  const galleryImages = [
    '/images/gallery/1.jpg', '/images/gallery/2.jpg', '/images/gallery/2.jpg',
    '/images/gallery/4.jpg', '/images/gallery/5.jpg', '/images/gallery/6.jpg',
    '/images/gallery/7.jpg', '/images/gallery/8.jpg', '/images/gallery/9.jpg',
    '/images/gallery/10.jpg', '/images/gallery/11.jpg', '/images/gallery/12.jpg',
    '/images/gallery/13.jpg', '/images/gallery/14.jpg', '/images/gallery/15.jpg',
    '/images/gallery/16.jpg', '/images/gallery/17.jpg', '/images/gallery/18.jpg',
    '/images/gallery/19.jpg', '/images/gallery/20.jpg', '/images/gallery/21.jpg',
    '/images/gallery/22.jpg', '/images/gallery/23.jpg'
  ];


  const slidesData = [];
  for (let i = 0; i < galleryImages.length; i += 6) {
    slidesData.push(galleryImages.slice(i, i + 6));
  }

  const regions = [ 'Chardham', 'Gujarat', 'Himachal Pradesh', 'Kashmir & Ladakh', 'Madhya Pradesh', 'Maharashtra', 'Northeast', 'Odisha & Chhattisgarh', 'Rajasthan', 'South India', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal & Sikkim'];

  const content = {
    hero: { title: "Discover Incredible India", subtitle: "Your Gateway to Unforgettable Journeys" },
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "500+", label: "Tours Conducted" },
      { value: "5000+", label: "Happy Travelers" },
      { value: "100%", label: "Safety Record" }
    ],
    testimonials: [
      { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Amazing experience! The guides made us feel so safe and comfortable. Highly recommended!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
      { name: "Anjali Reddy", location: "Bangalore", rating: 5, text: "Best tour operator. Every detail was perfectly planned and executed frryccdyuxgkffiyfyjfyuikgyigiygfyjygyjgy.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" },
      { name: "Meera Patel", location: "Delhi", rating: 5, text: "Professional, caring, and knowledgeable. Made our journey truly memorable!", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" }
    ],
    tours: {
      'Chardham': [
        { 
          id: 1,
          name: "Kedarnath - Badrinath", 
          gallery:[
            '/images/fe/cd/2.jpg',
            '/images/fe/cd/1.jpg',
          ],
          description: "Embark on a divine journey to two of the most sacred Char Dham temples nestled in the Himalayas",
          duration: "7D/6N", 
          price: "₹18,500",
          startFrom: "Haridwar/Rishikesh", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
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
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
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
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
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
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
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
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
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
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
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
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
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
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Valley of Flowers Trek", "Hemkund Sahib", "Badrinath Temple", "Alpine Meadows"],
          destinations: "Rishikesh → Govindghat → Valley of Flowers → Hemkund → Badrinath → Auli"
        }
      ],


      'Gujarat': [
        { 
          id: 9, 
          name: "Ahmedabad - Modera - Rann of Kutch", 
          gallery:[
          '/images/fe/gj/1.jpg',
          '/images/fe/gj/2.jpg',
          ],
          description: "Explore Gujarat's vibrant culture, white desert, and ancient sun temple", 
          duration: "3D/2N", 
          price: "₹12,500", 
          startFrom: "Ahmedabad", 
          image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80", 
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
          image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80", 
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
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", 
          category: "Himachal Pradesh", 
          highlights: ["Mall Road Shimla", "Solang Valley", "Rohtang Pass", "Adventure Sports"], 
          destinations: "Delhi → Shimla → Manali → Chandigarh" 
        }
      ],
      'Kashmir & Ladakh': [
        { id: 12, 
          name: "Srinagar - Gulmarg - Pahalgam - Sonamarg",
          gallery:[
          '/images/fe/j&k/1.jpg',
          '/images/fe/j&k/2.jpg',
          ],
           description: "Discover paradise on earth with Kashmir's pristine valleys and meadows", duration: "8D/7N", price: "₹28,000", startFrom: "Srinagar", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", category: "Kashmir & Ladakh", highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Betaab Valley", "Snow Activities"], destinations: "Srinagar → Gulmarg → Pahalgam → Sonamarg" }
      ],
      'Rajasthan': [
        { id: 13, 
          name: "Jaipur - Pushkar - Ajmer - Jaisalmer - Jodhpur", 
          gallery:[
            '/images/fe/rj/1.jpg',
            '/images/fe/rj/2.jpg',
          ],
          description: "Royal Rajasthan tour covering majestic forts, palaces and golden sand dunes", duration: "7D/6N", price: "₹24,000", startFrom: "Jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", category: "Rajasthan", highlights: ["Amber Fort", "Camel Safari", "Desert Camp", "Blue City"], destinations: "Jaipur → Pushkar → Jaisalmer → Jodhpur" }
      ],
      'South India': [
        { id: 14, 
          name: "Cochin - Munnar - Thekkady - Alleppey", 
          gallery:[
            '/images/fe/si/1.jpg',
            '/images/fe/si/2.jpg',
          ],
          description: "God's Own Country - Kerala backwaters, tea gardens and wildlife sanctuary", duration: "6D/5N", price: "₹26,000", startFrom: "Cochin", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", category: "South India", highlights: ["Houseboat Stay", "Tea Plantations", "Periyar Wildlife", "Kathakali Dance"], destinations: "Cochin → Munnar → Thekkady → Alleppey" }
      ],
      'Uttar Pradesh': [
        { id: 15, name: "Agra - Fatehpur Sikri - Mathura", description: "Mughal heritage trail featuring the iconic Taj Mahal and ancient temples", duration: "3D/2N", price: "₹14,500", startFrom: "Agra", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80", category: "Uttar Pradesh", highlights: ["Taj Mahal", "Agra Fort", "Krishna Janmabhoomi", "Fatehpur Sikri"], destinations: "Agra → Fatehpur Sikri → Mathura" }
      ],
      'Uttarakhand': [
        { id: 16, name: "Nainital - Kausani - Corbett N. Park", description: "Lake district beauty combined with exciting wildlife safari in Jim Corbett", duration: "6D/5N", price: "₹19,500", startFrom: "Kathgodam/Rampur", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", category: "Uttarakhand", highlights: ["Naini Lake", "Tiger Safari", "Himalayan Sunrise", "Nature Walks"], destinations: "Kathgodam → Nainital → Kausani → Corbett" }
      ],
      'West Bengal & Sikkim': [
        { id: 17, name: "Darjeeling - Gangtok", description: "Toy train ride, tea gardens and monasteries in the lap of Kanchenjunga", duration: "6D/5N", price: "₹21,000", startFrom: "Siliguri", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", category: "West Bengal & Sikkim", highlights: ["Toy Train Ride", "Tiger Hill Sunrise", "Tsomgo Lake", "Buddhist Monasteries"], destinations: "Siliguri → Darjeeling → Gangtok" }
      ],
      'Madhya Pradesh': [
        { id: 18, name: "Khajuraho - Orchha", description: "Explore UNESCO world heritage temples with stunning erotic sculptures and medieval forts", duration: "5D/4N", price: "₹16,500", startFrom: "Jhansi", image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&q=80", category: "Madhya Pradesh", highlights: ["Khajuraho Temples", "Orchha Fort", "Light & Sound Show", "Heritage Walk"], destinations: "Jhansi → Khajuraho → Orchha" }
      ],
      'Maharashtra': [
        { id: 19, name: "Ellora - Ajanta - Grishneshwar - Aurangabad - Shirdi", description: "Ancient rock-cut caves, UNESCO sites and sacred Sai Baba temple", duration: "5D/4N", price: "₹17,500", startFrom: "Aurangabad", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80", category: "Maharashtra", highlights: ["Ellora Caves", "Ajanta Paintings", "Shirdi Sai Baba", "Grishneshwar Jyotirlinga"], destinations: "Aurangabad → Ellora → Ajanta → Shirdi" }
      ],
      'Odisha & Chhattisgarh': [
        { id: 20, name: "Bhubaneswar - Konark - Puri", description: "Golden triangle of Odisha - temples, beach and Jagannath darshan", duration: "6D/5N", price: "₹15,500", startFrom: "Bhubaneswar", image: "https://images.unsplash.com/photo-1605084924035-4fd42fa2e1e0?w=600&q=80", category: "Odisha & Chhattisgarh", highlights: ["Jagannath Temple", "Konark Sun Temple", "Beach Festival", "Temple Architecture"], destinations: "Bhubaneswar → Konark → Puri" }
      ],
      'Northeast': [
        { id: 21, name: "Assam - Meghalaya", description: "Living root bridges, tea gardens and one-horned rhino safari", duration: "6D/5N", price: "₹23,000", startFrom: "Guwahati", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80", category: "Northeast", highlights: ["Kaziranga Safari", "Living Root Bridges", "Cherrapunji Waterfalls", "Tea Garden Tours"], destinations: "Guwahati → Kaziranga → Shillong → Cherrapunji" }
      ]
    }
  };
    const featuredTours = [
    content.tours['Chardham'][0],  // Kedarnath - Badrinath
    content.tours['Gujarat'][0],   // Ahmedabad - Modera - Rann of Kutch
    content.tours['Rajasthan'][0], // Jaipur - Pushkar - Ajmer - Jaisalmer - Jodhpur
    content.tours['South India'][0], // Cochin - Munnar - Thekkady - Alleppey
    content.tours['Kashmir & Ladakh'][0] // Srinagar - Gulmarg - Pahalgam - Sonamarg
  ];
  const trendingTours = [
  content.tours['Chardham'][1],           // Yamunotri - Gangotri - Kedarnath - Badrinath
  content.tours['Kashmir & Ladakh'][0],   // Srinagar - Gulmarg - Pahalgam - Sonamarg
  content.tours['South India'][0],        // Cochin - Munnar - Thekkady - Alleppey
  content.tours['Rajasthan'][0],          // Jaipur - Pushkar - Ajmer - Jaisalmer - Jodhpur
  content.tours['Himachal Pradesh'][0],   // Shimla - Manali - Chandigarh
  content.tours['Uttarakhand'][0],        // Nainital - Jim Corbett - Mussoorie
  content.tours['Uttar Pradesh'][0]       // Agra - Mathura - Vrindavan
];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % content.testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [content.testimonials.length]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slidesData.length]);
  
useEffect(() => {
  const galleryInterval = setInterval(() => {
    setActiveGallerySlide((prev) => (prev + 1) % galleryImages.length);
  }, 3000);
  return () => clearInterval(galleryInterval);
}, [galleryImages.length]);

// 👇 ADD THIS ENTIRE BLOCK
useEffect(() => {
  const featuredInterval = setInterval(() => {
    setActiveFeaturedSlide((prev) => (prev + 1) % featuredTours.length);
  }, 5000); // Changes every 5 seconds
  return () => clearInterval(featuredInterval);
}, [featuredTours.length]);
  const features = [
    { icon: <Shield className="w-8 h-8 md:w-12 md:h-12" />, title: "100% Safe", desc: "Secure & reliable travel" },
    { icon: <Award className="w-8 h-8 md:w-12 md:h-12" />, title: "IATA Certified", desc: "Qualified tourism experts" },
    { icon: <Heart className="w-8 h-8 md:w-12 md:h-12" />, title: "Custom Tours", desc: "Personalized itineraries" },
    { icon: <Globe className="w-8 h-8 md:w-12 md:h-12" />, title: "Pan India", desc: "India, Nepal, Bhutan" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white overflow-x-hidden">
      {/* Header */}
<header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg ' : 'bg-transparent py-4 md:py-6'}`}>        
  <nav className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1 md:p-2 rounded-xl bg-transparent ">
              <img src="/images/logo.png" alt="India Tour Company" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
            <div>
              {/* <span className={`text-lg md:text-2xl font-bold block ${isScrolled ? 'bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent' : 'text-white drop-shadow-lg'}`}>India Tour Company</span> */}
              {/* <span className={`text-xs font-semibold hidden md:block ${isScrolled ? 'text-pink-900' : 'text-white/90'}`}>NIDHI Certified</span> */}
            </div>
          </div>
          
          {/* <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['Home',  'Tours', 'Gallery','About Us', 'Contact Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`font-semibold transition-all duration-300 relative group ${isScrolled ? 'text-gray-700 hover:text-[#912082]' : 'text-white hover:text-[#912082]'}`}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#912082] to-pink-900 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div> */}
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
{/* 
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full mt-3 py-4 rounded-b-2xl border-t-4 border-[#912082]">
            {['Home', 'About Us', 'Tours', 'Destination', 'Contact Us'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )} */}
  {isMenuOpen && (
  <div className="md:hidden bg-white shadow-xl absolute w-full mt-3 py-4 rounded-b-2xl border-t-4 border-[#912082]">
    <a href="#home" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
      Home
    </a>
    <Link to="/tours" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
      Tours
    </Link>
    {/* <a href="#gallery" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
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

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/hero/1.jpg"
          alt="Home image"
          className="w-full h-full object-cover"
        />
      </div>
              
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20 pb-10">
          <div className="inline-block mb-4 md:mb-6 animate-fadeInDown">
            {/* <div className="px-4 md:px-6 py-2 md:py-3 bg-white/95 shadow-lg rounded-full border-2 border-[#912082]">
               <span className="bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent font-bold text-sm md:text-lg">
                ✨ Discover Incredible India ✨
              </span> 
            </div> */}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl animate-fadeInUp text-shadow-lg">
            {content.hero.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-6 md:mb-10 font-semibold px-2 drop-shadow-lg animate-fadeInUp animation-delay-200 text-shadow-md">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center px-4 animate-fadeInUp animation-delay-400">
            <a href="#tours" className="px-6 md:px-12 py-3 md:py-5 bg-white text-pink-900 rounded-full font-bold hover:bg-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-lg lg:text-xl">
              Explore Tours 
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            {/* <a href="#contact-us" className="px-6 md:px-12 py-3 md:py-5 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold hover:from-[#912082] hover:to-pink-900 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm md:text-lg lg:text-xl">
              Enquire Now
            </a> */}
          </div>

          {/* <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 md:w-8 md:h-12 border-2 md:border-4 border-white rounded-full flex justify-center p-1 md:p-2">
              <div className="w-1 md:w-2 h-2 md:h-4 bg-white rounded-full"></div>
            </div>
          </div> */}
        </div>
      </section>



          {/* Featured Tours Slideshow with Thumbnails */}
<section id="tours" className="py-1 md:py-4 bg-gradient-to-br from-pink-50 to-rose-50 min-h-[70vh] flex items- border">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8 md:mb-12">
      <div className="inline-block mb-3 md:mb-4">
        <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
          ✨ Our Premium Tours ✨
        </span>
      </div>
      {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent px-2">Trending Tours</h2> */}
      {/* <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-semibold px-4 mb-8 md:mb-10">
        Handpicked experiences across incredible India
      </p> */}
    </div>

    <div className="max-w-6xl mx-auto">
      {/* Main Tour Display */}
<div className="grid md:grid-cols-[1fr_120px] lg:grid-cols-[1fr_140px] gap-6 mb-16">
  {/* Main Tour Cards Container */}
  <div className="relative border rounded-2xl shadow-xl overflow-hidden">
    {featuredTours.map((tour, index) => (
      <div
        key={tour.id}
        className={`transition-all duration-700 ease-in-out ${
          index === activeFeaturedSlide
            ? 'opacity-100 scale-100 relative z-10'
            : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
        }`}
      >
            {/* Tour Card */}
            <div className="bg-white overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-48 md:h-[410px] overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#912082] to-pink-900 px-4 py-2 rounded-full text-white font-bold text-sm shadow-xl">
                    {tour.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#912082] font-bold text-sm shadow-lg border-2 border-[#912082]">
                    {tour.category}
                  </div>
                  
                  {/* Tour Name at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-black text-white drop-shadow-2xl mb-1">
                      {tour.name}
                    </h3>
                    <p className="text-white/90 text-xs font-semibold drop-shadow-lg">
                      {tour.description}
                    </p>
                  </div>
                </div>

                {/* Details Side */}
                <div className="p-4 md:p-5 flex flex-col justify-between">
                  {/* Route */}
                  <div>
                    <div className="flex items-start gap-3 mb-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-3 border-2 border-pink-200">
                      <MapPin className="w-5 h-5 text-[#912082] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-gray-500 text-[10px] font-bold uppercase mb-0.5">Tour Route</p>
                        <p className="text-gray-800 font-bold text-xs leading-snug">{tour.destinations}</p>
                      </div>
                    </div>

                    {/* Starting Point */}
                    <div className="flex items-center gap-3 mb-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-3 border-2 border-pink-200">
                      <MapPinIcon className="w-5 h-5 text-[#912082] flex-shrink-0" />
                      <div>
                        <p className="text-gray-500 text-[10px] font-bold uppercase">Starting From</p>
                        <p className="text-gray-800 font-bold text-xs">{tour.startFrom}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-gray-500 text-[10px] font-bold uppercase mb-2">Tour Highlights:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {tour.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-2 border border-pink-200">
                            <CheckCircle className="w-4 h-4 text-[#912082] flex-shrink-0" />
                          <span className="text-gray-800 text-[10px] font-semibold">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div>
                    <div className="space-y-2">
                      <button 
                        onClick={() => handleGalleryClick(tour)}
                        className="w-full py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        <Camera className="w-4 h-4" />
                        View Gallery
                      </button>
                      <button 
                        onClick={() => handleEnquireClick(tour)}
                        className="w-full py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        Enquire Now <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Previous/Next Arrows on Main Card */}
        <button
          onClick={() => setActiveFeaturedSlide((activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length)}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white hover:bg-pink-50 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border-4 border-[#912082] group z-20"
          aria-label="Previous tour"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#912082] rotate-180 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => setActiveFeaturedSlide((activeFeaturedSlide + 1) % featuredTours.length)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white hover:bg-pink-50 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border-4 border-[#912082] group z-20"
          aria-label="Next tour"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#912082] group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      {/* Thumbnail Navigation - Only 3 Visible */}
{/* Vertical Thumbnail Navigation - Right Side (Only 3: Prev, Current, Next) */}
  <div className="hidden md:flex flex-col gap-3 justify-center relative">
    {/* Previous Thumbnail */}
    <button
      onClick={() => setActiveFeaturedSlide((activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length)}
      className="relative group overflow-hidden rounded-xl transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-105 ring-2 ring-pink-300"
    >
      <div className="w-20 h-20 lg:w-24 lg:h-24">
        <img 
          src={featuredTours[(activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length].image} 
          alt={featuredTours[(activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length].name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      {/* Small indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
          <span className="text-[#912082] font-bold text-xs">↑</span>
        </div>
      </div>
    </button>

    {/* Current/Active Thumbnail */}
    <button
      onClick={() => setActiveFeaturedSlide(activeFeaturedSlide)}
      className="relative group overflow-hidden rounded-xl transition-all duration-500 ring-4 ring-[#912082] scale-110 shadow-2xl z-10"
    >
      <div className="w-24 h-24 lg:w-28 lg:h-28">
        <img 
          src={featuredTours[activeFeaturedSlide].image} 
          alt={featuredTours[activeFeaturedSlide].name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      
      {/* Tour Number Badge */}
      <div className="absolute top-2 left-2 bg-gradient-to-r from-[#912082] to-pink-900 w-6 h-6 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xs">{activeFeaturedSlide + 1}</span>
      </div>

      {/* Active Indicator */}
      <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-xl">
        <CheckCircle className="w-4 h-4 text-[#912082]" />
      </div>

      {/* Tour Name on Hover */}
      <div className="absolute inset-0 bg-[#912082]/0 group-hover:bg-[#912082]/90 transition-all duration-300 flex items-center justify-center p-2">
        <p className="text-white font-bold text-[8px] lg:text-[10px] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
          {featuredTours[activeFeaturedSlide].name}
        </p>
      </div>
    </button>

    {/* Next Thumbnail */}
    <button
      onClick={() => setActiveFeaturedSlide((activeFeaturedSlide + 1) % featuredTours.length)}
      className="relative group overflow-hidden rounded-xl transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-105 ring-2 ring-pink-300"
    >
      <div className="w-20 h-20 lg:w-24 lg:h-24">
        <img 
          src={featuredTours[(activeFeaturedSlide + 1) % featuredTours.length].image} 
          alt={featuredTours[(activeFeaturedSlide + 1) % featuredTours.length].name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      {/* Small indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
          <span className="text-[#912082] font-bold text-xs">↓</span>
        </div>
      </div>
    </button>

    {/* Navigation Arrows */}
    <button
      onClick={() => setActiveFeaturedSlide((activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length)}
      className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 bg-white hover:bg-pink-50 rounded-full transition shadow-lg border-2 border-[#912082] z-20"
    >
      <ChevronRight className="w-3 h-3 text-[#912082] -rotate-90" />
    </button>
    <button
      onClick={() => setActiveFeaturedSlide((activeFeaturedSlide + 1) % featuredTours.length)}
      className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-1.5 bg-white hover:bg-pink-50 rounded-full transition shadow-lg border-2 border-[#912082] z-20"
    >
      <ChevronRight className="w-3 h-3 text-[#912082] rotate-90" />
    </button>
  </div>

  {/* Mobile Horizontal Thumbnails - Only 3 (Prev, Current, Next) */}
  <div className="md:hidden mt-6">
    <div className="flex gap-3 justify-center items-center relative">
      {/* Previous */}
      <button
        onClick={() => setActiveFeaturedSlide((activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length)}
        className="relative group overflow-hidden rounded-xl transition-all duration-500 flex-shrink-0 opacity-60 ring-2 ring-pink-300"
      >
        <div className="w-14 h-14">
          <img 
            src={featuredTours[(activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length].image} 
            alt="Previous tour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
      </button>

      {/* Current */}
      <button
        onClick={() => setActiveFeaturedSlide(activeFeaturedSlide)}
        className="relative group overflow-hidden rounded-xl transition-all duration-500 flex-shrink-0 ring-4 ring-[#912082] scale-110 shadow-2xl"
      >
        <div className="w-16 h-16">
          <img 
            src={featuredTours[activeFeaturedSlide].image} 
            alt={featuredTours[activeFeaturedSlide].name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="absolute top-1 left-1 bg-gradient-to-r from-[#912082] to-pink-900 w-5 h-5 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-[10px]">{activeFeaturedSlide + 1}</span>
        </div>
        <div className="absolute top-1 right-1 bg-white p-1 rounded-full">
          <CheckCircle className="w-3 h-3 text-[#912082]" />
        </div>
      </button>

      {/* Next */}
      <button
        onClick={() => setActiveFeaturedSlide((activeFeaturedSlide + 1) % featuredTours.length)}
        className="relative group overflow-hidden rounded-xl transition-all duration-500 flex-shrink-0 opacity-60 ring-2 ring-pink-300"
      >
        <div className="w-14 h-14">
          <img 
            src={featuredTours[(activeFeaturedSlide + 1) % featuredTours.length].image} 
            alt="Next tour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
      </button>

      {/* Mobile Navigation Arrows */}
      <button
        onClick={() => setActiveFeaturedSlide((activeFeaturedSlide - 1 + featuredTours.length) % featuredTours.length)}
        className="absolute -left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white hover:bg-pink-50 rounded-full transition shadow-lg border-2 border-[#912082] z-20"
      >
        <ChevronRight className="w-3 h-3 text-[#912082] rotate-180" />
      </button>
      <button
        onClick={() => setActiveFeaturedSlide((activeFeaturedSlide + 1) % featuredTours.length)}
        className="absolute -right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white hover:bg-pink-50 rounded-full transition shadow-lg border-2 border-[#912082] z-20"
      >
        <ChevronRight className="w-3 h-3 text-[#912082]" />
      </button>
    </div>
  </div>
</div>
{/* End of Grid Container */}
    </div>

    {/* View All Tours Button */}
    <div className="text-center mt-12">
      <Link 
        to="/tours" 
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        View All Tours <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section>
      
             {/* About Us Section */}
      <section id="about-us" className="py-4 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="About Us" className="rounded-2xl md:rounded-3xl shadow-2xl w-full" />
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-[#912082] to-pink-900 rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold mb-4 md:mb-6 shadow-lg text-xs md:text-base">
                  ✨ NIDHI Certified Company ✨
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">20 Years of Excellence</h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 md:mb-6 font-semibold">
                  A NIDHI registered company under the Ministry of Tourism and Maharashtra Tourism, we are a <span className="font-black text-[#912082]">women-led organization</span> that aims to provide safe, secure, and happy vacations for all.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 font-semibold">
                  Understanding the basic needs of women travelers, our coordinators make every journey memorable.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-2 md:gap-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
                    <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-[#912082] mt-0.5 md:mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-[#912082]">IATA Certified</span> professionals with HMI training</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
                    <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-[#912082] mt-0.5 md:mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-[#912082]">500+ Tours</span> successfully conducted</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
                    <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-[#912082] mt-0.5 md:mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-[#912082]">Custom Itineraries</span> tailored for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





     
      

      {/* Gallery Section */}
      <section id="gallery" className="py-4 md:py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                📸 Clicks on Tours 📸
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent px-2">Photograph of our Amazing Tours</h2>
          </div>
        </div>

        <div className="relative w-full">
          {/* Row 1 - Scrolling Right */}
          <div className="gallery-scroll">
            <div className="gallery-track-right">
              {[...galleryImages.slice(0, 12), ...galleryImages.slice(0, 12)].map((img, idx) => (
                <div key={`row1-${idx}`} className={`gallery-brick group ${idx % 4 === 0 ? 'brick-large' : idx % 4 === 1 ? 'brick-wide' : idx % 4 === 2 ? 'brick-tall' : 'brick-medium'}`}>
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="gallery-scroll">
            <div className="gallery-track-right">
              {[...galleryImages.slice(12), ...galleryImages.slice(12)].map((img, idx) => (
                <div key={`row2-${idx}`} className={`gallery-brick group ${idx % 4 === 0 ? 'brick-tall' : idx % 4 === 1 ? 'brick-large' : idx % 4 === 2 ? 'brick-medium' : 'brick-wide'}`}>
                  <img src={img} alt={`Gallery ${idx + 13}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4 md:py-12 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                💬 Happy Stories 💬
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent px-2">What Travelers Say</h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 font-semibold px-4">Hear from our happy explorers</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} className={`transition-all duration-500 ${idx === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}>
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 border-2 md:border-4 border-[#912082]">
                  <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-2 md:border-4 border-[#912082] shadow-lg" />
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">{testimonial.name}</h4>
                      <p className="text-gray-600 font-semibold text-sm md:text-base">{testimonial.location}</p>
                      <div className="flex gap-0.5 md:gap-1 mt-1 md:mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {content.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 md:h-4 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'bg-gradient-to-r from-[#912082] to-pink-900 w-8 md:w-16' : 'bg-pink-200 w-2 md:w-4'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      

      {/* Minimal Contact Section - Home Page */}
<section id="contact-us" className="py-12 md:py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block mb-4 md:mb-6">
        <span className="px-4 md:px-6 py-2 bg-white/20 backdrop-blur-sm text-[#912082] rounded-full font-bold text-sm md:text-lg shadow-xl border-2 border-white/30">
          📞 Get In Touch 📞
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-[#912082] drop-shadow-2xl pb-2">
        Ready to Explore India?
      </h2>
      <p className="text-lg md:text-xl text-[#912082]/90 font-semibold mb-8 md:mb-10">
        Contact us today to plan your perfect journey
      </p>

      <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 bg-gradient-to-r from-pink-50 to-rose-50 p-4 md:p-6 rounded-3xl border-2 border-pink-200 shadow-lg">
        <a href="tel:+91937357002" className="bg-white/10 backdrop-blur-md hover:bg-white rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 border-4 border-pink-200">
          <Phone className="w-10 h-10 md:w-12 md:h-12 text-[#912082] mx-auto mb-3" />
          <p className="text-[#912082] font-bold text-sm mb-1">Call Us</p>
          <p className="text-[#912082]/80 text-xs font-semibold">+91 93735 7002</p>
        </a>

        <a href="mailto:itcindia05@gmail.com" className="bg-white/10 backdrop-blur-md hover:bg-white rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 border-4 border-pink-200">
          <Mail className="w-10 h-10 md:w-12 md:h-12 text-[#912082] mx-auto mb-3" />
          <p className="text-[#912082] font-bold text-sm mb-1">Email Us</p>
          <p className="text-[#912082]/80 text-xs font-semibold">itcindia05@gmail.com</p>
        </a>

        <a href="https://maps.app.goo.gl/fHosnv7wEnQE99oF6" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md hover:bg-white rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 border-4 border-pink-200">
          <MapPin className="w-10 h-10 md:w-12 md:h-12 text-[#912082] mx-auto mb-3" />
          <p className="text-[#912082] font-bold text-sm mb-1">Visit Us</p>
          <p className="text-[#912082]/80 text-xs font-semibold">Nagpur, India</p>
        </a>
      </div>

      <Link 
        to="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-50 to-rose-50 text-[#912082] rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        Contact Us Now <ChevronRight className="w-5 h-5" />
      </Link>
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
  
  @keyframes scrollRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
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

  .gallery-scroll {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .gallery-track-right {
    display: flex;
    animation: scrollRight 100s linear infinite;
    width: fit-content;
  }



 .gallery-brick {
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border: 4px solid #912082;
  box-shadow: 0 8px 24px rgba(144, 32, 130, 0.3);
  transition: all 0.4s ease;
}

.gallery-brick:hover {
  border-color: #912082;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(144, 32, 130, 0.5);
}

  /* Large brick - dominant size */
  .brick-large {
    width: 500px;
    height: 250px;
  }

  /* Wide brick */
  .brick-wide {
    width: 450px;
    height: 250px;
  }

  /* Tall brick */
  .brick-tall {
    width: 300px;
    height: 250px;
  }

  /* Medium brick */
  .brick-medium {
    width: 400px;
    height: 250px;
  }

  @media (max-width: 768px) {
    .brick-large {
      width: 350px;
      height: 180px;
    }

    .brick-wide {
      width: 320px;
      height: 180px;
    }

    .brick-tall {
      width: 250px;
      height: 180px;
    }

    .brick-medium {
      width: 300px;
      height: 180px;
    }
  }
    /* Animated gradient border */
@keyframes rotateBorder {
  0% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #ec4899, #f43f5e, #8b5cf6, #06b6d4) border-box;
  }
  25% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #f43f5e, #8b5cf6, #06b6d4, #ec4899) border-box;
  }
  50% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #8b5cf6, #06b6d4, #ec4899, #f43f5e) border-box;
  }
  75% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #06b6d4, #ec4899, #f43f5e, #8b5cf6) border-box;
  }
  100% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #ec4899, #f43f5e, #8b5cf6, #06b6d4) border-box;
  }
}

.gallery-brick {
  animation: rotateBorder 4s linear infinite;
}
  /* Fix text cutoff with proper line-height */
h2.bg-clip-text,
h3.bg-clip-text {
  line-height: 1.35 !important;
  overflow: visible !important;
}

/* Ensure gradient doesn't clip */
.bg-gradient-to-r.bg-clip-text.text-transparent {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 1px; /* Just 1px - barely noticeable */
}`}</style>
      <EnquiryModal 
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        tourData={selectedTour}
      />

      <GalleryModal 
      isOpen={isGalleryModalOpen}
      onClose={() => setIsGalleryModalOpen(false)}
      tourData={selectedTourGallery}
    />
    </div>
  );
};

export default TourismWebsite;