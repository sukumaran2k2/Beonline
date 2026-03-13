import React from "react";
import Image from "next/image";
import styles from "./partners.module.css";

const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      imgPath: "/Tech-partners/microsoft.png",
      className: styles.microsoftLogo,
    },
    {
      name: "Apple",
      imgPath: "/Tech-partners/apple.png",
      className: styles.appleLogo,
    },
    {
      name: "Google Partner",
      imgPath: "/Tech-partners/google.png",
      className: styles.googleLogo,
    },
    {
      name: "Meta",
      imgPath: "/Tech-partners/meta.png",
      className: styles.metaLogo,
    },
    {
      name: "AWS",
      imgPath: "/Tech-partners/aws.png",
      className: styles.awsLogo,
    },
  ];

  const tools = [
    {
      name: "SEMRush",
      imgPath: "/tool/semrush.png",
      className: styles.scaleLarge,
    },
    {
      name: "ahrefs",
      imgPath: "/tool/ahrefs.png",
      className: styles.scaleExtraLarge,
    },
    {
      name: "Looker",
      imgPath: "/tool/looker.png",
      className: styles.scaleSmall,
    },
    {
      name: "Meta",
      imgPath: "/tool/meta.png",
      className: styles.scaleHuge,
    },
    {
      name: "Webflow",
      imgPath: "/tool/webflow.png",
      className: styles.scaleHuge,
    },
    { name: "Figma", imgPath: "/tool/figma.png", className: styles.scaleLarge },
    {
      name: "Shopify",
      imgPath: "/tool/shopify.png",
      className: styles.scaleExtraLarge,
    },
    {
      name: "Zapier",
      imgPath: "/tool/zapier.png",
      className: styles.scaleLarge,
    },
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersHeader}>
        <h2 className={styles.partnersTitle}>
          Our <span className={styles.highlightText}>Technology</span> Partners
        </h2>
      </div>

      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.partnerCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={partner.imgPath}
                alt={partner.name}
                fill
                className={`${styles.partnerLogo} ${partner.className || ""}`}
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.toolsSection}>
        <h3 className={styles.toolsTitle}>Licensed + Partnered Tools</h3>

        <div className={styles.toolsGrid}>
          {tools.map((tool, index) => (
            <div key={index} className={styles.toolCard}>
              <div className={`${styles.imageWrapper} ${tool.className || ""}`}>
                <Image
                  src={tool.imgPath}
                  alt={tool.name}
                  fill
                  className={styles.toolLogo}
                  sizes="(max-width: 768px) 50vw, 150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
