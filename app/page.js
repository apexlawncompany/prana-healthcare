"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Locations from "@/components/Locations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("future");
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const handleTabClick = (tab) => setActiveTab(tab);

  const cardData = [
    {
      title: "I Can Not Get Rid Of My Cough",
      description:
        "Coughing all the time can be uncomfortable, keep you up at night...",
      image: "/home/cough-card.png",
      href: "/i-cant-get-rid-of-my-cough",
    },
    {
      title: "I Worry About My Child's Sleep",
      description:
        "Sleep is an essential part of your child's health. We offer professional services.",
      image: "/home/child-sleep-card.png",
      href: "/i-worry-about-my-childs-sleep",
    },
    {
      title: "I Can Not Sleep",
      description:
        "Dissatisfying sleep can be troubling and difficult to treat without proper help. How you sleep can impact almost every aspect of your health. Prana Health offers",
      image: "/home/cannot-sleep-card.png",
      href: "/i-cant-sleep",
    },
    {
      title: "Why Am I So Tired?",
      description:
        "Whether you or your child feel unusually sleepy all the time, it can often be a sign of an underlying sleep",
      image: "/home/tired-card.png",
      href: "/why-am-i-so-tired",
    },
    {
      title: "I Have Trouble Breathing.",
      description:
        "I feel short of breath but I am not sure why. Whether it is an issue involving the heart, lungs.",
      image: "/home/breathing-card.png",
      href: "/i-have-trouble-breathing",
    },
    {
      title: "I Am Concerned About Asthma.",
      description:
        "Whether for you or your child, we can talk with you about Asthma and how you can ease those symptoms.",
      image: "/home/asthama-card.png",
      href: "/i-am-concerned-about-asthma",
    },
    {
      title: "I Just Can't Lose Weight",
      description:
        "Can’t lose weight no matter what you try? Prana Health finds the real reason and helps you with a plan that works for you.",
      image: "/home/weight-loss-card.jpg",
      href: "/i-just-cant-lose-weight",
    },
    {
      title: "Comprehensive Insomnia",
      description:
        "Insomnia is a sleep disorder in which you have trouble falling and/or staying asleep.",
      image: "/home/insomia-card.png",
      href: "/comprehensive-insomnia",
    },
    {
      title: "I Am Not The Same Since I Had COVID",
      description:
        "Find out more about the coronavirus comprehensive evaluations we offer below",
      image: "/home/covid-card.png",
      href: "/long-covid-evaluations",
    },
  ];

  const services = [
    {
      name: "Primary Care",
      icon: "/home/nurse.png",
      description:
        "Prana Health provides professionals with a wide skill set and experience to handle your primary and specialty medical care under one roof. From sleep problems, allergy issues, weight management, breathing issues, and more. Our board-certified providers offer the care you deserve",
      images: "/home/home-primarycare.png",
    },
    {
      name: "Urgent Care",
      icon: "/home/nurse.png",
      description:
        "Urgent care refers to medical attention that is needed for an illness or injury that is not serious enough to warrant a visit to an emergency room, but still requires prompt attention. Examples of conditions that may be treated at an urgent care center include minor cuts and burns, sprains and strains, fever or flu-like symptoms, and mild asthma attacks.",
      images: "/home/exp-providers.png",
    },
    {
      name: "Pulmonary Services",
      icon: "/home/nurse.png",
      description:
        "Prana Health offers evaluation, diagnosis, and treatment related to diseases of the lungs. Some examples are asthma, cough, lung cancer, pulmonary fibrosis, pulmonary hypertension, and Chronic Obstructive Pulmonary Disorder (COPD).",
      images: "/home/serviceTab-Pulmonary.jpg",
    },
    {
      name: "Pediatric sleep Services",
      icon: "/home/nurse.png",
      description:
        "Children present symptoms for sleep apnea differently than adults. Some symptoms can be heavy breathing, restless sleep, coughing, or mouth breathing.<br /><br />Children will not usually snore loudly nor exhibit noticeable pauses in their breathing. Sleep apnea increases the risk of high blood pressure and heart disease in children. It can also worsen seizures and affect asthma control. If left undiagnosed, the child’s brain cells can be greatly affected; causing a decline in their IQ more than lead poisoning.",
      images: "/home/serviceTab-sleep.jpg",
    },
    {
      name: "Adult Asthama & Allergies",
      icon: "/home/nurse.png",
      description:
        "Asthma can make breathing difficult due to inflammation in the airways. Children have smaller airways that can become easily inflamed when exposed to any triggers.<br /><br />Inhalation of pollen, a cold, allergens, exercise, or even seasons of weather can all be asthma triggers. Asthma interferes with day to day activities, sports, school, and sleep.",
      images: "/home/serviceTab-asthma.jpg",
    },
    {
      name: "Adult Sleep Services",
      icon: "/home/nurse.png",
      description:
        "A sleep disorder can be from abnormal sleeping patterns, or from not getting enough or too much sleep. The transition of sleeping to waking can bring on hallucinations and paralysis.<br /><br />Some sleep disorders can affect some psychiatric disorders, medical or neurological disorders. Your breathing can be affected if you have a breathing related sleep disorder, while the neurological system is affected if you have a movement related sleep disorder.",
      images: "/home/serviceTab-adult-sleeping.png",
    },
  ];

  const testimonials = [
    {
      name: "Cherie Felczer",
      img: "/home/cherie.png",
      text: "Prana Healthcare Expert helped me overcome sleep anxiety, and now my sleep is consistent. Skip the endless online content—go straight to Prana Healthcare Expert. It works!",
    },
    {
      name: "Beatriz Rock",
      img: "/home/beatriz.png",
      text: "Prana Healthcare Expert helped me find the right coping mechanisms, leading to a huge improvement in my erratic sleep by addressing the root cause and stopping disruptive thoughts for lasting results.",
    },
    {
      name: "Amanda Lerichi-Martinez",
      img: "/home/amanda.png",
      text: "After 17 years of severe insomnia and trying countless treatments, Prana Healthcare Expert transformed my sleep by addressing the root causes, helping me trust my body to fall asleep naturally.",
    },
    {
      name: "Robin C Murray",
      img: "/home/robin.png",
      text: "After 10 years of poor sleep, Prana Healthcare Expert helped me address the mental side of insomnia, leading to the best sleep I've had in a decade.",
    },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`font-overlock ${styles.heroTitle}`}>
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
        <h1 className={`font-overlock ${styles.heading}`}>I need help</h1>
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
              <h3 className={`font-overlock`} style={{ fontSize: "2rem" }}>
                {card.title}
              </h3>
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
            <h2 className={`font-overlock ${styles.collageTitle}`}>
              The right care for your journey to recovery
            </h2>
            <h4 className={`font-noto-serif ${styles.collageSubtitle}`}>
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

      <div className={styles.waveDivider}>
        <Image
          src="/home/white_bottom_wave_01.png"
          alt="Divider"
          width={1920}
          height={100}
          priority
        />
      </div>

      <section className={styles.clinicalSection}>
        <h2 className={`${styles.sectionTitle} font-overlock`}>
          Clinical Trials
        </h2>

        <div className={styles.tabs}>
          <div
            className={`${styles.tab} font-overlock ${
              activeTab === "future" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("future")}
          >
            Future Clinical Trials
          </div>
          <div
            className={`${styles.tab} font-overlock ${
              activeTab === "ongoing" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("ongoing")}
          >
            Ongoing Clinical Trials
          </div>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "future" ? (
            <div className={styles.trialContent}>
              <div className={styles.textContent}>
                <h3 className={`font-overlock`}>
                  Future <span>Clinical Trial</span>
                </h3>
                <p>
                  Non-invasive treatments and therapies specifically designed
                  for pregnant women.
                </p>
                <button className={styles.intrestedBtn}>I am interested</button>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/clinical-trail.png"
                  alt="Future Trial"
                  width={550}
                  height={500}
                  className={styles.clinicalImage}
                />
              </div>
            </div>
          ) : (
            <div className={styles.trialContent}>
              <div className={styles.textContent}>
                <h3 className={`font-overlock`}>
                  Ongoing <span>Clinical Trial</span>
                </h3>
                <p>
                  Currently running clinical studies you can participate in.
                  Find help and contribute to medical research.
                </p>
                <button className={styles.intrestedBtn}>I am interested</button>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/clinical-trail-2.png"
                  alt="Ongoing Trial"
                  width={550}
                  height={500}
                  className={styles.clinicalImage}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.expProvidersSection}>
        <div className={styles.expProvidersContent}>
          <h1 className={`${styles.expProvidersTitle} font-overlock`}>
            Get Better With Our Experienced providers!
          </h1>
          <p className={`font-noto-serif ${styles.expProvidersSubtitle}`}>
            Depending on the nature of your problem, our doctors can be an ideal
            choice for addressing your concerns.
          </p>
          <br />
          <button
            className={styles.viewBtn}
            onClick={() => router.push("/services")}
          >
            View More
          </button>
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
        <h2 className={`${styles.teamTitle} font-overlock`}>Meet Our Team</h2>
        <p className={`font-noto-serif ${styles.teamSubtitle}`}>
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
              <h3 className={`font-overlock`}>{member.name}</h3>
              <p className={`font-overlock`}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.careSection}>
        <h2 className={`${styles.serviceTitle} font-overlock`}>
          What We Care For
        </h2>
        <p className={`font-noto-serif ${styles.subtitle}`}>
          <em>Primary Care and Urgent Care</em>
        </p>

        <div className={styles.servicetabs}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.servicetab} ${
                activeServiceTab === index ? styles.activeServiceTab : ""
              }`}
              onClick={() => setActiveServiceTab(index)}
            >
              <Image
                src={service.icon}
                alt={`${service.name} icon`}
                width={72}
                height={72}
                className={styles.iconDoctor}
              />
              <span className={`font-overlock`}>{service.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.servicetabContent}>
          <div className={styles.servicetrialContent}>
            <div className={styles.servicetextContent}>
              <h3 className={`font-overlock`}>
                {services[activeServiceTab].name}
              </h3>
              <br />
              <p
                dangerouslySetInnerHTML={{
                  __html: services[activeServiceTab].description,
                }}
              />
            </div>
            <div className={styles.serviceimageWrapper}>
              <Image
                src={services[activeServiceTab].images}
                alt={services[activeServiceTab].name}
                width={550}
                height={400}
                className="${styles.serviceImage}"
              />
            </div>
          </div>
        </div>
        <button
          className={styles.viewAllBtn}
          onClick={() => router.push("/services")}
        >
          View All Services
          <Image
            src="/icons/next.png"
            alt="Next Icon"
            width={16}
            height={16}
            style={{
              verticalAlign: "middle",
              marginLeft: "0.5em",
            }}
          />
        </button>
      </section>

      <section
        className={styles.testimonialSection}
        style={{ backgroundImage: "url('/home/testimonals.png')" }}
      >
        <div className={styles.testimonialOverlay}>
          <blockquote className={`font-noto-serif`}>
            <em>
              “The help and company of good friends, the rediscovery of old
              pleasures, the support of my family, being useful to others,
              feeling part of the community – of old pleasures, these are all
              essential factors in my recovery.”
            </em>
          </blockquote>
        </div>
        <div className={styles.testimonialAuthor}>
          <p>
            <strong>Melissa Cardoso</strong>
          </p>
          <span>-OCD</span>
          <button
            className={styles.watchStoryBtn}
            onClick={() => router.push("/testimonials")}
          >
            <Image
              src="/icons/play.png" // update the path if your icon is elsewhere
              alt="Watch Video"
              width={24}
              height={24}
              style={{
                verticalAlign: "middle",
                marginRight: "0.5em",
                filter: "brightness(0) invert(1)",
              }}
            />
            Watch Story
          </button>
        </div>
      </section>


      <section className={styles.midtestimonialSection}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: `.${styles.dots}` }}
          className={styles.sliderContainer}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className={styles.testimonialCard}>
                <Image
                  src={t.img}
                  alt={t.name}
                  width={64}
                  height={64}
                  className={styles.avatar}
                />
                <h3 className={styles.name}>{t.name}</h3>
                <hr className={styles.divider} />
                <span className={styles.quote}>”</span>
                <p className={styles.text}>{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.dots}></div>
        </Swiper>
      </section>

      <Locations />
    </main>
  );
}
