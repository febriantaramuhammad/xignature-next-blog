import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Image src={"/logo.png"} alt="logo" width={161} height={44} />
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/article" className={styles.link}>
          Article
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
      {/* <button href="/" className={styles.try}>
        Coba Gratis
      </button> */}
    </div>
  );
};

export default Navbar;
