'use client'
import styles from './ourservice.module.css'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { servicesdata } from '@/data/commanData'
import Image from 'next/image'


const OurServices = ({ services }) => {
    return (
        <div className={`${styles.serviceSectionArea} section`} style={{ backgroundImage: 'url(/images/bg/hero-bg.webp)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="heading1 space-margin60">
                            <h5>OUR SERVICES</h5>
                            <div className="space20"></div>
                            <h2 className="text-anime-style-1">Backed by Experience, Built for You</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceSingleSlider}>
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {servicesdata.map((service, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`/services/${service?.slugUrl}`}>
                                    <div className={styles.serviceBoxarea}>
                                        <div className={styles.img1}>
                                            <Image
                                                src={`${service?.imgContent}`}
                                                alt=""
                                                  width={300}
                                                    height={200}
                                            />
                                            <div className={styles.arrow}>
                                                <ArrowRight />
                                            </div>
                                        </div>
                                        <div className={styles.contentArea}>
                                            <div className={styles.icons}>
                                                <Image
                                                    src={`${service?.iconeImg}`}
                                                    alt=""
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="space24"></div>
                                            <h5>{service?.title}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default OurServices;
