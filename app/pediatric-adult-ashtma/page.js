"use client";

import styles from "./asthma.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function PediatricAduleAsthma() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/pulomonary-banner.jpg"
          alt="Asthma Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Adult & Pediatric Asthma
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h1 className={overlock.className}>What Is Asthma?</h1>
            <p>
              Asthma can make breathing difficult due to inflammation in the
              airways. Children have smaller airways that can become easily
              inflamed when exposed to any triggers. Inhalation of pollen, a
              cold, allergens, exercise, or even seasons of weather can all be
              asthma triggers. Asthma interferes with day to day activities,
              sports, school, and sleep.
            </p>
            <h2 className={overlock.className}>What Are Symptoms of Asthma?</h2>
            <p>
              You or your child may experience one or more symptoms at a time
              and can mistaken asthma as allergies, a chest cold, or bronchitis.
              Some symptoms of asthma may include a nagging cough that lingers
              for more than two weeks, wheezing, shortness of breath, fatigue,
              chest congestion or tightness.
            </p>
            <p>
              Any symptom of asthma must be taken seriously or it can worsen.
              Some children grow out of their asthma, though it can continue
              into adulthood. This can eventually lead to chronic obstructive
              pulmonary disease (COPD), meaning the airways become permanently
              narrowed. With the right treatment, these symptoms can be kept
              under control.
            </p>
          </div>
          <div className={styles.imageSide}>
            <Image
              src="/servicesOptions/asthma1.webp"
              alt="Pediatric Sleep"
              width={570}
              height={350}
              className={styles.headerImage}
            />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image
              src="/servicesOptions/asthma2.png"
              alt="Pediatric Sleep"
              width={570}
              height={350}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
             <h1 className={overlock.className}>Adult & Pediatric Asthma</h1>
             <h2>There are several types of Adult & Pediatric Ashtma</h2>
            <Accordion
              title="What Causes Asthma?"
              content={
                <>
                  <p>
                    No one knows the exact cause of asthma, but there are
                    factors that play into an over sensitive immune system which
                    can cause the airways to swell. Asthma can be genetically
                    passed down through family members. Having respiratory or
                    airway infections at a young age can trigger one’s asthma.
                    Exposure to air pollution, secondhand smoke or weather
                    changes can all be ways to trigger asthma.
                  </p>
                </>
              }
            />
            <Accordion
              title="What Can Prana Health Do For You?"
              content={
                <>
                  <p>
                    Prana Health’s staff can perform breathing tests and
                    in-house scopes, tailor an asthma education plan, and enroll
                    your child in our state-of-the-art inhaler monitoring
                    program. As we monitor the need for the inhaler, we will
                    look for early signs of worsening asthma. This monitoring
                    allows us to step in quickly and adjust medications when
                    needed. Prana Health can provide pulmonary function testing
                    starting at age three as well as respiratory education with
                    air quality testing within the home.
                  </p>
                </>
              }
            />
            <Accordion
              title="What Are Symptoms of Asthma?"
              content={
                <>
                  <p>
                    You or your child may experience one or more symptoms at a
                    time and can mistaken asthma as allergies, a chest cold, or
                    bronchitis. Some symptoms of asthma may include a nagging
                    cough that lingers for more than two weeks, wheezing,
                    shortness of breath, fatigue, chest congestion or tightness.
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
