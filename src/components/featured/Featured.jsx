import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>
        Your<b> Digital Trust </b>Solution
      </h1> */}
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/categories-img.jpg"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Membongkar Mitos dan Memahami Esensi Tanda Tangan Digital dalam
            Bisnis Modern
          </h1>
          <p className={styles.postDesc}>
            Keberadaan tanda tangan digital tidak lagi sekadar sebagai tren
            teknologi, tetapi menjadi esensi yang melandasi efisiensi,
            kecepatan, dan keamanan dalam transaksi bisnis. Artikel ini akan
            membongkar mitos yang mengelilingi tanda tangan digital, membawa
            pemahaman yang lebih mendalam tentang betapa pentingnya teknologi
            ini dalam dunia bisnis modern...
            <Link href="/" className={styles.read}>
              Pelajari selengkapnya
            </Link>
          </p>
          {/* <button className={styles.button}>Read More</button> */}
          <div className={styles.blog_info}>
            <span className={styles.author}>
              BY <b className={styles.bold}>Xignature</b>
            </span>
            <span className={styles.date}>08 nov 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
