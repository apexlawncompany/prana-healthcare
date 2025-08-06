"use client";

import styles from "./longCovid.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import { Noto_Serif } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["500"] });

export default function LongCovidEvaluations() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/long-covid-evaluation-bannerr.png"
          alt="Long Covid Evaluation Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Long-Covid Evaluations
            </h1>

            <div className={styles.subHeadline}>
              <p className={`${noto_serif.className}`}>
                Find out more about the coronavirus comprehensive evaluations we
                offer below
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionHeader}>
          <h1 className={overlock.className}>Long COVID - symptoms</h1>
          <p>
            Long COVID, also known as post-acute sequelae of SARS-CoV-2
            infection (PASC), refers to a range of symptoms that persist for
            weeks or even months after the acute phase of COVID-19. These
            symptoms can vary widely from person to person, and can affect
            multiple organ systems.
          </p>
          <p>Common symptoms of long COVID include:</p>
          <ul>
            <li>Fatigue and weakness</li>
            <li>Shortness of breath</li>
            <li>Chest pain</li>
            <li>Headaches</li>
            <li>Difficulty concentrating or memory problems (brain fog)</li>
            <li>Joint and muscle pain</li>
            <li>Heart palpitations or chest pain</li>
            <li>Loss of taste or smell</li>
            <li>Depression and anxiety</li>
            <li>Sleep disturbances</li>
          </ul>
          <p>
            It’s important to note that some people who have had COVID-19 may
            continue to experience symptoms even after they have recovered. In
            some cases, these symptoms can be severe and disabling, and may
            require ongoing management.
          </p>
          <p>
            Prana Health has the right experience and tools that you can trust
            for full evaluation, treatment and long term monitoring of long
            COVID.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.gallery}>
            {[
              {
                src: "/servicesOptions/long-covid-galleryImg1.jpg",
                alt: "Lung Function",
                label: "Evaluation of their lung function",
              },
              {
                src: "/servicesOptions/long-covid-galleryImg2.jpg",
                alt: "Lung Inflammation",
                label: "Lung inflammation evaluation",
              },
              {
                src: "/servicesOptions/long-covid-galleryImg3.jpg",
                alt: "Neuro Testing",
                label: "Neurocognitive testing",
              },
              {
                src: "/servicesOptions/long-covid-galleryImg4.jpg",
                alt: "Sleep Eval",
                label: "Sleep evaluation at home",
              },
              {
                src: "/servicesOptions/long-covid-galleryImg5.jpg",
                alt: "Nutrition",
                label: "Nutritional counseling",
              },
              {
                src: "/servicesOptions/long-covid-galleryImg6.jpg",
                alt: "Therapy",
                label: "Physical Therapy",
              },
            ].map((item, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={200}
                  className={styles.cardImage}
                />
                <p className={styles.cardLabel}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
