"use client";

import styles from "./primarycare.module.css";
import Image from "next/image";
import Link from "next/link";
import { Overlock } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function PrimaryCare() {
  return (
    <main className={styles.primaryCare}>
      <section className={styles.hero}>
        <Image
          src="/primaryCare/primarycare-doctor-banner.png"
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
              <span className={styles.highlight}>Primary</span> Care
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

      <section className={styles.collageSection}>
        <div className={styles.collageContent}>
          <div className={styles.collageImageWrapper}>
            <Image
              src="/primaryCare/primacrcare-main-img.png"
              alt="Primary care collage"
              width={600}
              height={600}
              className={styles.collageImage}
            />
          </div>
          <div className={styles.collageText}>
            <h2 className={`${styles.collageTitle} ${overlock.className}`}>
              Primary Care
            </h2>

            <p className={styles.collageIntro}>
              Prana Health provides professionals with a wide skill set and
              experience to handle your primary and specialty medical care under
              one roof. From sleep problems, allergy issues, weight management,
              breathing issues, and more. Our board-certified providers offer
              the care you deserve.
            </p>

            <ul className={styles.collageList}>
              <li>
                <strong>Primary Care:</strong> At our Sanford location, Primary
                Care services are available at the new location: 4546 US Hwy
                South, Sanford, NC 27332. Board-certified Family Physician,
                Internal Medicine physician, and a Physician Assistant are
                available to take care of your primary care needs.
              </li>
              <li>
                <strong>Medicare & Medicaid:</strong> Prana Health accepts
                traditional Medicare, Medicaid and all major Managed Medicare
                and Medicaid plans with few exceptions. Out-of-network benefits
                are available for many of those plans which we do not
                participate in.
              </li>
              <li>
                <strong>Accepting New Patients:</strong> Prana Health is
                accepting new patients for its primary care and specialty care
                services with same day appointments available & walk-ins
                accepted once you see a provider.
              </li>
              <li>
                <strong>Short Waiting Time For Appointments:</strong> You should
                be able to get a new in person primary care appointment within a
                week and a specialty appointment within 2 weeks. We can
                accommodate patients via telehealth for urgent appointments.
              </li>
              <li>
                <strong>Same Day:</strong> Same day appointments, Telehealth
                appointments, Medication Refill Service Available. If you are
                unable to get your regular medication refills from your primary
                care provider for one reason or the other, we can help. We
                cannot fill controlled substances, psychiatric medications and
                specialized medications through this service.
              </li>
              <li>
                <strong>Suboxone Treatment:</strong>
                Prana Health is now accepting patients for suboxone treatment.
                They must be established or willing to establish with a
                behavioral health counsellor to be eligible to participate in
                our Suboxone clinic.
              </li>
              <li>
                <strong>Suboxone Treatment:</strong>
                Prana Health is now accepting patients for suboxone treatment.
                They must be established or willing to establish with a
                behavioral health counsellor to be eligible to participate in
                our Suboxone clinic.
              </li>
              <li>
                <strong>Prescription or Medication Refills:</strong>Convenient
                and Timely refills for ongoing medications, managed directly by
                our providers to ensure continuity of care and your well-being.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
