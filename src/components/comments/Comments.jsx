import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Komentar</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Tulis Komentar..." className={styles.input} />
          <button className={styles.button}>Kirim</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.images}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>14.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            aliquam quia quam voluptatem, fuga consequuntur est? Accusamus
            repellat vitae reiciendis, reprehenderit exercitationem sapiente sit
            voluptas iste accusantium quasi nisi voluptates.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.images}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>14.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            aliquam quia quam voluptatem, fuga consequuntur est? Accusamus
            repellat vitae reiciendis, reprehenderit exercitationem sapiente sit
            voluptas iste accusantium quasi nisi voluptates.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.images}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>14.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            aliquam quia quam voluptatem, fuga consequuntur est? Accusamus
            repellat vitae reiciendis, reprehenderit exercitationem sapiente sit
            voluptas iste accusantium quasi nisi voluptates.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.images}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>14.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            aliquam quia quam voluptatem, fuga consequuntur est? Accusamus
            repellat vitae reiciendis, reprehenderit exercitationem sapiente sit
            voluptas iste accusantium quasi nisi voluptates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
