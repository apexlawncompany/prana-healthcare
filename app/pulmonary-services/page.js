"use client";

import styles from "./pulmonary.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function PulmonaryServices() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/primaryCare/pulomonary-banner.jpg"
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
              Pulmonary Services
            </h1>
          </div>
        </div>
      </section>
      <div className={styles.sectionHeader}>
        <h1 className={overlock.className}>Pulmonary Service Definitions</h1>
      </div>
      <section className={styles.infoSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.accordionRightSide}>
            <Accordion
              title="Asthma"
              content={
                <>
                  <p>
                    Asthma, a chronic lung disease which narrows and inflames
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
                    lungs. These groups of abnormal cells are known as a tumor.
                    As the tumor grows, the abnormal cells destroy the healthy
                    lung tissue around them. This impairs the normal function of
                    the lungs.
                  </p>
                </>
              }
            />
            <Accordion
              title="Pulmonary Fibrosis"
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
              title="Pulmonary Hypertension"
              content={
                <>
                  <p>
                    Pulmonary hypertension is high blood pressure in the
                    arteries that carry blood to the lungs. It can eventually
                    cause damage to the right side of your heart. The walls of
                    the vessels become thick, allowing very little blood to flow
                    through.
                  </p>
                </>
              }
            />
            <Accordion
              title="Chronic Obstructive Pulmonary Disease"
              content={
                <>
                  <p>
                    Chronic Obstructive Pulmonary Disease is known as COPD, a
                    progressive inflammatory lung disease that blocks the
                    airways. This can cause coughing, wheezing, and difficulty
                    breathing. COPD leads to a decline over time, in health or
                    function of the lungs.
                  </p>
                </>
              }
            />
          </div>

          <div className={styles.accordionSide}>
            <Accordion
              title="Pulmonary embolism"
              content={
                <>
                  <p>
                    Pulmonary embolism (PE) is a serious condition that occurs
                    when a blood clot, also known as a thrombus, travels to the
                    lung and blocks one of the vessels. This can happen if a
                    clot forms in a deep vein, most commonly in the legs, and
                    then breaks loose and travels to the lungs. PE can cause
                    symptoms such as sudden shortness of breath, chest pain, and
                    rapid heartbeat. If left untreated, PE can be fatal. Risk
                    factors for PE include immobility, recent surgery, certain
                    medical conditions, and certain medications. Treatment may
                    include anticoagulant medications, clot dissolving drugs
                    (thrombolytics), and in severe cases, surgery. The key of
                    the treatment is to prevent recurrence, and the use of
                    anticoagulants is very common.
                  </p>
                </>
              }
            />
            <Accordion
              title="Bronchiectasis"
              content={
                <>
                  <p>
                    Bronchiectasis is a chronic lung condition characterized by
                    the abnormal widening and scarring of the airways, leading
                    to increased mucus production and recurrent infections. It
                    can be caused by a variety of factors, including infections,
                    genetic conditions, and immune disorders. Symptoms can
                    include persistent cough, sputum production, shortness of
                    breath, and recurrent lung infections. Treatment may include
                    antibiotics, bronchodilators, mucolytic agents, and in some
                    cases, surgery. The main goal of treatment is to prevent
                    lung infections, improve airway clearance and to prevent
                    exacerbations. Additionally, physical therapy, lung
                    rehabilitation, and oxygen therapy may be recommended to
                    improve symptoms and lung function.
                  </p>
                </>
              }
            />
            <Accordion
              title="Respiratory failure"
              content={
                <>
                  <p>
                    Respiratory failure is a serious condition in which the body
                    is not able to get enough oxygen into the body or remove
                    enough carbon dioxide from it. It can be caused by a variety
                    of factors, including lung diseases, injuries, infections,
                    and other medical conditions. There are two types of
                    respiratory failure: acute and chronic. Acute respiratory
                    failure occurs suddenly and is usually caused by a severe
                    infection or injury, while chronic respiratory failure
                    develops over time and is usually caused by a chronic lung
                    disease. Symptoms of respiratory failure can include
                    shortness of breath, difficulty breathing, fatigue,
                    confusion, and cyanosis (blue-tinged skin). Treatment
                    options will depend on the underlying cause of the
                    respiratory failure, and may include oxygen therapy,
                    mechanical ventilation, medications, and other supportive
                    care. In some cases, a lung transplant may be considered for
                    patients with chronic respiratory failure.
                  </p>
                </>
              }
            />
            <Accordion
              title="Evaluation for oxygen therapy"
              content={
                <>
                  <p>
                    The evaluation for oxygen therapy typically includes a
                    thorough medical history, physical examination, and a
                    variety of diagnostic tests. The medical history will
                    include information about the patient’s symptoms, past
                    medical history, and current medications. The physical
                    examination will focus on the patient’s lung function and
                    oxygen levels, which may be measured using a pulse oximeter.
                    Diagnostic tests that may be used to evaluate the patient
                    for oxygen therapy include:
                  </p>
                  <ul>
                    <li>
                      Blood gas analysis: This test measures the levels of
                      oxygen, carbon dioxide, and other gases in the blood.
                    </li>
                    <li>
                      Chest x-ray: This test can help identify any structural
                      abnormalities in the lungs.
                    </li>
                    <li>
                      Pulmonary function tests (PFTs): These tests measure how
                      well the lungs are able to move air in and out.
                    </li>
                    <li>
                      CT scan: This test can help identify any structural
                      abnormalities in the lungs, such as emphysema or
                      bronchiectasis.
                    </li>
                    <li>
                      Cardiac tests: Some lung conditions, such as heart
                      failure, can cause respiratory failure. A cardiac test can
                      help evaluate the function of the heart.
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
