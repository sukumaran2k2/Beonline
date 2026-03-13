"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./testimonial.module.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      header: "Superb Work! Amazing Performance!",
      text: "Explore BO's behind-the-scenes impact when we lowered the CAC from INR 9,960 to INR 4,500 through strategic digital marketing.",
      clientName: "Candere | Kalyan Jewellers",
      clientCompany: "A Kalyan Jewellers Company",
      logoPath: "/Hero-img.jpg", 
    },
    {
      id: 2,
      header: "Exceptional Service Quality!",
      text: "Working with Bee Online completely transformed our digital strategy, leading to a 40% increase in qualified leads within the first quarter.",
      clientName: "Brand Representative",
      clientCompany: "Example Corp",
      logoPath: "/Hero-img.jpg",
    },
    {
      id: 3,
      header: "Outstanding ROI Driven Approach",
      text: "The team's dedication to data-driven marketing helped us scale our ad campaigns profitably while maintaining a healthy ROAS.",
      clientName: "Marketing Director",
      clientCompany: "Tech Solutions Inc",
      logoPath: "/Hero-img.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div>
            <h2 className={styles.title}>Our Testimonial</h2>
            <p className={styles.subtitle}>A SYMPHONY OF SATISFIED VOICES!</p>
          </div>
          <div className={styles.quoteMarkLarge}>&ldquo;</div>
        </div>

        <div className={styles.rightContent}>
          <h3 className={styles.quoteHeader}>{currentTestimonial.header}</h3>
          <p className={styles.quoteText}>{currentTestimonial.text}</p>
          <div className={styles.quoteMarkSmall}>&rdquo;</div>

          <div className={styles.divider}></div>

          <div className={styles.clientInfo}>
            <div className={styles.clientDetails}>
              <div
                style={{ position: "relative", width: "120px", height: "40px" }}
              >
                <Image
                  src={currentTestimonial.logoPath}
                  alt={currentTestimonial.clientName}
                  fill
                  className={styles.clientLogo}
                  sizes="(max-width: 768px) 100px, 120px"
                />
              </div>
              <div>
                <h4 className={styles.clientName}>
                  {currentTestimonial.clientName}
                </h4>
                <p className={styles.clientCompany}>
                  {currentTestimonial.clientCompany}
                </p>
              </div>
            </div>

            <div className={styles.navigation}>
              <button
                className={styles.navBtn}
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>

              <span className={styles.navIndicator}>
                {currentIndex + 1} / {testimonials.length}
              </span>

              <button
                className={styles.navBtn}
                onClick={handleNext}
                disabled={currentIndex === testimonials.length - 1}
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
