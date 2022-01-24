import React from 'react';
import styles from './Carousel.module.css';
import {Image, Carousel as AntCarousel } from 'antd';

import carouselImage1 from '../../assets/c1.jpg';
import carouselImage2 from '../../assets/c2.jpg';
import carouselImage3 from '../../assets/c3.jpg';

export const Carousel: React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src={carouselImage1}></Image>
      <Image src={carouselImage2}></Image>
      <Image src={carouselImage3}></Image>
    </AntCarousel>
  )
}
