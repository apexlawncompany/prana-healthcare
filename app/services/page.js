"use client";

import styles from "./services.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Overlock, Noto_Serif } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["500"] });

export default function Services() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/services-banner.png"
          alt="Services Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <h1 className={`${styles.heroTitle} ${overlock.className}`}>
            Services
          </h1>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionHeader}>
          {/* Left Side - Heading + Paragraph */}
          <div>
            <h1 className={`${overlock.className}`}>
              The right care for your journey to recovery
            </h1>
            <br />
            <h3 className={`${noto_serif.className}`}>
              We offer highly-accessible healthcare counseling services and
              programs for individuals and families aimed at putting you on a
              path to wellness. You deserve to live well, feel capable in the
              face of challenges, and achieve your true potential. It starts
              here.
            </h3>
          </div>

          {/* Right Side - First Row of Cards */}
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2 className={`${overlock.className}`}>Internal Medicine</h2>
              <p>
                Prana Health provides professionals with a wide skill set and
                experience to handle your urgent, primary and specialty medical
                care under one roof.
              </p>
              <button
                className={styles.viewMoreBtn}
                onClick={() => router.push("/primary-care")}
              >
                View More
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={`${overlock.className}`}>
                Allergy Testing & Treatment
              </h2>

              <p>
                Prana Health’s staff can perform breathing tests and in-house
                scopes, tailor an asthma education plan, and enroll your child
                in our state-of-the-art inhaler.
              </p>
              <button
                className={styles.viewMoreBtn}
                onClick={() => router.push("/allergy-testing-treatment")}
              >
                View More
              </button>
            </div>
          </div>

          {/* Second Row of Cards - moved here */}
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2 className={`${overlock.className}`}>Pulmonary Services</h2>

              <p>
                Prana Health offers evaluation, diagnosis, and treatment related
                to diseases of the lungs. Some examples are asthma, cough, lung
                cancer, pulmonary fibrosis.
              </p>
              <button
                className={styles.viewMoreBtn}
                onClick={() => router.push("/pulmonary-services")}
              >
                View More
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={`${overlock.className}`}>
                Pediatric Sleep Services
              </h2>

              <p>
                Children present symptoms for sleep apnea differently than
                adults. Some symptoms can be heavy breathing, restless sleep,
                coughing, or mouth breathing.
              </p>
              <button
                className={styles.viewMoreBtn}
                onClick={() => router.push("/pediatric-sleep-services")}
              >
                View More
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={`${overlock.className}`}>
                Adult & Pediatric Asthma
              </h2>
              <p>
                Asthma can make breathing difficult due to inflammation in the
                airways. Children have smaller airways that can become easily
                inflamed.
              </p>
              <button
                className={styles.viewMoreBtn}
                onClick={() => router.push("/pediatric-adult-ashtma")}
              >
                View More
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={`${overlock.className}`}>Adult Sleep Disorders</h2>

              <p>
                A sleep disorder can be from abnormal sleeping patterns, or from
                not getting enough or too much sleep. The transition from
                sleeping to waking can bring on hallucinations and paralysis.
              </p>
              <button
                className={styles.viewMoreBtn}
                onClick={() => router.push("/adult-sleep-disorders")}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.collageSection}>
        <div className={styles.collageContent}>
          <div className={styles.collageImageWrapper}>
            <Image
              src="/servicesOptions/services-page-college.png"
              alt="collage"
              width={600}
              height={600}
              className={styles.collageImage}
            />
          </div>
          <div className={styles.collageText}>
            <h2 className={`${styles.collageTitle} ${overlock.className}`}>
              Depending on the nature of your problem, our doctors can be an
              ideal choice for addressing your concerns.
            </h2>

            <p className={styles.collageIntro}>
              Prana Health provides professionals with a wide skill set and
              experience to handle your urgent, primary and specialty medical
              care under one roof. From sleep problems, allergy issues, weight
              management, breathing issues, and more. Our board-certified
              providers offer the care you deserve.
            </p>

            <ul className={styles.collageList}>
              <li>TELE – URGENT CARE & PRIMARY CARE IN SANFORD</li>
              <li>MEDICARE & MEDICAID ACCEPTED</li>
              <li>ACCEPTING NEW PATIENTS</li>
              <li>SHORT WAITING TIME FOR APPOINTMENTS</li>
              <li>
                SAME DAY APPOINTMENT, TELEHEALTH, MEDICATION REFILL SERVICE
                AVAILABLE
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
