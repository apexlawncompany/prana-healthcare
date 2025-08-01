"use client";

import styles from "./pregnancySleep.module.css";
import Image from "next/image";
import Link from "next/link";
import { Overlock } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function PregnancySleepDisorders() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/primaryCare/pregnancy-banner.png"
          alt="pregnancy Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Sleep Disorders in{" "}
              <span className={styles.highlight}>Pregnancy</span>
            </h1>
            <br />
            <p>
              Prana Health has a distinguished history of effectively addressing
              sleep disorders during pregnancy
            </p>

            <div className={styles.contactOptions}>
              <div className={styles.call}>
                <p style={{ textAlign: "left" }}>On A Call Appointment</p>

                <div className={styles.callDetails}>
                  <Image
                    src="/icons/phone-call.png"
                    alt="Phone Icon"
                    width={48}
                    height={48}
                  />
                  <p>(910)-824-7619</p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.onlieSchedule}>
                <p style={{ textAlign: "left" }}>Online Schedule</p>

                <div className={styles.callDetails}>
                  <Image
                    src="/icons/calendar-check.png"
                    alt="Calendar Icon"
                    width={48}
                    height={48}
                  />
                  <Link href="#">Contact us for an appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.infoSection}
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Blurred Background Layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/primaryCare/pregnancy-section-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px) brightness(1)",
            zIndex: 0,
          }}
        />

        {/* Foreground Content */}
        <div
          className={styles.contentWrapper}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className={styles.imageSide}>
            <Image
              src="/primaryCare/Pregnancy-And-Sleep.jpeg"
              alt="Pregnancy-And-Sleep"
              width={475}
              height={320}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <h1 className={overlock.className}>
              The Adverse{" "}
              <span style={{ color: "#9c2c9c" }}>Effects of Sleep</span>{" "}
              Disorders During Pregnancy.
            </h1>
            <p>
              Sleep is essential for everyone, but for expectant mothers, it
              becomes even more critical. Lack of quality sleep can lead to:
            </p>
            <Accordion
              title="Increased Risk of Pregnancy Complications"
              content={
                <p>
                  Poor sleep is linked to gestational diabetes, preeclampsia,
                  and preterm birth.
                </p>
              }
            />
            <Accordion
              title="Heightened Stress Levels"
              content={
                <p>
                  Sleep deprivation can elevate cortisol levels, contributing to
                  anxiety and depression.
                </p>
              }
            />
            <Accordion
              title="Impact on Fetal Development"
              content={
                <p>
                  Consistent sleep issues may affect your baby’s growth and
                  development.
                </p>
              }
            />
            <Accordion
              title="Weakened Immune System"
              content={
                <p>
                  Poor sleep can reduce your body’s ability to fight infections,
                  putting both you and your baby at risk.
                </p>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
