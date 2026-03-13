"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./impacts.module.css";


export const ImpactCard = ({ title, imgPath }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={imgPath}
          alt={title}
          fill
          className={styles.cardImage}
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <div className={styles.cardContent}>
       
        <span className={styles.radioIcon}></span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </div>
  );
};

const Impacts = () => {
  const containerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const impactData = [
    {
      id: 1,
      title: "Traffic Growth",
      imgPath: "/impacts/Traffic-growth.jpg",
    },
    {
      id: 2,
      title: "Lead quality",
      imgPath: "/impacts/conversion-rate-improvement.jpg",
    },
    {
      id: 3,
      title: "Cost per acquisition",
      imgPath: "/impacts/cost-per-acquisition.jpg",
    },
    {
      id: 4,
      title: "Conversion rate improvement",
      imgPath: "/impacts/conversion-rate-improvement.jpg",
    },
    {
      id: 5,
      title: "Customer engagement",
      imgPath: "/impacts/customer-engagement.jpg",
    },
  ];

  return (
    <section className={styles.impactsSection}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Impact On Clients
            <svg
              className={styles.titleHighlight}
              viewBox="0 0 180 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 15C45.5 2.5 128 -2.5 178 12"
                stroke="#FAB713"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>
        <p className={styles.subtitle}>
          Your Growth. Your KPIs. Our Commitment.
        </p>
      </div>

      <div
        className={`${styles.cardsContainer} ${isDown ? styles.activeDrag : ""}`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {impactData.map((data) => (
          <ImpactCard key={data.id} title={data.title} imgPath={data.imgPath} />
        ))}
      </div>
    </section>
  );
};

export default Impacts;
