"use client";

import styles from "./privacy.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import { Noto_Serif } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["500"] });

export default function Privacy() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/servicesOptions/long-covid-evaluation-bannerr.png"
          alt="Long Covid Evaluation Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Notice of Privacy Practice
            </h1>

            <div className={styles.subHeadline}>
              <p className={`${noto_serif.className}`}>
                This notice describes how medical information about you may be
                used and disclosed and how you can get access to this
                information. Please review it carefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionHeader}>
          <h1 className={overlock.className}>Your Rights</h1>
          <br />
          <p>
            When it comes to your health information, you have certain rights.
            This section explains your rights and some of our responsibilities
            to help you.
          </p>
          <br />
          <ul>
            <li>Get an electronic or paper copy of your medical record</li>
            <li>
              You can ask to see or get an electronic or paper copy of your
              medical record and other health information we have about you. Ask
              us how to do this.
            </li>
            <li>
              We will provide a copy or a summary of your health information,
              usually within 30 days of your request. We may charge a
              reasonable, cost-based fee.
            </li>
            <li>
              We will say “yes” to all reasonable requests. Ask us to limit what
              we use or share.You can ask us not to use or share certain health
              information for treatment, payment, or our operations. We are not
              required to agree to your request, and we may say “no” if it would
              affect your care.
            </li>
            <li>
              If you pay for a service or health care item out-of-pocket in
              full, you can ask us not to share that.
            </li>
            <li>
              Ask us to correct your medical record. You can ask us to correct
              health information about you that you think is incorrect or
              incomplete. Ask us how to do this. We may say “no” to your
              request, but we'll tell you why in writing within 60 days.
            </li>
            <li>
              Request confidential communications. You can ask us to contact you
              in a specific way (for example, home or office phone) or to send
              mail to a specific address. We will say “yes” unless a law
              requires us to share that information.
            </li>
            <li>
              Get a list of those with whom we've shared information. You can
              ask for a list (accounting) of the times we've shared your health
              information for six years prior to the date you ask, who we shared
              it with, and why. We will include all the disclosures except for
              those about treatment, payment, and health care operations, and
              certain other disclosures (such as any you asked us to make).
              We’ll provide one accounting a year for free but will charge a
              reasonable, cost-based fee if you ask for another one within 12
              months.
            </li>
            <li>
              Get a copy of this privacy notice. You can ask for a paper copy of
              this notice at any time, even if you have agreed to receive the
              notice electronically. We will provide you with a paper copy
              promptly.
            </li>
            <li>
              Choose someone to act for you. If you have given someone medical
              power of attorney or if someone is your legal guardian, that
              person can exercise your rights and make choices about your health
              information. We will make sure the person has this authority and
              can act for you before we take any action.
            </li>
            <li>
              File a complaint if you feel your rights are violated. You can
              complain if you feel we have violated your rights by contacting us
              using the information on page 1. You can also file a complaint
              with the U.S. Department of Health and Human Services Office for
              Civil Rights by sending a letter to 200 Independence Avenue, S.W.,
              Washington, D.C. 20201, calling 1-877-696-6775, or visiting{" "}
              <a href="http://www.hhs.gov/ocr/privacy/hipaa/complaints/">
                hhs.gov/ocr/privacy/hipaa/complaints
              </a>
              .
            </li>
            <li> We will not retaliate against you for filing a complaint.</li>
          </ul>

          <h1 className={overlock.className}>Your Choices</h1>
          <br />
          <p>
            For certain health information, you can tell us your choices about
            what we share. If you have a clear preference for how we share your
            information in the situations described below, talk to us. Tell us
            what you want us to do, and we will follow your instructions. In
            these cases, you have both the right and choice to tell us to:
          </p>
          <br />
          <p>
            Share information with your family, close friends, or others
            involved in your care
          </p>
          <br />
          <p>Share information in a disaster relief situation</p>
          <br />
          <p>Include your information in a hospital directory</p>
          <br />
          <p>
            If you are not able to tell us your preference, for example if you
            are unconscious, we may go ahead and share your information if we
            believe it is in your best interest. We may also share your
            information when needed to lessen a serious and imminent threat to
            health or safety.
          </p>
          <br />
          <p>
            In these cases we never share your information unless you give us
            written permission:
          </p>
          <br />
          <ul>
            <li>Marketing purposes</li>
            <li>Sale of your information</li>
            <li>Most sharing of psychotherapy notes</li>
            <li>
              In the case of fundraising: We may contact you for fundraising
              efforts, but you can tell us not to contact you again.
            </li>
          </ul>

          <h1 className={overlock.className}>Our Uses and Disclosures</h1>
          <br />
          <p>How do we typically use or share your health information?</p>
          <br />
          <p>
            We typically use or share your health information in the following
            ways.
          </p>
          <br />
          <ul>
            <li>
              Treat you. We can use your health information and share it with
              other professionals who are treating you. Example: A doctor
              treating you for an injury asks another doctor about your overall
              health condition.
            </li>
            <li>
              Run our organization. We can use and share your health information
              to run our practice, improve your care, and contact you when
              necessary. Example: We use health information about you to manage
              your treatment and services.
            </li>
            <li>
              Bill for your services. We can use and share your health
              information to bill and get payment from health plans or other
              entities. Example: We give information about you to your health
              insurance plan so it will pay for your services.
            </li>
          </ul>
          <br />
          <p>How else can we use or share your health information?</p>
          <br />
          <ul>
            <li>
              We are allowed or required to share your information in other ways
              - usually in ways that contribute to the public good, such as
              public health and research. We have to meet many conditions in the
              law before we can share your information for these purposes. For
              more information see:
              <a href="http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html">
                hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html
              </a>
              .
            </li>
            <li>
              Help with public health and safety issues. We can share health
              information about you for certain situations such as:
              <ul>
                <li>Preventing disease</li>
                <li>Helping with product recalls</li>
                <li>Reporting adverse reactions to medications</li>
                <li>
                  Reporting suspected abuse, neglect, or domestic violence
                </li>
                <li>
                  Preventing or reducing a serious threat to anyone's health or
                  safety
                </li>
                <li>
                  For research purposes and by business associates of the Site
                  for research recruitment purposes
                </li>
                <li>
                  Comply with the law. We will share information about you if
                  state or federal laws require it, including with the
                  Department of Health and Human Services if it wants to see
                  that we're complying with federal privacy law.
                </li>
                <li>
                  Respond to organ and tissue donation requests. We can share
                  health information about you with organ procurement
                  organizations.
                </li>
                <li>
                  Work with a medical examiner or funeral director. We can share
                  health information with a coroner, medical examiner, or
                  funeral director when an individual dies.
                </li>
                <li>
                  Address worker's compensation, law enforcement, and other
                  government requests. We can use or share health information
                  about you:
                </li>
                <li>For worker's compensation claims</li>
                <li>
                  For law enforcement purposes or with a law enforcement
                  official
                </li>
                <li>
                  With health oversight agencies for activities authorized by
                  law
                </li>
                <li>
                  For special government functions such as military, national
                  security, and presidential protective services
                </li>
                <li>Respond to lawsuits and legal actions</li>
                <li>
                  We can share health information about you in response to a
                  court or administrative order, or in response to a subpoena.
                </li>
              </ul>
            </li>
          </ul>

          <h1 className={overlock.className}>Our Responsibilities</h1>
          <br />
          <p>
            We are required by law to maintain the privacy and security of your
            protected health information.
          </p>
          <br />
          <p>
            We will let you know promptly if a breach occurs that may have
            compromised the privacy or security of your information.
          </p>
          <br />
          <p>
            We must follow the duties and privacy practices described in this
            notice and give you a copy of it.
          </p>
          <br />
          <p>
            We will not use or share your information other than as described
            here unless you tell us we can in writing. If you tell us we can,
            you may change your mind at any time. Let us know in writing if you
            change your mind.
          </p>
          <br />
          <p>
            <strong>For more information see:</strong>
            <a href="http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html">
              hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html
            </a>
            .
          </p>
          <br />
          <p>Changes to the Terms of this Notice</p>
          <br />
          <p>
            We can change the terms of this notice, and the changes will apply
            to all information we have about you. The new notice will be
            available upon request, in our office, and on our website.
          </p>
          <br />
          <p>Other Instructions for Notice</p>
          <br />
          <p>Effective Date of this Notice: 04/01/2020</p>
          <br />
          <p>
            If you need to contact concerning this notice or your privacy you
            may reach our privacy officer at:
          </p>
          <br />
          <p><strong>Prana Health, PLLC</strong></p>
          <br />
          <p><strong>200 Forsythe St.</strong></p>
          <br />
          <p>Your Rights</p>
          <br />
          <p>Our Uses and Disclosures</p>
          <br />
          <p><strong>Fayetteville, NC 28303</strong></p>
          <br />
          <p><strong>Phone: (910) 824-7619</strong></p>
          <br />
          <p><strong>Fax: (910) 824-7754</strong></p>
          <br />
        </div>
      </section>
    </main>
  );
}
