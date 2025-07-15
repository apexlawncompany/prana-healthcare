"use client";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/prana-logo.png"
          alt="Prana Health Logo"
          width={250}
          height={90}
        />
      </div>

      <nav className={`${styles.nav} ${inter.className}`}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/services" className={styles.link}>
          Services
        </Link>
        <Link href="/clinical-trials" className={styles.link}>
          Clinical Trials
        </Link>
        <Link href="/patient-portal" className={styles.link}>
          Patient Portal
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Us
        </Link>
        <Link href="/blogs" className={styles.link}>
          Blogs
        </Link>
      </nav>

      <Link href="/appointment" className={styles.button}>
        Request An Appointment
      </Link>
    </header>
  );
}
