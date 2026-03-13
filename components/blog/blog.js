"use client";
import React from "react";
import Image from "next/image";
import styles from "./blog.module.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "The One Part of the Vision Pro That Apple Doesn't Want You to See",
      tags: ["Technology"],
      imgPath: "/blogs/blog-1.png", 
    },
    {
      id: 2,
      title: "Intel's CEO Says AI Is the Key to the Company's Comeback",
      tags: ["Technology", "Product"],
      imgPath: "/blogs/blog-2.png", 
    },
    {
      id: 3,
      title: "Polar ID Is the Face ID Rival for Android Phones.",
      tags: ["Security"],
      imgPath: "/blogs/blog-3.png", 
    },
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Latest Blog and News</h2>
        <div className={styles.headerRight}>
          <p className={styles.subtitle}>
            Delve into real-world examples where our Technology Solutions,
            Consulting and Strategy,
          </p>
          <div className={styles.navigation}>
            <button className={styles.navBtn} aria-label="Previous">
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
            <button className={styles.navBtn} aria-label="Next">
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

      <div className={styles.cardsContainer}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={blog.imgPath}
                alt={blog.title}
                fill
                className={styles.blogImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className={styles.tagsWrapper}>
                {blog.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className={styles.cardTitle}>{blog.title}</h3>
            <div className={styles.readMore}>
              Read More
              <svg
                width="16"
                height="16"
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
