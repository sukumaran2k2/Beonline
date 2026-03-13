import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
    <div className={styles.heroContainer}>
      <Image
        src="/Hero-img.jpg"
        alt="Hero"
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles["hero-content"]}>
        <p className={styles.tagline}>YOUR VISION, OUR EXPERTISE!</p>
        <h1 className={styles.heading}>
          Award-Winning Digital <br />
          Marketing Agency for <br />
          High-Growth Brands
        </h1>
        <p className={styles.description}>
          We help brands in speeding up their growth through strategic marketing, brand
          experiences that are powerful and focused on performance execution. Our
          solutions are designed to deliver real, measurable ROI as we build like driving
          traffic, improving conversions and creating digital assets.
        </p>
        <a href="#" className={styles.ctaBtn}>
          Get A Free Quote ↗
        </a>
      </div>
    </div>
      <div className={styles.logoipsum}>
        <div className={styles.logoImage}>
            <Image src="/logoipsum.png" alt="Logo" width={180} height={108} className={styles.logoImage} />
        </div>
        <div className={styles.logoImage}>
            <Image src="/logoipsum.png" alt="Logo" width={180} height={108} className={styles.logoImage} />
        </div>
        <div className={styles.logoImage}>
            <Image src="/logoipsum.png" alt="Logo" width={180} height={108} className={styles.logoImage} />
        </div>
        <div className={styles.logoImage}>
            <Image src="/logoipsum.png" alt="Logo" width={180} height={108} className={styles.logoImage} />
        </div>
        <div className={styles.logoImage}>
            <Image src="/logoipsum.png" alt="Logo" width={180} height={108} className={styles.logoImage} />
        </div>

      </div>
    </>

  );
};

export default Hero;
