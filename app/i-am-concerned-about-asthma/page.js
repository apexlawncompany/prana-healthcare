"use client";

import styles from "./asthma.module.css";
import Image from "next/image";
import { Overlock, Noto_Serif } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["500"] });

export default function ConcernedAboutAsthma() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/home/asthma- banner.jpg"
          alt="Asthma Banner"
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
            <h1 className={overlock.className}>I Am Concerned About Asthma</h1>
            <br />
            <h3
              className={`${noto_serif.className}`}
              style={{ lineHeight: "1.5" }}
            >
              Whether for you or your child, we can talk with you about Asthma
              and how you can ease those symptoms.
            </h3>
          </div>
          <div className={styles.imageSide}>
            <Image
              src="/home/asthama-card.png"
              alt="Asthma Card"
              width={450}
              height={500}
              className={styles.headerImage}
            />
          </div>
        </div>

       <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image
              src="/servicesOptions/asthma2.png"
              alt="Pediatric Sleep"
              width={600}
              height={350}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
             <h1 className={overlock.className}>Adult & Pediatric Asthma</h1>
             <h2 className={noto_serif.className}>There are several types of Adult & Pediatric Ashtma</h2>
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
