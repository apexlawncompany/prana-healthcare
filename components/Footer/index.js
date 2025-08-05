// components/Footer.jsx
"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import { Inter } from "next/font/google";
import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{
        backgroundImage: 'url("/footer-bg.png")',
        backgroundSize: "cover",
      }}
    >
      <div className={styles.overlay}></div>

      <div className={`${styles.content} ${inter.className}`}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Image
            src="/prana-logo.png"
            alt="Prana Health Logo"
            width={250}
            height={90}
          />
        </div>

        {/* Services */}
        <div className={`${styles.column}`}>
          <h3>Services</h3>
          <ul>
            <li>
              <Link href="/primary-care">Primary Care</Link>
            </li>
            <li>
              <Link href="/urgent-care">Urgent Care</Link>
            </li>
            <li>
              <Link href="/allergy-testing-treatment">
                Allergy Testing & Treatment
              </Link>
            </li>
            <li>
              <Link href="/pulmonary-services">Pulmonary Services</Link>
            </li>
            <li>
              <Link href="/pediatric-sleep-services">
                Pediatric Sleep Services
              </Link>
            </li>
            <li>
              <Link href="/adult-sleep-disorders">Adult Sleep Disorders</Link>
            </li>
            <li>
              <Link href="/pediatric-adult-ashtma">Pediatric Adult Asthma</Link>
            </li>
            <li>
              <Link href="/long-covid-evaluations">Long-Covid Evaluation</Link>
            </li>
            <li>
              <Link href="/sleep-disorders-in-pregnancy">
                Sleep Disorders in Pregnancy
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className={styles.column}>
          <h3>Locations</h3>
          <ul>
            <li>
              <Link href="/locations/fayetteville">
                <strong>Fayetteville Clinic</strong>
                <br />
                <span className={styles.locationLine}>
                  <Image
                    src="/location-pin.png"
                    alt="Location pin"
                    width={16}
                    height={16}
                  />
                  200 Forsythe St, Fayetteville, NC 28303
                </span>
              </Link>
            </li>

            <li>
              <Link href="/locations/sanford">
                <strong>Sanford Clinic</strong>
                <br />
                <span className={styles.locationLine}>
                  <Image
                    src="/location-pin.png"
                    alt="Location pin"
                    width={16}
                    height={16}
                  />
                  4546 NC-87, Sanford, NC 27332
                </span>
              </Link>
            </li>

            <li>
              <Link href="/locations/raleigh">
                <strong>Raleigh Clinic</strong>
                <br />
                <span className={styles.locationLine}>
                  <Image
                    src="/location-pin.png"
                    alt="Location pin"
                    width={16}
                    height={16}
                  />
                  3906 Wake Forest Rd, Raleigh, NC 27609
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className={styles.column}>
          <h3>Connect</h3>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank">
              <Image
                src="/facebook (1).png"
                alt="Facebook"
                width={16}
                height={16}
              />
            </a>
            <a href="https://tiktok.com" target="_blank">
              <Image src="/tik-tok.png" alt="Facebook" width={16} height={16} />
            </a>
            <a href="https://youtube.com" target="_blank">
              <Image src="/youtube.png" alt="Facebook" width={16} height={16} />
            </a>
            <a href="https://instagram.com" target="_blank">
              <Image
                src="/instagram.png"
                alt="Facebook"
                width={16}
                height={16}
              />
            </a>
          </div>
          <div className={styles.contact}>
            <p>
              <Image src="/call.png" alt="Facebook" width={16} height={16} />{" "}
              (910) 824-7619
            </p>
            <p>
              <Image src="/email.png" alt="Facebook" width={16} height={16} />{" "}
              info@prana.healthcare
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={`${styles.bottom} ${inter.className}`}>
        <p>©2025. Prana Health. All rights reserved | Powered by Apexship</p>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
