"use client";

import styles from "./tired.module.css";
import Image from "next/image";
import { Overlock, Noto_Serif } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["600"] });

export default function WhyAmITired() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/home/tired.jpg"
          alt="Sleeping Banner"
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
            <h1 className={overlock.className}>Why Am I So Tired?</h1>
            <br />
            <h3
              className={`${noto_serif.className}`}
              style={{ lineHeight: "1.5" }}
            >
              Whether you or your child feel unusually sleepy all the time, it
              can often be a sign of an underlying sleep disorder. We can help
              correctly diagnose and treat the fatigue at Prana Health.
            </h3>
          </div>
          <div className={styles.imageSide}>
            <Image
              src="/home/tired-card.png"
              alt="Sleep"
              width={450}
              height={660}
              className={styles.headerImage}
            />
          </div>
        </div>

        <div className={styles.contentWrapper1}>
          <div className={styles.image}>
            <Image
              src="/home/tired-card.png"
              alt="Tired Girl"
              width={570}
              height={660}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <h1 className={overlock.className}>Insomnia</h1>
            <Accordion
              title="Description"
              content={
                <>
                  <p>
                    Lack of sleep or dissatisfying sleep is known as insomnia.
                    It may be brushed off as "one of those things that just
                    happens sometimes" but we should not ignore it.
                  </p>
                </>
              }
            />
            <Accordion
              title="Causes"
              content={
                <>
                  <p>
                    Sinus or breathing problems, such as allergies or asthma can
                    cause insomnia. Gastrointestinal problems, having chronic
                    pain, hyperthyroidism or taking certain medications such as
                    sleep-aids can also cause insomnia.
                  </p>
                </>
              }
            />
            <Accordion
              title="Symptoms"
              content={
                <>
                  <p>
                    Do you have difficulty falling asleep at night or waking up
                    too early or during the night? Are you not feeling
                    well-rested or having tiredness throughout the day? Are you
                    irritable, having brain fog such as memory is fuzzy, not
                    able to concentrate, or focusing on tasks? These are all
                    symptoms of insomnia.
                  </p>
                </>
              }
            />
            <Accordion
              title="What Can Prana Health Do?"
              content={
                <>
                  <p>
                    Our specialists can treat your insomnia according to your
                    needs. This will depend on your sleep habits and hygiene,
                    your daily routine, any medications you take or any
                    co-occurring health conditions that you are managing. Sleep
                    aids are only a temporary fix. We have cognitive behavioral
                    therapy available via TeleHealth, acupuncture if desired,
                    and a more of a holistic approach as we want to know the
                    root cause of your dissatisfying sleep. We also may
                    recommend an overnight sleep study in our sleep laboratory
                    or at home, depending on what we find during your initial
                    consultation.
                  </p>
                </>
              }
            />
          </div>
        </div>

        <div className={styles.contentWrapper2}>
          <div className={styles.accordionSide}>
            <h1 className={overlock.className}>Narcolepsy</h1>
            <Accordion
              title="Description"
              content={
                <>
                  <p>
                    Those diagnosed with narcolepsy generally do not sleep more
                    than the average person. The only difference is that the
                    brain of a narcoleptic patient’s brain is unable to control
                    the boundaries between waking and sleeping states.
                    Narcoleptic patients will go immediately into the dreaming
                    state of sleep, referred to as REM, skipping over the light
                    stage of sleep. This will create them to experience parts of
                    their REM sleep throughout their waking hours. There is
                    danger in this for the patient by potentially experiencing
                    these fragments of REM sleep while doing something involving
                    their attention and focus. For example, driving or operating
                    heavy machinery.
                  </p>
                </>
              }
            />
            <Accordion
              title="Causes"
              content={
                <>
                  <p>
                    According to the Narcolepsy Network, one in every two
                    thousand people struggle with narcolepsy. There is no exact
                    answer as to what can bring this on, though there are some
                    factors, such as stress, changes in sleep patterns or
                    hormones, genetics, infection, and more.
                  </p>
                </>
              }
            />
            <Accordion
              title="Symptoms"
              content={
                <>
                  <p>
                    Another part of understanding narcolepsy is that it can
                    mimic ADHD, pyschiatric, and neurological disorders.
                    Excessive daytime sleepiness, hallucinations, and sleep
                    paralysis are some symptoms of narcolepsy. Cataplexy is
                    unique and one of the more noticeable symptoms of this sleep
                    disorder. This is where a person is fully awake though they
                    have a sudden loss of muscle tone, that is usually triggered
                    by some type of emotion.
                  </p>
                </>
              }
            />
            <Accordion
              title="What Can Prana Health Do?"
              content={
                <>
                  <p>
                    Prana Health has substantial experience and specializes in
                    evaluating and treating adult or pediatric narcoleptic
                    patients. We perform multiple sleep latency tests and we can
                    order CSF hypocretin, when required. There are a wide
                    variety of medications that can be used for treatment, but
                    we will help evaluate which is best suited for you or your
                    child.
                  </p>
                </>
              }
            />
          </div>

          <div className={styles.image2}>
            <Image
              src="/home/tired-card.png"
              alt="Tired Girl"
              width={550}
              height={500}
              className={styles.infoImage2}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
