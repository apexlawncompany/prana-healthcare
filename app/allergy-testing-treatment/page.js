"use client";

import styles from "./allergy.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function AllergyTesting() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/allergy-banner.jpg"
          alt="Allergy Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Allergy Testing Treatment
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionHeader}>
          <h1 className={overlock.className}>What is An Allergic Reaction?</h1>
          <p>
            An allergic reaction is pollen, dust mites, molds, and pets are all
            common allergies that many suffer from. Occasionally, your body can
            mistakenly identify these as a threat. The body produces antibodies
            to try to fight off the threat and it is these antibodies that
            produce reactions. Depending on the allergen, you can have sneezing,
            swollen eyes, or a runny nose.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageSide}>
            <Image
              src="/servicesOptions/allergy.jpg"
              alt="Allergy Testing"
              width={570}
              height={350}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <Accordion
              title="How do we Test Allergies?"
              content={
                <>
                  <p>
                    At Prana Health we preform skin prick testing on both
                    pediatric and adult patients. This is the most common
                    allergy test performed. This test is simple and safe with
                    results provided within 15-20 minutes. This will give you
                    the opportunity to receive a diagnosis and management plan
                    during your appointment.
                  </p>
                </>
              }
            />
            <Accordion
              title="Full Allergy Testing and Therapy"
              content={
                <>
                  <p>Breathing and Asthma Therapy</p>
                  <p>
                    Prana Health’s staff can perform breathing tests and
                    in-house scopes, tailor an asthma education plan, and enroll
                    your child in our state-of-the-art inhaler monitoring
                    program. We monitor the need for the inhaler, we will look
                    for early signs of worsening asthma. This monitoring allows
                    us to step in quickly and adjust medications when needed.
                    Prana Health can provide pulmonary function testing starting
                    at age three as well as respiratory education with air
                    quality testing within the home.
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
