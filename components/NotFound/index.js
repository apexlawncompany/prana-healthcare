import React from "react";
import styles from "./notFound.module.css"; // Scoped CSS module// Your background image path
import { Overlock } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

const NotFound = () => {
  return (
    <div
      className={styles.errorPage}
      style={{ backgroundImage: "url('/error/error-page-bg.jpg')" }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.errorContent}>
        <h2>We are sorry, page not found.</h2>
        <h1 className={`${overlock.className}`}>
          Error <span>404</span>.
        </h1>
        <Link href="/" className={styles.homeBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
