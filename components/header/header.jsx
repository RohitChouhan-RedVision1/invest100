"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { servicesdata, toolsdata } from "@/data/commanData";
import { FaAngleDown, FaAngleUp   } from "react-icons/fa6";


import styles from "./header.module.css";
import {
  FaAngleRight,
  FaBarsStaggered,
  FaXmark,
  FaXmarksLines,
} from "react-icons/fa6";
import { MdCancel } from "react-icons/md";


const Navbar = ({ siteData }) => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isservices, setIsServices] = useState(false);
  const [isstools, setIsTools] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  
  const toggleTools = () => {
    setIsTools(!isstools);
    if (!isstools) {
      setIsServices(false); // 👈 Tools open hone par Services band
    }
  };

  const toggleServices = () => {
    setIsServices(!isservices);
    if (!isservices) {
      setIsTools(false); // 👈 Services open hone par Tools band
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  // Sticky Header Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`${styles.mainHeader} `}>
        <div
          id="vl-header-sticky"
          className={`main-header ${styles.transparentHeader} ${isSticky ? `${styles.headerSticky}` : " "
            }`}
        >
          <div className="container">
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 items-center">
                <div className="col-span-1">
                  <div className={styles.logo}>
                    <Link href="/">
                      <img src="/images/logo.webp" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block col-span-2">
                  <div className={`${styles.mainMenu} text-center`}>
                    <nav className="vl-mobile-menu-active">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="#">
                            <p>Services</p>
                            <FaAngleRight
                              className={`${styles.spanArrow} lg:block hidden`}
                            />
                          </Link>
                          <ul className={styles.subMenu}>
                            {servicesdata.map((service, index) => (
                              <li key={index}>
                                <Link href={`/services/${service.slugUrl}`}>
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <Link href="#">
                            <p>Tools</p>
                            <FaAngleRight
                              className={`${styles.spanArrow} lg:block hidden`}
                            />
                          </Link>
                          <ul className={styles.subMenu}>

                            {toolsdata.map((tools, index) => (
                              <li key={index}>
                                <Link href={`${tools.link}`}>
                                  {tools.name}
                                </Link>
                              </li>
                            ))}

                          </ul>
                        </li>
                        <li>
                          <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className={`${styles.heroBtn} hidden lg:block text-end`}>
                    <div className={styles.headBtn}>
                      <div className={styles.btnArea}>
                        <Link href="/login" className="vl-btn1">
                          Login
                        </Link>
                      </div>
                      <span className={`${styles.btnWrap} text-end`}>
                        <span className={styles.icons}>
                          <img src="/images/icons/whatsapp.svg" alt="whatsapp" />
                        </span>
                        <span className={styles.text}>
                          <span>Free Assistance 24/7</span>
                          <Link href={`tel:${siteData.mobile}`}>
                            {siteData.mobile}
                          </Link>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.headerActionItem} block lg:hidden`}>
                    <button
                      type="button"
                      onClick={() => setIsMobileMenuOpen(true)}
                      className="text-2xl p-2 text-[--rv-primary]"
                    >
                      <FaBarsStaggered />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl z-[150] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-[--rv-primary]">Menu</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <MdCancel className="text-2xl text-[--rv-primary]" />
          </button>
        </div>
        <nav className="p-4 space-y-4 flex flex-col text-[--rv-primary]">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <div>
            <p className="font-semibold flex justify-between" onClick={toggleServices} >Services {isservices ?  <FaAngleUp /> : <FaAngleDown />} </p>
            <ul className={`pl-4 space-y-2 ${isservices ? "block" : "hidden"}`}>
              {servicesdata.map((service, index) => (
                <li key={index}>
                  <Link href={`/services/${service.slugUrl}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold flex justify-between" onClick={toggleTools}>Tools  {isstools ?  <FaAngleUp /> : <FaAngleDown />}  </p>
            <ul className={`pl-4 space-y-2 ${isstools ? "block" : "hidden"}`}>
                {toolsdata.map((tools, index) => (
                              <li key={index}>
                                <Link href={`${tools.link}`}>
                                  {tools.name}
                                </Link>
                              </li>
                            ))}
            </ul>
          </div>
          <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
          <Link href="/login" className="vl-btn1">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
