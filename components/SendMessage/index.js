"use client";

import styles from "./message.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import { Noto_Serif } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["500"] });

export default function SendMessage() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.content}>
        {/* Left Clinic Info */}
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

        {/* Right Form Section */}
        <div className={styles.formSection}>
          <h2 className={`${styles.formHeading} ${overlock.className}`}>
            Send Us Message
          </h2>
          <form className={styles.form}>
            <input type="text" placeholder="Your name*" required />
            <input type="email" placeholder="Your email*" required />
            <input type="tel" placeholder="Phone number*" required />
            <textarea placeholder="Your message"></textarea>
            <input type="text" placeholder="15+5=?" required />
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
