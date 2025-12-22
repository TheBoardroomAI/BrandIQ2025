'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  mp4Src: string;
  webmSrc?: string;
  posterImage: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({
  mp4Src,
  webmSrc,
  posterImage,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={posterImage}
          alt="Video poster"
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        poster={posterImage}
        onError={handleError}
        className="w-full h-full object-cover"
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={mp4Src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Overlay */}
      {!controls && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            {isPlaying ? (
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </div>
        </button>
      )}
    </div>
  );
}
