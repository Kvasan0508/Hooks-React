import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const TimerRef = useRef(null);
  const slides = [
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/home_186._SY116_CB592083129_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/kitchen186._SY116_CB592083129_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg',
    },
  ];
  const [slider, setSlider] = useState(0);

  const prev = () => {
    const isFirstSlide = slider === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : slider - 1;
    setSlider(newIndex);
  };
  const next = React.useCallback(() => {
    const isLastSlide = slider === slides.length - 1;
    const newIndex = isLastSlide ? 0 : slider + 1;
    setSlider(newIndex);
  }, [slider, slides.length]);

  useEffect(() => {
    if (TimerRef.current) {
      clearTimeout(TimerRef.current);
    }

    TimerRef.current = setTimeout(() => {
      next();
    }, 2000);
    return () => clearTimeout(TimerRef.current);
  }, [next]);

  return (
    <div>
      <img className="slide" src={slides[slider].url} alt="" />
      <button onClick={prev}>&lt;</button>
      <button onClick={next}>&gt;</button>
    </div>
  );
}
