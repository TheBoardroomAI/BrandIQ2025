'use client';

import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import Button from './Button';

interface HeroVideo {
  mp4: string;
  poster: string;
  title: string;
}

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const heroVideos: HeroVideo[] = [
    {
      mp4: '/videos/postcards-hero-animation.mp4',
      poster: '/images/postcards-hero-image.jpg',
      title: 'Postcards',
    },
    {
      mp4: '/videos/brick-chisel-video.mp4',
      poster: '/images/brick-chisel-thumbnail.png',
      title: 'Brick & Chisel',
    },
    {
      mp4: '/videos/baseball-loop-animation.mp4',
      poster: '/images/baseball-hero-image.jpg',
      title: 'Baseball',
    },
  ];

  // Auto-rotate videos every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [heroVideos.length]);

  const currentVideo = heroVideos[currentVideoIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <VideoPlayer
          key={currentVideo.mp4}
          mp4Src={currentVideo.mp4}
          posterImage={currentVideo.poster}
          autoPlay={true}
          muted={true}
          loop={true}
          controls={false}
          className="h-full w-full"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-white">
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-6 font-light tracking-wide">
            Integrating the power of market research with the emotion of authentic storytelling
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block">BRANDS THAT INSPIRE.</span>
            <span className="block text-brandiq-orange mt-2">CREATIVE THAT WORKS.</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button href="/services" variant="primary" size="lg">
              Our Services
            </Button>
            <Button href="/gallery" variant="ghost" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Video Navigation Dots */}
          <div className="flex gap-3 justify-center mt-16">
            {heroVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex
                    ? 'bg-white w-8'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
