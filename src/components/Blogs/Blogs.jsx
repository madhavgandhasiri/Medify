import React from "react";
import styles from "./Blogs.module.css";
import detox from "../../assets/detox.png";
import rebecca from "../../assets/rebecca.jpg";

function Blogs() {
  const blogInf = [
    {
      image: detox,
      topic: "Medical",
      date: "March 31, 2025",
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      author: "Rebecca Lee",
      authorImg: rebecca,
    },
    {
      image: detox,
      topic: "Medical",
      date: "March 31, 2025",
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      author: "Rebecca Lee",
      authorImg: rebecca,
    },
    {
      image: detox,
      topic: "Medical",
      date: "March 31, 2025",
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      author: "Rebecca Lee",
      authorImg: rebecca,
    }
  ];

  return (
    <div className={styles.BlogContainer}>
      <p style={{
        fontWeight:"600",
        fontSize :"1rem",
        color : "#2AA7FF"
      }}>Blog & News</p>
      <h2>Read Our Latest News</h2>
      <div className={styles.blogCardContainer}>
      { blogInf.map((blog, index)=>(
          <div key={index} className={styles.blogCard}>
            <img src={blog.image} alt="blogImg" />
            <div className={styles.blogInfDiv}>
            <p className={styles.topic}>{blog.topic} | {blog.date}</p>
            <p className={styles.title}>{blog.title}</p>
            <div className={styles.authorImgDiv}>
              <img src={blog.authorImg} alt="author-img" />
              <p>{blog.author}</p>
            </div>
            </div>
          </div>
        ))
      }
      </div>
      <div></div>
    </div>
  );
}
export default Blogs;
