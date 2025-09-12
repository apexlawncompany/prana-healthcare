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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.headerArea} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`${styles.header} ${scrolled ? styles.shrink : ""}`}>
        {/* Hamburger for Mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/prana-logo.png"
            alt="Prana Health Logo"
            width={200}
            height={70}
            className={styles.logoImg}
          />
        </div>

        {/* Desktop Nav (Unchanged) */}
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

          <Link href="https://www.onpatient.com/login" className={styles.link} target="_blank" rel="noopener noreferrer">
            Patient Portal
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
          <Link href="/blogs" className={styles.link}>
            Blogs
          </Link>
          <Link href="#" className={styles.link}>
            Careers
          </Link>
        </nav>

        {/* CTA Button (Desktop Only) */}
        <Link href="/appointment" className={styles.button}>
          Request An Appointment
        </Link>
      </div>

      {/* Side Menu */}
      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>

        {/* Mobile Dropdown for Services */}
        <div>
          <p
            onClick={() => setShowServices(!showServices)}
            className={styles.mobileDropdownTitle}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            Services{" "}
            <span
              style={{
                marginLeft: 8,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Image
                src={showServices ? "/icons/up-arrow.png" : "/icons/down.png"}
                alt={showServices ? "Collapse" : "Expand"}
                width={16}
                height={16}
                style={{ verticalAlign: "middle" }}
              />
            </span>
          </p>
          {showServices && (
            <div className={styles.mobileDropdownMenu}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Dropdown for Clinical Trials */}
        <div>
          <p
            onClick={() => setShowTrials(!showTrials)}
            className={styles.mobileDropdownTitle}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            Clinical Trials
            <span
              style={{
                marginLeft: 8,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Image
                src={showTrials ? "/icons/up-arrow.png" : "/icons/down.png"}
                alt={showTrials ? "Collapse" : "Expand"}
                width={16}
                height={16}
                style={{ verticalAlign: "middle" }}
              />
            </span>
          </p>
          {showTrials && (
            <div className={styles.mobileDropdownMenu}>
              {clinicalTrials.map((trial, index) => (
                <Link
                  key={index}
                  href={trial.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {trial.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/patient-portal" onClick={() => setIsMenuOpen(false)}>
          Patient Portal
        </Link>
        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact Us
        </Link>
        <Link href="/blogs" onClick={() => setIsMenuOpen(false)}>
          Blogs
        </Link>
      </div>
    </header>
  );
}
