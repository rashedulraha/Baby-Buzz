import React, { useState } from "react";
import useCarouselFetch from "../../Hook/useCarouselFetch";

const Carousel = () => {
  const { Carousel } = useCarouselFetch();
  const slides = Carousel?.data || [];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}>
          {/* Background Image + Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-end pb-10 md:pb-16 px-6 md:px-12">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
                animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-lg max-w-2xl">
                {slide.description}
              </p>

              <button
                onClick={nextSlide}
                className="btn btn-lg bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content font-bold shadow-xl border-none">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 btn btn-circle bg-base-100/80 hover:bg-primary text-base-content hover:text-primary-content border-none shadow-lg backdrop-blur-sm"
        aria-label="Previous slide">
        <span className="text-2xl">←</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 btn btn-circle bg-base-100/80 hover:bg-primary text-base-content hover:text-primary-content border-none shadow-lg backdrop-blur-sm"
        aria-label="Next slide">
        <span className="text-2xl">→</span>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-10"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
