"use client";

import styles from "./adultSleep.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function AdultSleepDisorders() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/adultSleep-banner.png"
          alt="Adult Sleep Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Adult Sleep Disorders
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageSide}>
            <Image
              src="/servicesOptions/adult-sleeping.png"
              alt="Adult Sleeping"
              width={570}
              height={350}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <Accordion
              title="Insomnia"
              content={
                <>
                  <br />
                  <h4>Description</h4>
                  <br />
                  <p>
                    Lack of sleep or dissatisfying sleep is known as insomnia.
                    It may be brushed off as “one of those things that just
                    happens sometimes” but we should not ignore it.
                  </p>
                  <br />
                  <h4>Causes</h4>
                  <br />
                  <p>
                    Sinus or breathing problems, such as allergies or asthma can
                    cause insomnia. Gastrointestinal problems, having chronic
                    pain, hyperthyroidism or taking certain medications such as
                    sleep-aids can also cause insomnia.
                  </p>
                  <br />
                  <h4>Symptoms</h4>
                  <br />
                  <p>
                    Do you have difficulty falling asleep at night or waking up
                    too early or during the night? Are you not feeling
                    well-rested or having tiredness throughout the day? Are you
                    irritable, having brain fog such as memory is fuzzy, not
                    able to concentrate, or focusing on tasks? These are all
                    symptoms of insomnia.
                  </p>
                  <br />
                  <h4>What Can Prana Health Do?</h4>
                  <br />
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
            <Accordion
              title="Narcolepsy"
              content={
                <>
                  <br />
                  <h4>Description</h4>
                  <br />
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
                  <br />
                  <h4>Causes</h4>
                  <br />
                  <p>
                    According to the Narcolepsy Network, one in every two
                    thousand people struggle with narcolepsy. There is no exact
                    answer as to what can bring this on, though there are some
                    factors, such as stress, changes in sleep patterns or
                    hormones, genetics, infection, and more.
                  </p>
                  <br />
                  <h4>Symptoms</h4>
                  <br />
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
                  <br />
                  <h4>What Can Prana Health Do?</h4>
                  <br />
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

            <Accordion
              title="Difficulty With CPAP"
              content={
                <>
                  <br />
                  <h4>Description</h4>
                  <br />
                  <p>
                    You want to get the best night of sleep that you possibly
                    can. If you have been diagnosed with OSA, obstructive sleep
                    apnea, it can be difficult to do that. High blood pressure,
                    congestive heart failure, weight gain, diabetes, heart
                    disease, and asthma are all health risks of being developed.
                  </p>
                  <br />
                  <h4>What Can Prana Health Do?</h4>
                  <br />
                  <p>
                    Helping patients get used to their CPAP has become a
                    sub-specialty of Dr. Kakkar’s. He ensures that they are able
                    to use it and if the CPAP fails, alternative treatments to
                    CPAP are available. We will be more than happy to discuss
                    what will help you be most successful. He has written
                    articles and contributed to book chapters involving the use
                    of the CPAP.
                  </p>
                  <p>
                    Remember that with time, practice and appropriate follow-up,
                    CPAPs work for almost every patient. If you’re struggling to
                    make yours work, or not getting a better night of sleep with
                    it, we want to help you. Prana Health will help you get back
                    to feeling like yourself. Don’t suffer in silence; tell us
                    what’s going on so that we can help.
                  </p>
                </>
              }
            />
            <Accordion
              title="What is obstructive sleep apnea?"
              content={
                <>
                  <p>
                    Obstructive sleep apnea (OSA) is a disorder caused by the
                    repetitive collapse of the upper airway during sleep. It is
                    the most common Trusted Source sleep-related breathing
                    disorder.
                  </p>
                  <p>
                    OSA occurs when the muscles supporting the soft tissues in
                    your throat, such as your tongue and soft palate, relax.
                    This causes your airway to narrow or even close, momentarily
                    cutting off your breathing.
                  </p>
                  <p>
                    OSA is most common among older males, but it can affect
                    anyone, including children. The incidence rises following
                    menopause, such that the rates are similar in men and
                    postmenopausal women.
                  </p>
                </>
              }
            />
            <Accordion
              title="What is Restless legs syndrome ?"
              content={
                <>
                  <br />
                  <h4>Overview</h4>
                  <br />
                  <ul>
                    <li>
                      A condition characterised by a nearly irresistible urge to
                      move the legs, typically in the evenings.
                    </li>
                    <li>
                      Restless legs syndrome typically occurs while sitting or
                      lying down. It generally worsens with age and can disrupt
                      sleep.
                    </li>
                    <li>
                      The main symptom is a nearly irresistible urge to move the
                      legs.
                    </li>
                    <li>
                      Getting up and moving around helps the unpleasant feeling
                      temporarily go away. Self-care steps, lifestyle changes or
                      medication may help.
                    </li>
                  </ul>
                  <br />
                  <h4>Symptoms</h4>
                  <br />
                  <ul>
                    <li>
                      A condition characterised by a nearly irresistible urge to
                      move the legs, typically in the evenings.
                    </li>
                    <li>
                      Restless legs syndrome typically occurs while sitting or
                      lying down. It generally worsens with age and can disrupt
                      sleep.
                    </li>
                    <li>
                      The main symptom is a nearly irresistible urge to move the
                      legs.
                    </li>
                    <li>
                      Getting up and moving around helps the unpleasant feeling
                      temporarily go away. Self-care steps, lifestyle changes or
                      medication may help.
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
