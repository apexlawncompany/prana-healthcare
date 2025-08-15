"use client";

import styles from "./contact.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Overlock, Noto_Serif } from "next/font/google";
import Locations from "@/components/Locations";
import SendMessage from "@/components/SendMessage";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function ContactUS() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/appointment/get-In-Touch-Banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <h1 className={`${styles.heroTitle} ${overlock.className}`}>
            Get In Touch
          </h1>
        </div>
      </section>
      <Locations />
      <SendMessage />

    </main>
  );
}
