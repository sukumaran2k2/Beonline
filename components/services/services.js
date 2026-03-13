import React from "react";
import styles from "./services.module.css";
import ServiceCard from "./service-card";

const servicesData = [
  {
    title: "SEO",
    description: "We improve your website's ranking, increase organic traffic, and build long-term visibility through technical excellence, strategic content, and continuous optimization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    link: "#",
  },
  {
    title: "Performance Marketing",
    description: "Our team increases your ROI by creating results-based paid advertising campaigns on Google, Meta, and other platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    ),
    link: "#",
  },
  {
    title: "Website Development",
    description: "At Bee Online, we offer customised website development options that are suitable for your business needs and goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    link: "#",
  },
  {
    title: "Website Maintenance",
    description: "We take care of security updates, backups, monitoring, and fixes in order to maintain your online presence that operates without interruption at all 24/7.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-1.4-1.4a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77z"></path>
      </svg>
    ),
    link: "#",
  },
  {
    title: "UI/UX Design",
    description: "We deliver user-centered design that transforms customer journeys, improves engagement, and improves conversion rates across your entire digital ecosystem.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    link: "#",
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
    
        <div className={styles.introBox}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>What We Offer</span>
           
            <svg
              className={styles.titleHighlight}
              viewBox="0 0 160 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", bottom: "-14px", left: "120px" }}
            >
              <path
                d="M2 15C45.5 2.5 108 -2.5 158 12"
                stroke="#FAB713"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className={styles.description}>
            &quot;Bee Online delivers tailored digital marketing, MLM
            strategies, website development and AI/ML-driven campaigns for your
            business.&quot;
          </p>
          <button className={styles.talkBtn}>
            Let&apos;s Talk
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
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
