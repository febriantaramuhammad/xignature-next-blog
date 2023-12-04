import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/signature.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        {/* <Link href="/">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        </Link> */}
        <h1>Penerapan Tanda Tangan Digital dalam Bisnis</h1>
        <p className={styles.desc}>
          Penerapan tanda tangan digital dalam bisnis merupakan langkah penting
          untuk meningkatkan efisiensi, keamanan, dan kenyamanan dalam proses
          transaksi elektronik. Tanda tangan digital memberikan legalitas dan
          otentikasi yang setara dengan tanda tangan konvensional, tetapi dengan
          kelebihan keamanan yang lebih tinggi. Berikut adalah beberapa cara di
          mana tanda tangan digital dapat diterapkan dalam konteks bisnis:
          <Link href="/" className={styles.link}>
            Pelajari selengkapnya
          </Link>
        </p>
        <div className={styles.blog_info}>
          <span className={styles.author}>
            BY <b className={styles.bold}>Xignature</b>
          </span>
          <span className={styles.date}>08 nov 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
