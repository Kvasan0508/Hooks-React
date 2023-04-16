import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
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
  const values = [
    {
      text: 'hello',
      text1: 'hi',
    },
    {
      text: 'hello0',
      text1: 'hi',
    },
    {
      text: 'hello00',
      text1: 'hi',
    },
    {
      text: 'hello000',
      text1: 'hi',
    },
    {
      text: 'hello000',
      text1: 'hi',
    },
  ];
  const [currentIndex, SetCurrentIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      currentIndex === values.length - 1
        ? SetCurrentIndex(0)
        : SetCurrentIndex(currentIndex + 1);
    }, 1000);
  }, [currentIndex]);

  return (
    <div>
      <p className="slide">
        {' '}
        {values[currentIndex].text}
        <br />
        {values[currentIndex].text1}
      </p>
    </div>
  );
}
