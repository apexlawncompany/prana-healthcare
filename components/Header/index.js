"use client";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const services = [
  { title: "Primary Care", link: "/primary-care" },
  { title: "Urgent Care", link: "/urgent-care" },
  { title: "Allergy Testing & Treatment", link: "/allergy-testing-treatment" },
  { title: "Pulmonary Services", link: "/pulmonary-services" },
  { title: "Pediatric Sleep Services", link: "/pediatric-sleep-services" },
  { title: "Adult Sleep Disorders", link: "/adult-sleep-disorders" },
  { title: "Adult & Pediatric Asthama", link: "/pediatric-adult-ashtma" },
  { title: "Long-Covid Evaluations", link: "/long-covid-evaluations" },
  {
    title: "Sleep Disorders In Pregnant Women",
    link: "/sleep-disorders-in-pregnancy",
  },
];

const clinicalTrials = [
  { title: "Ongoing Clinical Trials", link: "/clinical-trials/long-covid" },
  { title: "Future Clinical Trials", link: "/clinical-trials/asthma" },
];

export default function Header() {
  const [showServices, setShowServices] = useState(false);
  const [showTrials, setShowTrials] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.headerArea} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`${styles.header} ${scrolled ? styles.shrink : ""}`}>
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

          <div
            className={styles.dropdown}
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <Link href="/services" className={styles.link}>
              Services
            </Link>
            {showServices && (
              <div className={styles.menu}>
                {services.map((service, index) => (
                  <div key={index}>
                    <Link href={service.link} className={styles.menuItem}>
                      {service.title}
                    </Link>
                    {index < services.length - 1 && (
                      <hr className={styles.divider} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setShowTrials(true)}
            onMouseLeave={() => setShowTrials(false)}
          >
            <Link href="/clinical-trials" className={styles.link}>
              Clinical Trials
            </Link>
            {showTrials && (
              <div className={styles.menu}>
                {clinicalTrials.map((trial, index) => (
                  <div key={index}>
                    <Link href={trial.link} className={styles.menuItem}>
                      {trial.title}
                    </Link>
                    {index < clinicalTrials.length - 1 && (
                      <hr className={styles.divider} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

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
      </div>
    </header>
  );
}
