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
            <div className="max-w-screen-xl mx-auto main_section">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <div className="col-lg-3 col-md-6 ">
                        <div className={styles.footerLogo}>
                            <Link href={"/"}><img src="/logo/logo1.png" alt="" /></Link>
                            <div className="space24"></div>
                            <p>{siteData.websiteName} are AMFI-Registered Mutual Fund Distributors. {siteData.websiteName} offer access to investment products based on your financial goals and risk profile.</p>
                            <div className="space24"></div>
                            <ul className='grid grid-cols-3'>
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
                                        <img src="/icons/phn1.svg" alt="" />
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
                <div className="space60"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.copyrightArea}>
                            <p>© Copyright 2025 - {siteData.websiteName}. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <footer className={styles.mainFooter}>
        //     <div class="container mx-auto">
        //         <div class="grid grid-cols-6">
        //             <div class="col-span-3">
        //                 <div className={styles.footerNewsletterBox}>
        //                     <Image
        //                         src={"/images/logo.png"}
        //                         alt="logo"
        //                         width={120}
        //                         height={150}
        //                         className="rounded"
        //                     />
        //                     <p className="mb-6 text-sm text-gray-100 py-4">{mainData?.description}</p>
        //                     <div className={styles.footerNewsletterTitle}>
        //                         <h3>Don't missed subscribed!</h3>
        //                     </div>
        //                     <div className={styles.newsletterForm}>
        //                         <form id="newsletterForm" action="#" method="POST">
        //                             <div className={styles.formGroup}>
        //                                 <input type="email" name="email" className={styles.formControl} id="mail" placeholder="Enter Your Email" required="" />
        //                                 <button type="submit" className={styles.newsletterBtn}>
        //                                     <Image src="/images/arrow-white.svg" alt="Subscribe" width={40} height={20} />
        //                                 </button>
        //                             </div>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="col-span-1">
        //                 <div className={styles.footerLinks}>
        //                     <h3>Services</h3>
        //                     <ul>
        //                         {services?.map((sub, index) => (
        //                             <li className="mb-5" key={index}>
        //                                 {!sub.children || sub.children.length === 0 ? (
        //                                     <Link href={sub.link} target="blank"><p>{sub.name}</p></Link>
        //                                 ) : (
        //                                     <ul className="">
        //                                         {sub.children.map((child, childIndex) => (
        //                                             <li key={childIndex} className="mb-1">
        //                                                 <Link href={child.link} target="blank">
        //                                                     <p>{child.name}</p>
        //                                                 </Link>
        //                                             </li>
        //                                         ))}
        //                                     </ul>
        //                                 )}
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             </div>

        //             <div className="col-span-1">
        //                 <div className={styles.footerLinks}>
        //                     <h3>Quick Links</h3>
        //                     <ul>
        //                         {quicklinks?.map((sub, index) => (
        //                             <li key={index}>
        //                                 <Link href={sub?.link}>{sub?.title}</Link>
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             </div>

        //             <div className="col-span-1">
        //                 <div className={styles.footerLinks}>
        //                     <h3>Usefull Link</h3>
        //                     <ul>
        //                         {usefulLink?.map((sub, index) => (
        //                             <li key={index}><Link href={sub?.link}>{sub?.title}</Link></li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             </div>

        //             <div className="col-span-7">
        //                 <div className={styles.footerCtaBox}>
        //                     <div className={styles.footerLogo}>
        //                         <Image src={"/images/amfi-logo.jpg"} width={80} height={80} alt="amfi" className="rounded" />
        //                     </div>
        //                     <div className={styles.footerContactBox}>
        //                         <div className={styles.footerContactItem}>
        //                             <p>Need Help?</p>
        //                             <h3>{mainData?.mobile}</h3>
        //                         </div>
        //                         <div className={styles.footerContactItem}>
        //                             <p>Email Now</p>
        //                             <h3>{mainData?.email}</h3>
        //                         </div>
        //                         <div className={styles.footerContactItem}>
        //                             <p>ARN</p>
        //                             <h3>{mainData?.arn}</h3>
        //                         </div>
        //                         <div className={styles.footerContactItem}>
        //                             <p>EUIN</p>
        //                             <h3>{mainData?.euin}</h3>
        //                         </div>
        //                     </div>
        //                     <div className="py-3 md:px-1 px-4">
        //                         <p className=" text-gray-300 text-center">{mainData?.title} is an AMFI Registered Mutual Fund Distributor.</p>
        //                         <p className=" text-gray-300 text-center">
        //                             Disclaimer: Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy distributable surplus.
        //                         </p>
        //                         <p className=" text-gray-300 text-center">
        //                             {mainData?.title} makes no warranties or representations, express or implied, on products offered through the platform of {mainData?.title}. It accepts no liability for any damages or losses, however, caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable. Investments in Securities markets are subject to market risks, read all the related documents carefully before investing.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={styles.footerCopyright}>
        //             <div class="grid grid-cols-5 align-center">
        //                 <div class="col-span-2">
        //                     <div className={styles.footerCopyrightText}>
        //                         <Link target="_blank" href="https://www.redvisiontechnologies.com/" className="hover:underline me-4 md:me-6"><p>Designed & Developed by REDVision global technology</p></Link>
        //                     </div>
        //                 </div>
        //                 <div class="col-span-3">
        //                     <div class="footer-menu">
        //                         <ul>
        //                             {mainData?.facebook && (
        //                                 <Link target="_blank" href={mainData?.facebook}>
        //                                     Facebook
        //                                 </Link>
        //                             )}
        //                             {mainData?.instagram && (
        //                                 <Link target="_blank" href={mainData?.instagram}>
        //                                     Instagram
        //                                 </Link>
        //                             )}
        //                             {mainData?.linkedin && (
        //                                 <Link target="_blank" href={mainData?.linkedin}>
        //                                     Linkedin
        //                                 </Link>
        //                             )}
        //                             {mainData?.twitter && (
        //                                 <Link target="_blank" href={mainData?.twitter}>
        //                                     Twitter
        //                                 </Link>
        //                             )}
        //                             {mainData?.youtube && (
        //                                 <Link target="_blank" href={mainData?.youtube}>
        //                                     YouTube
        //                                 </Link>
        //                             )}
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer;