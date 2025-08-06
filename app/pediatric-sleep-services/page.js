"use client";

import styles from "./pediatric.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function PediatricSleepServices() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/pediatric-banner.png"
          alt="Pediatric Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Pediatric Sleep Services
            </h1>

            <div className={styles.contactOptions}>
              <p style={{ textAlign: "left" }}>
                Children need to dream to be able to learn and they need to
                learn to be able to dream.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageSide}>
            <Image
              src="/servicesOptions/pediatric-sleep.jpg"
              alt="Pediatric Sleep"
              width={570}
              height={350}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <Accordion
              title="Obstructive Sleep Apnea In Children"
              content={
                <>
                  <p>
                    Children present symptoms for sleep apnea differently than
                    adults. Some symptoms can be heavy breathing, restless
                    sleep, coughing, or mouth breathing. Children will not
                    usually snore loudly nor exhibit noticeable pauses in their
                    breathing. Sleep apnea increases the risk of high blood
                    pressure and heart disease in children. It can also worsen
                    seizures and affect asthma control. If left undiagnosed, the
                    child’s brain cells can be greatly affected; causing a
                    decline in their IQ more than lead poisoning.
                  </p>
                </>
              }
            />
            <Accordion
              title="Behavior Problems In Children"
              content={
                <>
                  <p>
                    When adults need rest, they look for a chance to take a nap,
                    however, children will generally compensate by forcing
                    themselves to stay busy and have bursts of energy. Any
                    parent can attest to what a child is like after a bad night
                    of sleep. The child can be easily frustrated, frantic, and
                    less likely to consider the consequences of their actions.
                  </p>
                  <p>
                    If a child gets little to no sleep, it significantly impacts
                    their learning and their behavior. It can also manifest as
                    ADHD, depression, anxiety, and learning difficulties.
                    Teenagers can be affected with these same symptoms with the
                    additional possibilities of falling asleep behind the wheel.
                  </p>
                </>
              }
            />
            <Accordion
              title="Brain Development In Children"
              content={
                <>
                  <p>
                    Sleep has a critical role in your child’s brain development.
                    While sleeping, their brain changes and develops in several
                    ways. This includes memory and structural development, and
                    emotional regulation. Interrupted sleep on a regular basis
                    can result in lifelong consequences for your child.
                  </p>
                </>
              }
            />
            <Accordion
              title="What Can Prana Health Do To Help Your Child?"
              content={
                <>
                  <p>
                    At Prana Health we can evaluate, diagnose, and create a
                    treatment plan that is tailored to your sleeping needs.
                    There is a possibility your sleep difficulties are caused
                    from obstructive sleep apnea or many other curable sleep
                    disorders. Many symptoms or behaviors that kids exhibit are
                    being ignored by parents, who brush them off as “kids being
                    kids”. By having the “they will grow out of it” mentality,
                    everyone including, the child and their support system will
                    suffer. Schedule a sleep evaluation today!
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
