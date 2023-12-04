"use client";
import Image from "next/image";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  // console.log(data, status);

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src="/logo.png"
          alt=""
          width={161}
          height={44}
          className={styles.logoLogin}
        />
        <p className={styles.account}>Sign In With Your Xignature Account</p>
        <div
          className={styles.socialButtonGoogle}
          onClick={() => signIn("google")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
