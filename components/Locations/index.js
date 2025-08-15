"use client";

import styles from "./locations.module.css";
import Image from "next/image";

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
              <p className={styles.address}>
                {loc.address}
              </p>
              <p className={styles.phone}>
               {loc.phone}
              </p>
              <p className={styles.mail}>
               {loc.mail}
              </p>
              <p className={styles.timings}>
               {loc.timings}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
