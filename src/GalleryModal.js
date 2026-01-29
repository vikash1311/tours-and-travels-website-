import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ isOpen, onClose, tourData = null }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !tourData || !tourData.gallery) return null;

  const images = tourData.gallery;

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl border-4 border-pink-200">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 bg-white hover:bg-gray-100 rounded-full transition z-10 shadow-lg"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#912082] to-pink-900 p-6 rounded-t-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
              {tourData.name}
            </h2>
            <p className="text-white/90 font-semibold">
              Tour Gallery ({currentImageIndex + 1} of {images.length})
            </p>
          </div>

          {/* Main Image Display */}
          <div className="relative bg-black">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <img 
                src={images[currentImageIndex]} 
                alt={`${tourData.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full transition shadow-xl"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#912082]" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full transition shadow-xl"
                  >
                    <ChevronRight className="w-6 h-6 text-[#912082]" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-[#912082] scale-105' 
                      : 'ring-2 ring-pink-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default GalleryModal;