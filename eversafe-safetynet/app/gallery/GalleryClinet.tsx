"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryImages } from "../data/galleryData";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Download, X, Tag } from "lucide-react";
import StickyContactIcons from "../stickyIcons/StickyIcons";

// Define image size variations for masonry effect
const IMAGE_HEIGHTS = [280, 320, 360, 400, 440];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(16);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
  } | null>(null);
  const [imageSizes, setImageSizes] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Assign random heights to images for masonry effect
  useEffect(() => {
    const sizes = filteredImages.map(() => 
      IMAGE_HEIGHTS[Math.floor(Math.random() * IMAGE_HEIGHTS.length)]
    );
    setImageSizes(sizes);
  }, [selectedCategory,visibleCount]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleDownload = (imageUrl: string, imageName: string) => {
    try {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `eversafe-${imageName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open image in new tab
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <>
      <Navbar />
      <section className=" min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-4 sm:px-6 py-6 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 px-2">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full mb-3 sm:mb-4">
              <Tag className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Our <span className="text-yellow-500">Gallery</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
              Explore our real installation work —{" "}
              <span className="text-yellow-500 font-semibold">
                EverSafe Safety Nets
              </span>{" "}
              ensures safety with elegance and precision.
            </p>
          </div>

          {/* Filter Buttons - Mobile Optimized */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(16);
                }}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/25"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm sm:shadow-md dark:shadow-gray-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Masonry Grid - 2 columns for mobile */}
          <div className="
            columns-2    /* 2 columns on mobile */
            sm:columns-2 /* 2 columns on small tablets */
            md:columns-3 /* 3 columns on tablets */
            lg:columns-4 /* 4 columns on desktop */
            gap-3       /* Smaller gap on mobile */
            sm:gap-4    /* Medium gap on tablets */
            md:gap-5    /* Larger gap on desktop */
            lg:gap-6
            space-y-3   /* Vertical spacing */
            sm:space-y-4
            md:space-y-5
          ">
            {visibleImages.map((img, i) => (
              <div 
                key={i} 
                className="break-inside-avoid relative group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg dark:shadow-gray-800/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-800/70 hover:scale-[1.02]"
                onClick={() => setLightboxImage({ 
                  src: img.src, 
                  alt: img.alt, 
                  title: img.title,
                  category: img.category 
                })}
              >
                {/* EverSafe Tag */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10  ">
                  <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm bg-opacity-90 dark:bg-white dark:text-yellow-500">
                    EverSafe
                  </span>
                </div>

                {/* Download Button - Hidden on mobile, shows on hover for larger screens */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(img.src, img.title);
                  }}
                  className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 p-1.5 sm:p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-700"
                  title="Download image"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={imageSizes[i] || (isMobile ? 300 : 400)}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Gradient Overlay - Only on hover for larger screens */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Image Info - Always visible on mobile, hover on desktop */}
                <div className={`
                  ${isMobile 
                    ? "p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm" 
                    : "absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300"
                  }
                `}>
                  <h3 className="font-semibold text-xs sm:text-sm line-clamp-1 dark:text-white">
                    {img.title}
                  </h3>
                  <p className={`text-xs ${isMobile ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200'} mt-0.5`}>
                    {img.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className="text-center mt-10 sm:mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + (isMobile ? 8 : 12))}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl shadow-yellow-500/25 text-sm sm:text-base"
              >
                Load More Images
              </button>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2">
                Showing {visibleCount} of {filteredImages.length} images
              </p>
            </div>
          )}

          {/* Lightbox */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4"
              onClick={() => setLightboxImage(null)}
            >
              <div className="relative max-w-4xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                  <div className="relative aspect-video max-h-[60vh] sm:max-h-[70vh]">
                    <Image
                      src={lightboxImage.src}
                      alt={lightboxImage.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Lightbox Controls */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2">
                    <button
                      onClick={() => handleDownload(lightboxImage.src, lightboxImage.title)}
                      className="p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-200 group"
                      title="Download"
                    >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-yellow-300" />
                    </button>
                    <button
                      onClick={() => setLightboxImage(null)}
                      className="p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-200"
                      title="Close"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                  </div>

                  {/* Lightbox Info */}
                  <div className="bg-gradient-to-t from-gray-900 to-gray-800 p-4 sm:p-6 text-white">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold line-clamp-1">
                          {lightboxImage.title}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                          <span className="px-2 sm:px-3 py-1 bg-yellow-500 text-white text-xs sm:text-sm font-bold rounded-full">
                            EverSafe
                          </span>
                          <span className="text-gray-300 text-xs sm:text-sm">
                            {lightboxImage.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownload(lightboxImage.src, lightboxImage.title)}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                      >
                        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Click outside to close */}
              <div className="absolute inset-0 -z-10" onClick={() => setLightboxImage(null)} />
            </div>
          )}
        </div>
      </section>
      <Footer />
      <StickyContactIcons/>
    </>
  );
}