"use client";

import styles from "./childSleep.module.css";
import Image from "next/image";
import { Overlock, Noto_Serif } from "next/font/google";
import Accordion from "@/components/Accordion";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["600"] });

export default function MyChildSleep() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/pediatric-banner.png"
          alt="Child Sleeping Banner"
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
            <h1 className={overlock.className}>
              I Worry About My Child's Sleep
            </h1>
            <br />
            <h3 className={`${noto_serif.className}`} style={{lineHeight: "1.5"}}>
              Sleep is an essential part of your child’s health. We offer
              professional services to get your child’s sleep schedule back on
              track.
            </h3>
            <br />
            <p>
              Children present symptoms for sleep apnea differently than adults.
              Some symptoms can be heavy breathing, restless sleep, coughing, or
              mouth breathing. Children will not usually snore loudly nor
              exhibit noticeable pauses in their breathing. Sleep apnea
              increases the risk of high blood pressure and heart disease in
              children. It can also worsen seizures and affect asthma control.
              If left undiagnosed, the child’s brain cells can be greatly
              affected; causing a decline in their IQ more than lead poisoning.
            </p>
          </div>
          <div className={styles.imageSide}>
            <Image
              src="/home/child-sleep-card.png"
              alt="Sleep"
              width={450}
              height={660}
              className={styles.headerImage}
            />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image
              src="/home/child-sleep-card.png"
              alt="Pediatric Sleep"
              width={570}
              height={660}
              className={styles.infoImage}
            />
          </div>

          <div className={styles.accordionSide}>
            <h1 className={overlock.className}>
              Why Is Sleep So Important For Children?
            </h1>
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
                  <br />
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
                    We can evaluate, diagnose, and create a treatment plan that
                    is tailored to your sleeping needs. There is a possibility
                    your sleep difficulties are caused from obstructive sleep
                    apnea or many other curable sleep disorders. Many symptoms
                    or behaviors that kids exhibit are being ignored by parents,
                    who brush them off as “kids being kids”. By having the “they
                    will grow out of it” mentality, everyone including, the
                    child and their support system will suffer. Schedule a sleep
                    evaluation today!
                  </p>
                </>
              }
            />
            <Accordion
              title="Restless Sleep Disorder"
              content={
                <>
                  <p></p>
                </>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
