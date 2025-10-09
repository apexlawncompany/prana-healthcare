"use client";

import styles from "./direction.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import Locations from "@/components/Locations";
import SendMessage from "@/components/SendMessage";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function Direction() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/Directions_banner.jpg"
          alt="Directions Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Select Your Nearby Clinic
            </h1>
          </div>
        </div>
      </section>

      <Locations />

      <section className={styles.infoSection}>
        <h2 className={`${styles.servicesHeading} ${overlock.className}`}>
          Services
        </h2>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContent}>
            <div className={styles.textArea}>
              <h3 className={`${overlock.className}`}>
                Primary Care &amp; Urgent Care
              </h3>
              <p>
                Prana Health provides professionals with a wide skill set and
                experience to handle your primary and specialty medical care
                under one roof. From sleep problems, allergy issues, weight
                management, breathing issues, and more. Our board-certified
                providers offer the care you deserve
              </p>

              <p>
                <strong>Primary Care:</strong> In Sanford Primary Care services
                available at the new location 4546 NC-87, Sanford, NC 27332,
                United States. Board certified Family Physician, Internal
                Medicine physician and a Physician Assistant are available to
                take care of your primary care needs.
              </p>

              <p>
                <strong>Medicare &amp; Medicaid:</strong> Accepted Prana Health
                accepts traditional Medicare, Medicaid and all major Managed
                Medicare and Medicaid plans with few exceptions. Out of network
                benefits are available for many of those plans which we do not
                participate in.
              </p>

              <p>
                <strong>Accepting New Patients:</strong> Prana Health is
                accepting new patients for its primary care and specialty care
                services with short waiting time to see a provider.
              </p>
            </div>

            <div className={styles.imageArea}>
              <Image
                src="/servicesOptions/Direction-Service1.jpg"
                alt="Primary Care and Urgent Care"
                width={600}
                height={400}
                className={styles.servicesImage}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.servicesContainer}
          style={{ background: "white" }}
        >
          <div className={styles.servicesContent}>
            <div className={styles.imageArea}>
              <Image
                src="/servicesOptions/Direction-Service2.jpg"
                alt="Allergy Testing"
                width={600}
                height={400}
                className={styles.servicesImage}
              />
            </div>
            <div className={styles.textArea}>
              <h3 className={`${overlock.className}`}>
                Allergy Testing &amp; Treatment
              </h3>
              <p>
                Pollen, dust mites, molds, and pets are all common allergies
                that many suffer from. Occasionally, your body can mistakenly
                identify these as a threat. The body produces antibodies to try
                to fight off the threat and it is these antibodies that produce
                reactions. Depending on the allergen, you can have sneezing,
                swollen eyes, or a runny nose.
              </p>
              <p>
                <strong>How do we Test Allergies?</strong>
              </p>
              <p>
                Skin prick testing can be done on pediatric and adult patients
                and it is the most common allergy test performed. This test is
                simple and safe with results provided within 15-20 minutes. This
                will give you the opportunity to receive a diagnosis and
                management plan during your appointment.
              </p>
              <p>
                <strong>Full Allergy Testing and Therapy</strong>
              </p>
              <p>
                Prana Health's staff can perform breathing tests and in-house
                scopes, tailor an asthma education plan, and enroll your child
                in our state-of-the-art inhaler monitoring program. As we
                monitor the need for the inhaler, we will look for early signs
                of worsening asthma. This monitoring allows us to step in
                quickly and adjust medications when needed. Prana Health can
                provide pulmonary function testing starting at age three as well
                as respiratory education with air quality testing within the
                home.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContent}>
            <div className={styles.textArea}>
              <h3 className={`${overlock.className}`}>Pulmonary Services</h3>
              <p>
                <strong>Asthma</strong>
              </p>
              <p>
                Asthma is a chronic lung disease which narrows and inflames your
                airways. If you are having any cough, chest tightness,
                difficulty breathing during or after exercise, you may have
                asthma. While mostly controllable, asthma does have the
                potential to complicate other health conditions, reduce quality
                of life, and even be fatal when left untreated.
              </p>
              <p>
                <strong>Pulmonary hypertension</strong>
              </p>
              <p>
                Pulmonary hypertension is a condition characterized by high
                blood pressure in the lungs. It can be caused by a variety of
                factors, including heart and lung diseases, certain medications,
                and genetic conditions. Symptoms can include shortness of
                breath, fatigue, chest pain, and lightheadedness. Treatment
                options include medications, oxygen therapy, and in severe
                cases, lung transplantation. Early diagnosis and treatment can
                help slow the progression of the disease and improve quality of
                life.
              </p>
            </div>

            <div className={styles.imageArea}>
              <Image
                src="/servicesOptions/Direction-Service3.jpg"
                alt="Asthma"
                width={600}
                height={400}
                className={styles.servicesImage}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.servicesContainer}
          style={{ background: "white" }}
        >
          <div className={styles.servicesContent}>
            <div className={styles.imageArea}>
              <Image
                src="/servicesOptions/pediatric-sleep.jpg"
                alt="Pediatric Sleep Services"
                width={600}
                height={400}
                className={styles.servicesImage}
              />
            </div>
            <div className={styles.textArea}>
              <h3 className={`${overlock.className}`}>
                Pediatric Sleep Services
              </h3>
              <p>
                <strong>Why Is Sleep So Important For Children?</strong>
              </p>
              <p>
                "Children need to dream to be able to learn and they need to
                learn to be able to dream."
              </p>
              <p>
                <strong>Obstructive Sleep Apnea In Children</strong>
              </p>
              <p>
                Children present symptoms for sleep apnea differently than
                adults. Some symptoms can be heavy breathing, restless sleep,
                coughing, or mouth breathing. Children will not usually snore
                loudly nor exhibit noticeable pauses in their breathing. Sleep
                apnea increases the risk of high blood pressure and heart
                disease in children. It can also worsen seizures and affect
                asthma control. If left undiagnosed, the child’s brain cells can
                be greatly affected; causing a decline in their IQ more than
                lead poisoning.
              </p>
              <p>
                <strong>Behavior Problems In Children</strong>
              </p>
              <p>
                When adults need rest, they look for a chance to take a nap,
                however, children will generally compensate by forcing
                themselves to stay busy and have bursts of energy. Any parent
                can attest to what a child is like after a bad night of sleep.
                The child can be easily frustrated, frantic, and less likely to
                consider the consequences of their actions.
              </p>
              <p>
                If a child gets little to no sleep, it significantly impacts
                their learning and their behavior. It can also manifest as ADHD,
                depression, anxiety, and learning difficulties. Teenagers can be
                affected with these same symptoms with the additional
                possibilities of falling asleep behind the wheel.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContent}>
            <div className={styles.textArea}>
              <h3 className={`${overlock.className}`}>
                What Is A Sleep Disorder?
              </h3>
              <p>
                <strong>What Is A Sleep Disorder?</strong>
              </p>
              <p>
                A sleep disorder can be from abnormal sleeping patterns, or from
                not getting enough or too much sleep. The transition of sleeping
                to waking can bring on hallucinations and paralysis. Nightmares
                that happen while sleeping or seizures could be abnormal
                experiences. Some sleep disorders can affect some psychiatric
                disorders, medical or neurological disorders. Your breathing can
                be affected if you have a breathing related sleep disorder,
                while the neurological system is affected if you have a movement
                related sleep disorder.
              </p>
            </div>

            <div className={styles.imageArea}>
              <Image
                src="/servicesOptions/adult-sleeping.png"
                alt="Sleep Disorder"
                width={600}
                height={400}
                className={styles.servicesImage}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.servicesContainer}
          style={{ background: "white" }}
        >
          <div className={styles.servicesContent}>
            <div className={styles.imageArea}>
              <Image
                src="/home/asthma- banner.jpg"
                alt="Asthma"
                width={600}
                height={400}
                className={styles.servicesImage}
              />
            </div>
            <div className={styles.textArea}>
              <h3 className={`${overlock.className}`}>What Is Asthma?</h3>
              <p>
                Asthma can make breathing difficult due to inflammation in the
                airways. Children have smaller airways that can become easily
                inflamed when exposed to any triggers. Inhalation of pollen, a
                cold, allergens, exercise, or even seasons of weather can all be
                asthma triggers. Asthma interferes with day to day activities,
                sports, school, and sleep.
              </p>
              <p>
                <strong>What Are Symptoms of Asthma?</strong>
              </p>
              <p>
                You or your child may experience one or more symptoms at a time
                and can mistaken asthma as allergies, a chest cold, or
                bronchitis. Some symptoms of asthma may include a nagging cough
                that lingers for more than two weeks, wheezing, shortness of
                breath, fatigue, chest congestion or tightness.
              </p>
              <p>
                Any symptom of asthma must be taken seriously or it can worsen.
                Some children grow out of their asthma, though it can continue
                into adulthood. This can eventually lead to chronic obstructive
                pulmonary disease (COPD), meaning the airways become permanently
                narrowed. With the right treatment, these symptoms can be kept
                under control.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContent}>
            <div className={styles.textArea}>
              <h3 className={`${overlock.className}`}>
                Long-Covid Evaluations
              </h3>
              <p>
                <strong>I am not the same since I had COVID</strong>
              </p>

              <p>
                Find out more about the coronavirus comprehensive evaluations we
                offer below
              </p>

              <p>
                <strong>Long COVID - its symptoms</strong>{" "}
              </p>
              <p>
                Long COVID, also known as post-acute sequelae of SARS-CoV-2
                infection (PASC), refers to a range of symptoms that persist for
                weeks or even months after the acute phase of COVID-19. These
                symptoms can vary widely from person to person, and can affect
                multiple organ systems.
              </p>
              <p>Common symptoms of long COVID include:</p>
              <ul>
                <li>Fatigue and weakness</li>
                <li>Shortness of breath</li>
                <li>Chest pain</li>
                <li>Headaches</li>
                <li>Difficulty concentrating or memory problems (brain fog)</li>
                <li>Joint and muscle pain</li>
                <li>Heart palpitations or chest pain</li>
                <li>Loss of taste or smell</li>
                <li>Depression and anxiety</li>
                <li>Sleep disturbances</li>
              </ul>
            </div>

            <div className={styles.imageArea}>
              <Image
                src="/servicesOptions/Direction-Service7.jpg" // 🔹 Replace with your actual image
                alt="Long Covid"
                width={600}
                height={400}
                className={styles.servicesImage}
              />
            </div>
          </div>
        </div>
      </section>

      <SendMessage />
    </main>
  );
}
