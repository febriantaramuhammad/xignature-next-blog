import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kategori</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/hero.png"
            alt=""
            width={32}
            height={32}
            className={styles.Image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/hero.png"
            alt=""
            width={32}
            height={32}
            className={styles.Image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/hero.png"
            alt=""
            width={32}
            height={32}
            className={styles.Image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/hero.png"
            alt=""
            width={32}
            height={32}
            className={styles.Image}
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
