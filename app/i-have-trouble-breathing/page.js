"use client";

import styles from "./troubleBreathing.module.css";
import Image from "next/image";
import { Overlock, Noto_Serif } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["600"] });

export default function IHaveTroubleInBreating() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/home/breathing-banner.jpg"
          alt="Breathing Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h1 className={overlock.className}>I Have Trouble In Breathing</h1>
            <br />
            <p>
              I feel short of breath but I am not sure why. Whether it is an
              issue involving the heart, lungs, anemia, airways, circulation, or
              muscle weakness, we provide a comprehensive evaluation, advanced
              diagnostic tools, and treatment plan.
            </p>
          </div>
          <div className={styles.imageSide}>
            <Image
              src="/home/breathing-card.png"
              alt="Breathing Card"
              width={400}
              height={660}
              className={styles.headerImage}
            />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image
              src="/home/breathing-card.png"
              alt="Breathing Card"
              width={570}
              height={660}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <h1 className={overlock.className}>Types of Breathing Problems</h1>
            <Accordion
              title="What Does Prana Health Offer?"
              content={
                <>
                  <p>
                    Prana Health offers evaluation, diagnosis, and treatment
                    related to diseases of the lungs. Some examples are asthma,
                    cough, lung cancer, pulmonary fibrosis, pulmonary
                    hypertension, and Chronic Obstructive Pulmonary Disorder
                    (COPD).
                  </p>
                </>
              }
            />
            <Accordion
              title="Asthma"
              content={
                <>
                  <p>
                    Asthma is a chronic lung disease which narrows and inflames
                    your airways. If you are having any cough, chest tightness,
                    difficulty breathing during or after exercise, you may have
                    asthma. While mostly controllable, asthma does have the
                    potential to complicate other health conditions, reduce
                    quality of life, and even be fatal when left untreated.
                  </p>
                </>
              }
            />
            <Accordion
              title="Lung Cancer"
              content={
                <>
                  <p>
                    Lung cancer is caused by a growth of abnormal cells in the
                    lungs. These groups of cells are known as a tumor. As the
                    tumor grows, the abnormal cells destroy the healthy lung
                    tissue around them. This will impair the normal function of
                    the lungs.
                  </p>
                </>
              }
            />
            <Accordion
              title="Pulmonary fibrosis"
              content={
                <>
                  <p>
                    Pulmonary fibrosis is when your lungs are damaged or
                    scarred. The scarred lung tissue cannot be repaired and it
                    causes a tissue buildup. This buildup leads to the lungs
                    having to work harder than normal.
                  </p>
                </>
              }
            />
            <Accordion
              title="Chronic Obstructive Pulmonary Disease"
              content={
                <>
                  <p>
                    Chronic Obstructive Pulmonary Disease is known as COPD,
                    which is a progressive inflammatory lung disease that blocks
                    the airways. This can cause coughing, wheezing, and
                    difficulty breathing. COPD leads to a decline over time, in
                    health or function of the lungs.
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
