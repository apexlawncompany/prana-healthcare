"use client";

import styles from "./locations.module.css";
import Image from "next/image";
import Link from "next/link";

const locationsData = [
  {
    image: "/home/address1.jpg",
    address: "200 Forsythe St., Fayetteville, NC 28303",
    phone: "(910) 824-7619",
    mail: "info@prana.healthcare",
    timings: "Monday through Thursday 8:30-6:30, Friday 8:30-12:00",
  },
  {
    image: "/home/address2.jpg",
    address: "4546 NC-87, Sanford, NC 27332, United States",
    phone: "(919) 935-0773",
    mail: "info@prana.healthcare",
    timings: "Monday through Friday 8:30-6:30",
  },
  // add more locations here
];

export default function Locations() {
  return (
    <section className={styles.locationsSection}>
      <div className={styles.container}>
        {locationsData.map((loc, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={loc.image}
                alt={loc.address}
                width={550}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  loc.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.link}>
                  <Image
                    src="/icons/location (1).png"
                    alt="Location"
                    width={20}
                    height={20}
                    className={styles.icon}
                  />{" "}
                  <span className={`${styles.address} ${styles.underlineText}`}>
                    {loc.address}
                  </span>
                </span>
              </Link>

              <Link href={`tel:${loc.phone}`}>
                <span className={styles.link}>
                  <Image
                    src="/icons/outgoing-call.png"
                    alt="Phone"
                    width={20}
                    height={20}
                    className={styles.icon}
                  />{" "}
                  <span className={`${styles.phone} ${styles.underlineText}`}>
                    {loc.phone}
                  </span>
                </span>
              </Link>

              <Link href={`mailto:${loc.mail}`}>
                <span className={styles.link}>
                  <Image
                    src="/icons/email.png"
                    alt="Email"
                    width={20}
                    height={20}
                    className={styles.icon}
                  />{" "}
                  <span className={`${styles.mail} ${styles.underlineText}`}>
                    {loc.mail}
                  </span>
                </span>
              </Link>

              <div className={styles.item}>
                <Image
                  src="/icons/clock.png"
                  alt="Timings"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
                <p className={styles.timings}>{loc.timings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
