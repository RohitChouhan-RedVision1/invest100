"use client";
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import styles from './Footer.module.css'
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { servicesdata, amfisabilinks } from "@/data/commanData";
import Image from 'next/image';

const Footer = ({ siteData, services, SocialMedia, arnData }) => {
    const socialIconMap = {
        Facebook: <FaFacebook />,
        Instagram: <FaInstagram />,
        Linkedin: <FaLinkedin />,
        Youtube: <FaYoutube />,
        Twitter: <FaTwitter />,
        Whatsapp: <FaWhatsapp />,
    };
 const quicklinks = [
        
        {
            title: "About Us",
            link: "/about-us"
        },
      
        {
            title: "Contact Us",
            link: "/contact-us"
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: "Privacy Policy",
            link: "/footer-page/privacy-policy"
        },
        {
            title: "Commission Disclosures",
            link: "/footer-page/commission-disclosures"
        },
    ]
    return (
        <div className={`${styles.footer1SectionArea} section pb-0`}>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="col-lg-3 col-md-6 ">
                        <div className={styles.footerLogo}>
                            <Link href={"/"}><img src="/images/logo.webp" alt="" /></Link>
                            <div className="space24"></div>
                            <p><b>{siteData.websiteName}</b> is your trusted guide to long-term wealth. We simplify investing for every Indian - from students to seasoned professionals.</p>
                          
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
                                {quicklinks?.map((sub, index) => (
                                 <li key={index}>
                                        <Link href={sub?.link}>{sub?.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
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
                    </div> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="space30 d-md-none d-block"></div>
                        <div className={styles.footerWidget}>
                            <h3>Contact Us</h3>
                            <div className="space4"></div>
                            <ul>
                                <li>
                                    <Link href={`tel:${siteData.mobile}`}>
                                        <img src="/images/icons/phone1.svg" alt="" />
                                        <p>{siteData.mobile}</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={siteData.mapurl} className='flex'>
                                        <img src="/images/icons/location1.svg" alt="" />
                                        {siteData.address}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`mailto:${siteData.email}`} className='flex'><img src="/images/icons/email1.svg" alt="" />{siteData.email}</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-7">
                    <div className={styles.footerCtaBox}>
                        {/* <div className={styles.footerLogo}>
                            <Image src={"/images/amfi.webp"} width={80} height={80} alt="amfi" className="rounded" />
                        </div> */}
                       
                        <div className="">
                            <p>AMFI Registered Mutual Fund Distributor | ARN : {arnData[0]?.arn} |  Date of Registration: -- | Current Validity: -- TO -- | EUIN-{arnData[0]?.euins[0]?.euin} Current Validity: -- TO --</p>
                        </div>
                        <div className={styles.footersabiLink}>
                            <ul className='flex gap-3'>
                            {amfisabilinks?.map((sub, index) => (
                                    <li key={index}>
                                        <b><Link href={sub?.link} target={`${sub?.target ? sub?.target : "_self"}`}  >{sub?.title}</Link></b>
                                    </li>
                                    
                                ))}
                            </ul>
                        </div>

                        <div className={styles.footerCtasabidic}>
                            <p className="">{siteData?.websiteName} is an AMFI Registered Mutual Fund Distributor.</p>
                            <p className="">
                                Disclaimer: Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy distributable surplus.
                            </p>
                            <p className="">
                                {siteData?.websiteName} makes no warranties or representations, express or implied, on products offered through the platform of {siteData?.websiteName}. It accepts no liability for any damages or losses, however, caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable. Investments in Securities markets are subject to market risks, read all the related documents carefully before investing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space16"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.copyrightArea}>
                            <p>© Copyright {new Date().getFullYear()} - {siteData.websiteName}. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;