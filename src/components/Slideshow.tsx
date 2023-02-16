import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Card } from "@mui/material";
import Link from "next/link";

interface SlideshowProps {
  images: string[];
  duration: number;
}

const Slideshow = ({ images, duration }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, duration]);

  function handlePrev() {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length
    );
  }

  function handleNext() {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
  }

  return (
    <div className="relative h-96">
      <img
        src={images[(currentIndex - 1 + images.length) % images.length]}
        alt="slide"
        className="absolute top-10 left-10 md:w-1/2 md:h-10/12 z-10 opacity-50"
      />
      <Link href="/projects">
        <img
          src={images[currentIndex]}
          alt="slide"
          className="absolute top-0 md:left-1/4 md:w-1/2 h-full z-20"
        />
      </Link>
      <img
        src={images[(currentIndex + 1) % images.length]}
        alt="slide"
        className="absolute top-10 right-10 md:w-1/2 md:h-10/12 z-10 opacity-50 "
      />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-40"
      >
        <ArrowBackIosIcon className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-40"
      >
        <ArrowForwardIosIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Slideshow;
