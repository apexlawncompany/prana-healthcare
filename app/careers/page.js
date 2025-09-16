"use client";

import styles from "./careers.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function Careers() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/careers_banner.jpg"
          alt="Services Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <h1 className={`${styles.heroTitle} ${overlock.className}`}>
            Careers
          </h1>
        </div>
      </section>
    </main>
  );
}
