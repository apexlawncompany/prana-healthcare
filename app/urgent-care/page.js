"use client";

import styles from "./urgentcare.module.css";
import Image from "next/image";
import Link from "next/link";
import { Overlock } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function UrgentCare() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/urgentCare/urgentcare-banner.jpg"
          alt="Urgentcare Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              <span className={styles.highlight}>Urgent</span> Care
            </h1>

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
                  <p style={{ color: "white" }}>(910)-824-7619</p>
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
                  <Link href="#" style={{ color: "white" }}>
                    Contact us for an appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionHeader}>
          <h1 className={overlock.className}>Urgent Care</h1>
          <p>
            Medical needs for an illness refers to medical attention that is
            needed for an illness or injury that is not serious enough to
            warrant a visit to an emergency room, but still requires prompt
            attention. Conditions that may be treated in an urgent care center
            include minor cuts and burns, sprains and strains, fever or flu-like
            symptoms, and mild asthma attacks. Urgent care centers are typically
            open longer hours than primary care clinics and are often able to
            see patients on a walk-in basis. They are also able to handle a wide
            range of medical conditions, and are staffed by medical
            professionals such as physician assistants and nurse practitioners,
            as well as physicians.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageSide}>
            <Image
              src="/urgentCare/urgentcare.jpg"
              alt="urgentcare"
              width={570}
              height={350}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <Accordion
              title="Urgent Care Services"
              content={
                <>
                  <p>At our Sanford office</p>
                  <ul>
                    <li>
                      Diagnosis and treatment of minor illnesses, such as colds,
                      flu, and infections.
                    </li>
                    <li>
                      Treatment of minor injuries, such as cuts, sprains, and
                      strains
                    </li>
                    <li>Physicals and immunizations</li>
                    <li>Stitching up of simple lacerations</li>
                    <li>Treatment of minor burns and rashes</li>
                    <li>Management of minor asthma and allergic reactions</li>
                    <li>Treatment of minor broken bones and fractures</li>
                    <li>Treatment of minor back and neck injuries</li>
                    <li>Treatment of minor eye injuries</li>
                  </ul>
                  <p>
                    Prana health is also able to offer tele heath urgent care
                    for patients who prefer to be treated from the comfort of
                    their own home. Our in person Urgent care services are
                    coming soon to our new location in Sanford at 4546 Hwy 87
                    South, Sanford, NC 27332.
                  </p>
                </>
              }
            />
            <Accordion
              title="Medication Specific"
              content={
                <>
                  <p>
                    Say if you have difficulty getting medications refilled by
                    your regular doctor, we can refill them (excluding
                    psychiatric medications and Controlled substance)
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
