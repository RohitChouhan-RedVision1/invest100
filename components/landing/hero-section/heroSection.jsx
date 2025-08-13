
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className={`${styles.heroSectionArea} section`} style={{ backgroundImage: 'url(/images/bg/hero-bg.webp)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container">
                <div class="grid lg:grid-cols-2 grid-cols-1 items-center justify-center">
                    <div>
                        <div className={styles.headingArea}>
                            <h5 data-aos="fade-left" data-aos-duration="800">₹500/month SIP can become ₹2.5 Lacs in 10 Years! Why wait?</h5>
                            <div class="space20"></div>
                            <h4 class="text-anime-style-1">Join countless individuals who have effortlessly embarked on their Mutual Fund journey with our Invest100 app, beginning with as little as ₹100 per month!</h4>
                            <div class="space20"></div>
                            <p data-aos="fade-left" data-aos-duration="1000">Initiate your SIP or Lumpsum investment today and witness the growth and compounding of your wealth like never before. Our mobile application lets you effortlessly 
invest in and manage your Mutual Funds</p>
                            <div class="space32"></div>
                            <div className={styles.btnArea}>
                                <Link href="/service/mutual-funds" className={"vl-btn1"}>Explore Our Services</Link>
                                <Link href="/contact-us" className={`${styles.vlBtn1} ${styles.btn2}`}>Join Us Today</Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoon-in" data-aos-duration="1000">
                        <div className={styles.heroImagesArea}>
                            <div className={styles.img1}>
                                <Image src="/images/hero-img.webp" alt="" width={500} height={300} />
                            </div>
                             
                            <img src="/images/elements2.svg" className={`${styles.elements2} aniamtion-key-4`} alt="" />
                            <img src="/images/elements3.svg" className={`${styles.elements3} aniamtion-key-1`} alt="" />
                            <img src="/images/elements4.svg" className={`${styles.elements4} aniamtion-key-2`} alt="" />
                            <img src="/images/elements5.svg" className={`${styles.elements5} keyframe5`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
