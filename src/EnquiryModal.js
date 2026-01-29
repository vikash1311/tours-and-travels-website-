import React, { useState, useEffect } from 'react';
import { X, User, Phone, Mail, Calendar, Users, MessageSquare } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, tourData = null }) => {
  const [formData, setFormData] = useState({
    tourName: '',
    tourId: '',
    name: '',
    phone: '',
    email: '',
    startDate: '',
    numberOfDays: '',
    numberOfAdults: '1',
    numberOfChildren: '0',
    query: ''
  });

  // Pre-fill tour data when modal opens
  useEffect(() => {
    if (tourData) {
      setFormData(prev => ({
        ...prev,
        tourName: tourData.name || '',
        tourId: tourData.id || ''
      }));
    }
  }, [tourData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Here you can add your form submission logic
    // For example, send to an API or email service
    
    alert('Thank you for your enquiry! We will get back to you soon.');
    onClose();
    
    // Reset form
    setFormData({
      tourName: '',
      tourId: '',
      name: '',
      phone: '',
      email: '',
      startDate: '',
      numberOfDays: '',
      numberOfAdults: '1',
      numberOfChildren: '0',
      query: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border-4 border-pink-200">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition z-10"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#912082] to-pink-900 p-6 md:p-8 rounded-t-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              Tour Enquiry Form
            </h2>
            <p className="text-white/90 font-semibold">
              Fill in your details and we'll get back to you shortly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Tour Information (Read-only) */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl border-2 border-pink-200">
              <h3 className="text-lg font-bold text-[#912082] mb-3">Selected Tour</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tour Name</label>
                  <input 
                    type="text" 
                    value={formData.tourName}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 bg-white font-semibold text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tour ID</label>
                  <input 
                    type="text" 
                    value={formData.tourId}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 bg-white font-semibold text-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-bold text-[#912082] mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Travel Details */}
            <div>
              <h3 className="text-lg font-bold text-[#912082] mb-4">Travel Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Preferred Start Date *
                  </label>
                  <input 
                    type="date" 
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Number of Days *
                  </label>
                  <input 
                    type="number" 
                    name="numberOfDays"
                    value={formData.numberOfDays}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold"
                    placeholder="Enter number of days"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Number of Adults *
                  </label>
                  <input 
                    type="number" 
                    name="numberOfAdults"
                    value={formData.numberOfAdults}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Number of Children
                  </label>
                  <input 
                    type="number" 
                    name="numberOfChildren"
                    value={formData.numberOfChildren}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Additional Query */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Additional Query or Special Requests
              </label>
              <textarea 
                name="query"
                value={formData.query}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold resize-none"
                placeholder="Any special requirements, dietary restrictions, or questions..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-4 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;