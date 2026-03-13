import React from "react";
import styles from "./services.module.css";

const ServiceCard = ({ title, description, icon, link = "#" }) => {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.cardIcon}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>
        {description}
      </p>
      <span className={styles.cardLink}>
        Learn More
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
    </a>
  );
};

export default ServiceCard;
