import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={161} height={44} />
        </div>
        <p className={styles.desc}>
          Generali Tower Grand Rubina Business Park, 20th Floor,
          <br /> Jalan HR. Rasuna Said Kav. C-22 Setia Budi, Jakarta Selatan,
          <br />
          Indonesia - 12940
        </p>
        <span className={styles.icons}>
          &copy; 2023 Xignature - PT Digital Tandatangan Asli. All Right
          Reserved
        </span>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Produk</span>
          <Link href="/">Digital Certification</Link>
          <Link href="/">Xignature Sign</Link>
          <Link href="/">E-Meterai</Link>
          <Link href="/">Xignature Key</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Sumber Daya</span>
          <Link href="/">Verifikasi PDF</Link>
          <Link href="/">Repository</Link>
          <Link href="/">Dokumentasi</Link>
          <Link href="/">FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
