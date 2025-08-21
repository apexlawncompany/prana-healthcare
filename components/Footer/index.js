// components/Footer.jsx
"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import { Inter } from "next/font/google";
import Image from "next/image";

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
      {/* <div className={styles.overlay}></div> */}

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
        <div className={`${styles.columnServices}`}>
          <h3 className={`font-overlock`}>Services</h3>
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
        <div className={styles.columnLocations}>
          <h3 className={`font-overlock`}>Locations</h3>
          <ul>
            <li>
              <strong>Fayetteville Clinic</strong>
              <Link href="https://maps.app.goo.gl/rNvvjaDjLy2ALfLS7" target="_blank">
                <span className={styles.link}>
                  <Image
                    src="/icons/location-pin.png"
                    alt="Location pin"
                    width={16}
                    height={16}
                  />
                  <span className={styles.underlineText}>
                    200 Forsythe St, Fayetteville, NC 28303
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <strong>Sanford Clinic</strong>
              <Link href="https://maps.app.goo.gl/U85iwW88X512Kr8w9" target="_blank">
                <span className={styles.link}>
                  <Image
                    src="/icons/location-pin.png"
                    alt="Location pin"
                    width={16}
                    height={16}
                  />
                  <span className={styles.underlineText}>
                    4546 NC-87, Sanford, NC 27332, United States
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <strong>Raleigh Clinic</strong>
              <Link href="https://maps.app.goo.gl/9NJgzDFymnNG5xCk7" target="_blank">
                <span className={styles.link}>
                  <Image
                    src="/icons/location-pin.png"
                    alt="Location pin"
                    width={16}
                    height={16}
                  />
                  <span className={styles.underlineText}>
                    Inside Triangle Sinus Center, 3906 Wake Forest Road,
                    Raleigh, NC 27609
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className={styles.columnSocials}>
          <h3 className={`font-overlock`}>Connect</h3>
          <div className={styles.socials}>
            <Link href="https://www.facebook.com/PranaNC/" target="_blank">
              <Image
                src="/icons/facebook (1).png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link href="/contact">
              <Image
                src="/icons/tik-tok.png"
                alt="Tik Tok"
                width={20}
                height={20}
              />
            </Link>
            <Link href="/contact">
              <Image
                src="/icons/youtube.png"
                alt="You Tube"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.instagram.com/prana.healthcare/"
              target="_blank"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div style={{margin:"1.5rem 0"}}>
            <Link href="tel:9108247619">
              <span className={styles.link}>
                <Image
                  src="/icons/call.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />{" "}
                <span className={styles.underlineText}>(910) 824-7619</span>
              </span>
            </Link>

            <Link href="mailto:info@prana.healthcare">
              <span className={styles.link}>
                <Image
                  src="/icons/email.png"
                  alt="Email"
                  width={16}
                  height={16}
                />{" "}
                <span className={styles.underlineText}>
                  info@prana.healthcare
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={`${styles.bottom} ${inter.className}`}>
        <p>©2025. Prana Health. All rights reserved | Powered by <Link href="https://apexship.net" target="_blank">Apexship</Link></p>
        <Link href="/privacy" className={styles.privacy}>Privacy Policy</Link>
      </div>
    </footer>
  );
}
