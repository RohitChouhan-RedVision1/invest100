

"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from './testimonials.module.css';
import Link from "next/link";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Slider from "react-slick";
import { FaAngleUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export function Testimonials({ testimonials, sitedata }) {
    console.log(sitedata)
    const router=useRouter();
      const [isOpen, setIsOpen] = useState(false);
      const [hcaptchaToken, setHcaptchaToken] = useState(null);
      const [captchaError, setCaptchaError] = useState("");
      const [formData, setFormData] = useState({
        username: "",
        designation : "",
        message: "",
        captcha: "",
      });
      const [loading, setLoading] = useState(false);
      const [submitted, setSubmitted] = useState(false);
     


            // Body par class toggle karne ka effect
            useEffect(() => {
                if (isOpen) {
                document.body.classList.add("menu-open");  // 👈 apni class name
                } else {
                document.body.classList.remove("menu-open");
                }

                // Cleanup (optional, component unmount hone pr class remove kar dega)
                return () => {
                document.body.classList.remove("menu-open");
                };
            }, [isOpen]);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
     
     
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!hcaptchaToken) {
          setCaptchaError("Please complete the CAPTCHA verification.");
          return;
        }
        setCaptchaError("");
        setLoading(true);
     
        // const emaildata = {
        //   user: formData?.username,
        //   to: formData?.email,
        //   subject: "Thank You for Your Enquiry!",
        //   text: `Dear ${formData?.username}, We sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.`,
        // };
     
        const senderdata = {
          user: sitedata?.websiteName,
          to: sitedata?.email,
          subject: "New Enquiry",
          html: `
            <p><strong>New Enquiry Details:</strong></p>
            <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                <tr><th>Field</th><th>Details</th></tr>
                <tr><td><strong>User Name</strong></td><td>${formData?.username}</td></tr>
                <tr><td><strong>Email</strong></td><td>${formData?.designation}</td></tr>
                <tr><td><strong>Message</strong></td><td>${formData?.message}</td></tr>
            </table>
            <br><p>Regards,</p><p><strong>${sitedata?.websiteName} Team</strong></p>
          `,
        };
     
        try {
        //   const res = await axios.post("/api/leads", formData);
        //   if (res.status === 201) {
            // await axios.post("/api/email", emaildata);
            await axios.post("/api/email", senderdata);
            setSubmitted(true);
            setFormData({ username: "", designation: "", message: "", captcha: "" });
            router.push("/thankyou")
         
        } catch (error) {
          console.error("Submission error:", error);
          alert("Something went wrong. Please try again.");
        } finally {
          setLoading(false);
        }
      };

    function createMarkup(post) {
        return { __html: post };
    }

    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                }
            }
        ]
    };

    const settings1 = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false
    };

    return (
        <div
            className={`${styles.testimonialSectionArea} section `}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 m-auto">
                       <div className={`${styles.heading1} heading1 space-margin60 text-center`}>
                            <h5 className="text-white">WHAT OUR INVESTORS SAY</h5>
                            <div className="space20"></div>
                            <h2 className="text-anime-style-1">Helping Everyday Investors Build Wealth</h2>
                         </div>
                    </div>
                 </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Main Testimonial */}
                    <div className="md:col-span-7 w-full">
                        <div className={styles.testimonialHorizentalSlider}>
                             <Slider {...settings1}>
                                     {testimonials.map((testimonial, index) => (
                                    <div className={styles.testimonialVertical} key={index}>
                                        <div className={styles.icon}>
                                            <div className="quoto">
                                                <img src="/icons/quito1.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="space32"></div>
                                        <div>
                                            <div className="line-clamp-2" dangerouslySetInnerHTML={createMarkup(testimonial.content)}></div>
                                            <button
                                                onClick={() => setSelectedTestimonial(testimonial)}
                                                className="text-[16px] text-blue-500  mt-1"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                        <div className="space32"></div>
                                        <div className={styles.vericalBoxarea}>
                                            <div className={styles.imagesArea}>
                                                <div className={styles.img1}>
                                                    <img src={testimonial.image?.url || "/all-images/testimonial/default.jpg"} alt={testimonial.author} />
                                                </div>
                                                <div className={styles.text}>
                                                    <Link href="#">{testimonial.author}</Link>
                                                    <p>{testimonial.designation}</p>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="122" height="40" viewBox="0 0 122 40" fill="none">
                                                <g clipPath="url(#clip0_600_7362)">
                                                    {/* SVG content */}
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_600_7362">
                                                        <rect width="122" height="40" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Vertical Slider - Thumbnails */}
                    <div className=" hidden md:block md:col-span-5 w-full overflow-hidden">
                        <div className={styles.sliderArea}>
                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className={`${styles.sliderBoxarea}`}>
                                        <div className={styles.sliderBox}>
                                            <div className={styles.img1}>
                                                <img src={testimonial.image?.url || "/all-images/testimonial/default.jpg"} alt={testimonial.author} />
                                            </div>
                                            <div className={styles.content}>
                                                <Link href="#">{testimonial.author}</Link>
                                                <p className="text-sm">{testimonial.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            {/* Arrows (optional functionality) */}
                            <div className={styles.testimonialArrows}>
                                <div className={styles.prevArrow}>
                                    <button><FaAngleUp /></button>
                                </div>
                                <div className={styles.nextArrow}>
                                    <button><i className="fa-solid fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex justify-center"><button className="btn vl-btn1" onClick={() => setIsOpen(true)} >Write Review</button></div>
            {isOpen && (
                    <div className="fixed inset-0 bg-black/40   flex items-center justify-center z-[9999]">
                        <div
                            className="bg-white text-black rounded-2xl p-6 max-w-lg w-full relative shadow-xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Close Button */}
                            <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
                            >
                            &times;
                            </button>
                
                            {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h2 className="text-2xl font-bold mb-4">Your Review</h2>
                
                                <input
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full border rounded-lg px-3 py-2"
                                required
                                />
                                <input
                                name="designation"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Your Designation"
                                className="w-full border rounded-lg px-3 py-2"
                                required
                                />
                             
                                <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Review"
                                className="w-full border rounded-lg px-3 py-2"
                                ></textarea>
                
                                <HCaptcha
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onVerify={(token) => setHcaptchaToken(token)}
                            className="w-full"
                            />
                                {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
                
                                <button type="submit" className="btn vl-btn1">
                                {loading ? "Loading..." : "Submit"}
                                </button>
                            </form>
                            ) : (
                            <div className="text-center">
                                <h2 className="text-2xl font-bold mb-4">✅ Thank you!</h2>
                                <p>We’ve received your enquiry. Our team will contact you soon.</p>
                            </div>
                            )}
                        </div>
                    </div>
                )}
                {/* Modal */}
                {selectedTestimonial && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full overflow-y-auto max-h-[90vh] relative">
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-red-500"
                            >
                                &times;
                            </button>
                            <div dangerouslySetInnerHTML={createMarkup(selectedTestimonial.content)}></div>
                            <div className="mt-4">
                                <strong>{selectedTestimonial.author}</strong>
                                <p className="text-sm text-gray-500">{selectedTestimonial.designation}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
