"use client";
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import styles from './Footer.module.css'
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = ({siteData,services,SocialMedia}) => {
    console.log(siteData)
     const socialIconMap = {
        Facebook: <FaFacebook />,
        Instagram: <FaInstagram />,
        Linkedin: <FaLinkedin />,
        Youtube: <FaYoutube />,
        Twitter: <FaTwitter />,
        Whatsapp: <FaWhatsapp />,
    };

    return (
        <div className={styles.footer1SectionArea}>
            <div className="max-w-screen-xl mx-auto main_section1">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <div className="col-lg-3 col-md-6 ">
                        <div className={styles.footerLogo}>
                            <Link href={"/"}><img src="/logo/logo1.png" alt="" /></Link>
                            <div className="space24"></div>
                            <p>{siteData.websiteName} are AMFI-Registered Mutual Fund Distributors. {siteData.websiteName} offer access to investment products based on your financial goals and risk profile.</p>
                            <div className="space24"></div>
                            <ul className='grid grid-cols-6'>
                                {SocialMedia?.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.url} target="_blank">
                                            {socialIconMap[item.title] ?? null}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="space30 d-md-none d-block"></div>
                        <div className={`${styles.footerWidget} ${styles.firstPadding}`}>
                            <h3>Quick Links</h3>
                            <div className="space4"></div>
                            <ul>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li>
  <a href="/AMFI_Code-of-Conduct1.pdf" download target="_blank" rel="noopener noreferrer">
    Code Of Conduct
  </a>
</li>

                                <li><Link href="/commission-disclosures">Commission Disclosures</Link></li>
                            </ul>
                        </div>
                    </div>
                      <div className="col-lg-3 col-md-6">
            <div className="space30 d-md-none d-block"></div>
            <div className={`${styles.footerWidget} ${styles.firstPadding}`}>
              <h3>Services</h3>
              <div className="space4"></div>
              <ul>
                {services?.map((service, idx) => (
                  <li key={idx}>
                    <Link href={`/${service.link}`}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="space30 d-md-none d-block"></div>
                        <div className={styles.footerWidget}>
                            <h3>Contact Us</h3>
                            <div className="space4"></div>
                            <ul>
                                <li>
                                    <Link href={`tel:${siteData.mobile}`}>
                                        <img src="/icons/phone1.svg" alt="" />
                                        <p>{siteData.mobile}</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={siteData.mapurl} className='flex'>
                                        <img src="/icons/location1.svg" alt="" />
                                        {siteData.address}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`mailto:${siteData.email}`} className='flex'><img src="/icons/email1.svg" alt="" />{siteData.email}</Link>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space16"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.copyrightArea}>
                            <p>© Copyright 2025 - {siteData.websiteName}. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default Footer;