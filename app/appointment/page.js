"use client";

import styles from "./appointment.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import { Noto_Serif } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["500"] });

export default function Appointment() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/appointment/appointment-doctor.jpg"
          alt="Doctor Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Request an Appointment
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          {/* Left Form Section */}
          <div className={styles.formSection}>
            <h2>Request an Appointment</h2>
            <br />
            <form>
              <label>
                Choose Your Service <span style={{ color: "red" }}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} required>
                  <option value="">— Select —</option>
                  <option value="primary">Primary care</option>
                  <option value="pulmonary">Pulmonary Services</option>
                  <option value="sleep">Sleep Services</option>
                  <option value="longcovid">Long-covid</option>
                  <option value="pediatricSleep">
                    Pediatric Sleep Services
                  </option>
                  <option value="asthma">Pediatric Asthma</option>
                </select>
              </div>

              <label>Doctor</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} required>
                  <option value="">— Any —</option>
                  <option value="Rahul Kakkar">Dr. Rahul Kakkar</option>
                  <option value="Alfred Bunao">Dr. Alfred Bunao</option>
                </select>
              </div>

              <label>Location</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} required>
                  <option value="">— Any —</option>
                  <option value="Fayetteville">
                    200 Forsythe St., Fayetteville, NC 28303
                  </option>
                  <option value="Sanford">
                    4546 NC-87, Sanford, NC 27332, United States
                  </option>
                </select>
              </div>

              <button type="submit">Next</button>
            </form>
          </div>

          {/* Right Clinic Info */}
          <div className={styles.infoSection}>
            <h1 className={`${styles.brand} ${overlock.className}`}>
              Prana Health
            </h1>
            <br />
            <p className={`${styles.subtitle} ${noto_serif.className}`}>
              Dedicated To Your Health & Wellness
            </p>

            <div className={styles.address}>
              <div className={styles.addressBlock}>
                <p style={{ color: "#7f7f7f" }}>
                  200 Forsythe St.,
                  <br />
                  Fayetteville, NC 28303
                </p>
                <p>
                  <Image
                    src="/icons/call.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />{" "}
                  <span className={styles.phoneNumber}>(910) 824-7619</span>
                </p>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.addressBlock}>
                <p style={{ color: "#7f7f7f" }}>
                  4546 NC-87, Sanford, NC 27332 <br /> United States
                </p>
                <p>
                  <Image
                    src="/icons/call.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />{" "}
                  <span className={styles.phoneNumber}>(919) 935-0773</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
