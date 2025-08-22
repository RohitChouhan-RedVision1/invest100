'use client';
import styles from './topfeatures.module.css';
import React from 'react';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toolsdata } from '@/data/commanData';
const TopFeatures = () => {


  const settings = {
    dots: true,
    infinite: true,
    margin: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
    customPaging: function (i) {
      return <button>{i + 1}</button>;
    },
    dotsClass: `${styles.slickDots}`
  };

  return (
    <div className={`${styles.projectSection} section` }>
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-6 m-auto">
            <div className="heading1 text-center space-margin60">
              <h5>OUR TOOLS</h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-1">Empowering Financial Decisions</h2>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-1"></div>

          <div className="md:col-span-5 w-full">
            <Slider {...settings} className={styles.projectSingleBoxarea}>
              {toolsdata.map((card, index) => (
                <div key={index} className={`${styles.projectBoxarea} heading1`} data-aos={card.animation}>
                  <Link href={card.link}>
                    <h5>Featured Tool</h5>
                    <div className="space16"></div>
                    <h4>
                      {card.name}
                    </h4>
                    <div className="space16"></div>
                    <p>{card.disc}</p>
                    <div className="space24"></div>
                    <span>Read More <i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                </div>

              ))}
            </Slider>
          </div>

          <div className="block md:col-span-6">
            <div className={styles.allImages}>
              <div className={styles.imagesArea}>
                <div className={styles.img1}>
                  <img src="/images/financial-decisions.webp" alt="Tool visual" />
                </div>
                <img src="/images/basic-1-tool.webp" alt="" className={`${styles.elements7} aniamtion-key-1 w-[250px]`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;
