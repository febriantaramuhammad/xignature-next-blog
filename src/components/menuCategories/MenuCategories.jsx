import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Tanda Tangan Digital
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Sertifikat Digital
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        E - Meterai
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Infrastruktur Kunci Publik (PKI)
      </Link>
    </div>
  );
};

export default MenuCategories;
