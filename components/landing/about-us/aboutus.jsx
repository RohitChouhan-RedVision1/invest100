
import styles from './AboutSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection({siteData}) {
    
    return (
        <div className={`${styles.aboutSectionArea} section`}>
            <div class="container">
                <div class="grid   md:grid-cols-12  ">
                    <div class="col-span-1"></div>
                    <div class="col-span-6">
                        <div className={styles.aboutImagesArea}>
                            <div className={styles.img1}>
                                <Image
                                    src="/images/about-img.webp"
                                    alt="About Image 1"
                                    width={50}
                                    height={400}
                                    layout="responsive"
                                />
                            </div>
                            <Image
                                src="/images/elements6.svg"
                                alt="About Image 1"
                                width={350}
                                height={400}
                                // layout="responsive"
                                className={`${styles.elements6} aniamtion-key-1`}
                            />
                        </div>
                    </div>
                    <div class="col-span-5">
                        <div className={`${styles.aboutHeading} heading1`}>
                            <h5>About Us</h5>
                            <div class="space16"></div>
                            <h2 class="text-anime-style-1">Why Choose Invest100 for Your Investment Journey?</h2>
                            <div class="space16"></div>
                            <p>Welcome to <b>Invest100</b>, your trusted mutual fund distributor for smart, simple and secure mutual fund investing. </p>
                            <p>We help first-time and seasoned investors start small, stay consistent, and build wealth over time - starting with as low as ₹100. </p>
                            <p>Whether it&lsquo;s for your dream home, child&lsquo;s future, or retirement, <b>Invest100</b> makes investing effortless, guided and goal-driven with complimentary help round the clock.</p>
                            <p>Our dedicated team of financial experts is committed to providing you with the best guidance and solutions tailored to your unique needs. We take pride in the relationships we&lsquo;ve built with our clients, and their success stories inspire us every day.</p>
                            <p>In a rapidly changing world, we remain dedicated to helping you secure your financial future. Your dreams are our top priority, and your trust is the foundation of our service.</p>
                            <div class="space32"></div>
                            <div className={styles.peraBox} >
                                <div className={`${styles.icons} p-2`}>
                                    <Image
                                        src="/images/icons/about-icon.svg"
                                        alt="About Image 1"
                                        width={400}
                                        height={400}
                                    // layout="responsive"
                                    />
                                </div>
                                <div className={styles.text}>
                                    <Link href="/">This user-friendly application is designed for everyone</Link>
                                    <div class="space10"></div>
                                    <p>Support is readily available should you encounter any difficulties. Remember, even small contributions can lead to significant results. Explore investment options tailored to your specific goals</p>
                                </div>
                            </div>
                            <div class="space32"></div>
                            <div class="btn-area1">
                                <Link href="/about-us" class="vl-btn1">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
