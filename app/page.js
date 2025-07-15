"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { Overlock } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  const [activeTab, setActiveTab] = useState("future");
  const handleTabClick = (tab) => setActiveTab(tab);

  const cardData = [
    {
      title: "I Can Not Get Rid Of My Cough",
      description:
        "Coughing all the time can be uncomfortable, keep you up at night...",
      image: "/home/cough-card.png",
      href: "/rahul/i-cannot-get-rid-of-my-cough",
    },
    {
      title: "I Worry About My Child's Sleep",
      description:
        "Sleep is an essential part of your child's health. We offer professional services.",
      image: "/home/child-sleep-card.png",
      href: "/rahul/i-worry-about-my-childs-sleep",
    },
    {
      title: "I Can Not Sleep",
      description:
        "Dissatisfying sleep can be troubling and difficult to treat without proper help. How you sleep can impact almost every aspect of your health. Prana Health offers",
      image: "/home/cannot-sleep-card.png",
      href: "/rahul/i-cannot-sleep",
    },
    {
      title: "Why Am I So Tired?",
      description:
        "Whether you or your child feel unusually sleepy all the time, it can often be a sign of an underlying sleep",
      image: "/home/tired-card.png",
      href: "/rahul/i-cannot-sleep",
    },
    {
      title: "I Have Trouble Breathing.",
      description:
        "I feel short of breath but I am not sure why. Whether it is an issue involving the heart, lungs.",
      image: "/home/breathing-card.png",
      href: "/rahul/i-cannot-sleep",
    },
    {
      title: "I Am Concerned About Asthma.",
      description:
        "Whether for you or your child, we can talk with you about Asthma and how you can ease those symptoms.",
      image: "/home/asthama-card.png",
      href: "/rahul/i-cannot-sleep",
    },
    {
      title: "I Just Can't Lose Weight",
      description:
        "Can’t lose weight no matter what you try? Prana Health finds the real reason and helps you with a plan that works for you.",
      image: "/home/weight-loss-card.jpg",
      href: "/rahul/i-cannot-sleep",
    },
    {
      title: "Comprehensive Insomnia",
      description:
        "Insomnia is a sleep disorder in which you have trouble falling and/or staying asleep.",
      image: "/home/insomia-card.png",
      href: "/rahul/i-cannot-sleep",
    },
    {
      title: "I Am Not The Same Since I Had COVID",
      description:
        "Find out more about the coronavirus comprehensive evaluations we offer below",
      image: "/home/covid-card.png",
      href: "/rahul/i-cannot-sleep",
    },
  ];

  const clinics = [
    {
      name: "Fayetteville Clinic",
      address: "200 Forsythe St, Fayetteville, NC 28303",
      image: "/home/address1.jpg",
    },
    {
      name: "Sanford Clinic",
      address: "4546 NC-87, Sanford, NC 27332, United States",
      image: "/home/address2.jpg",
    },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${overlock.className}`}>
            Multi-Specialty Clinic
          </h1>
        </div>
        <Image
          src="/home/doctor-banner.jpg"
          alt="Multi-Specialty Clinic"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.heroImage}
        />
      </section>

      <section className={styles.helpCardSection}>
        <h1 className={`${styles.heading} ${overlock.className}`}>I need help</h1>
        <div className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.helpCard}>
              <div className={styles.helpCardImageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className={styles.helpCardImage}
                />
              </div>
              <h3 className={`${overlock.className}`} style={{fontSize:"2rem"}}>{card.title}</h3>
              <p>{card.description}</p>
              <Link href={card.href} className={styles.button}>
                View More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.collageSection}>
        <div className={styles.collageContent}>
          <div className={styles.collageImageWrapper}>
            <Image
              src="/home/HI.png"
              alt="Healthcare collage"
              width={600}
              height={600}
              className={styles.collageImage}
            />
          </div>
          <div className={styles.collageText}>
            <h2 className={`${styles.collageTitle} ${overlock.className}`}>
              The right care for your journey to recovery
            </h2>
            <h4 className={styles.collageSubtitle}>
              Dedicated to your healthcare and wellness
            </h4>
            <p className={styles.collageDescription}>
              Prana Health provides professionals with a wide skill set and
              experience to handle your urgent, primary and specialty medical
              care under one roof. From sleep problems, allergy issues, weight
              management, breathing issues, and more. Our board-certified
              providers offer the care you deserve.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.clinicalSection}>
        <h2 className={styles.sectionTitle}>Clinical Trials</h2>

        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              activeTab === "future" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("future")}
          >
            Future Clinical Trial
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "ongoing" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("ongoing")}
          >
            Ongoing Clinical Trial
          </div>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "future" ? (
            <div className={styles.trialContent}>
              <div className={styles.textContent}>
                <h3>
                  Future <span>Clinical Trial</span>
                </h3>
                <p>
                  Non-invasive treatments and therapies specifically designed
                  for pregnant women.
                </p>
                <button className={styles.cta}>I am interested</button>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/clinical-trail.png"
                  alt="Future Trial"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          ) : (
            <div className={styles.trialContent}>
              <div className={styles.textContent}>
                <h3>
                  Ongoing <span>Clinical Trial</span>
                </h3>
                <p>
                  Currently running clinical studies you can participate in.
                  Find help and contribute to medical research.
                </p>
                <button className={styles.cta}>Join Now</button>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/clinical-trail-2.png"
                  alt="Ongoing Trial"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.expProvidersSection}>
        <div className={styles.expProvidersContent}>
          <h1 className={`${styles.expProvidersTitle} ${overlock.className}`}>
            Get Better With Our Experienced providers!
          </h1>
          <p className={styles.expProvidersSubtitle}>
            Depending on the nature of your problem, our doctors can be an ideal
            choice for addressing your concerns.
          </p>
          <button className={styles.viewBtn}>View More</button>
        </div>
        <Image
          src="/home/exp-providers.png"
          alt="Providers Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.expProvidersBgImage}
        />
      </section>

      <section className={styles.teamSection}>
        <h2 className={`${styles.teamTitle} ${overlock.className}`}>Meet Our Team</h2>
        <p className={styles.teamSubtitle}>
          Our Providers are qualified to help with many behavioral health needs,
          including:
        </p>

        <div className={styles.serviceList}>
          <ul>
            <li>Primary Care</li>
            <li>Allergy Testing & Treatment</li>
            <li>Pulmonary Services</li>
          </ul>
          <ul>
            <li>Pediatric Sleep Services</li>
            <li>Pediatric & Adult Asthma</li>
            <li>Adult Sleep Disorders</li>
          </ul>
        </div>

        <div className={styles.teamGrid}>
          {[
            {
              name: "Dr. Rahul Kakkar",
              role: "MD, Pulmonary, Critical Care and Sleep Specialist",
              image: "/home/Dr-Rahul.png",
            },
            {
              name: "Reandy Hearn",
              role: "Physician’s Assistant",
              image: "/home/Reandy.png",
            },
            {
              name: "Emilou Lao",
              role: "Nurse Practitioner",
              image: "/home/emilou.webp",
            },
            {
              name: "Dr. Alfred Bunao",
              role: "Family Medicine",
              image: "/home/Alfred.png",
            },
          ].map((member, i) => (
            <div key={i} className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={280}
                  height={250}
                  className={styles.profileImage}
                />
              </div>
              <h3 className={`${overlock.className}`}>{member.name}</h3>
              <p className={`${overlock.className}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.locateSection}>
        <h2 className={styles.title}>Locate us</h2>
        <div className={styles.grid}>
          {clinics.map((clinic, index) => (
            <div key={index} className={styles.locationCard}>
              <div>
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <p className={styles.clinicName}>{clinic.name}</p>
                </div>
              </div>
              <p className={styles.address}>{clinic.address}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
