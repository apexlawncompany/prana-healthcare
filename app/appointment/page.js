"use client";

import styles from "./appointment.module.css";
import Image from "next/image";
import { Overlock } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import DateTimePicker from "@/components/DatePicker";
import { useState } from "react";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });
const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["500"] });

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [appointments, setAppointments] = useState([]);

  // Selections from Step 1
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    symptoms: "",
    medicalCard: null,
  });

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/appointment/appointment-doctor.jpg"
          alt="Doctor Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              Request an Appointment
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          {/* Left Form Section */}
          {step === 1 && (
            <div className={styles.formSection}>
              <h2>Request an Appointment</h2>
              <br />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
              >
                <label>Choose Your Service *</label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.selectInput}
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">— Select —</option>
                    <option value="Primary care">Primary care</option>
                    <option value="Pulmonary Services">
                      Pulmonary Services
                    </option>
                    <option value="Sleep Services">Sleep Services</option>
                    <option value="Long-covid">Long-covid</option>
                    <option value="Pediatric Sleep Services">
                      Pediatric Sleep Services
                    </option>
                    <option value="Pediatric Asthma">Pediatric Asthma</option>
                  </select>
                </div>

                <label>Doctor</label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.selectInput}
                    required
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                  >
                    <option value="">— Any —</option>
                    <option value="Dr. Rahul Kakkar">Dr. Rahul Kakkar</option>
                    <option value="Dr. Alfred Bunao">Dr. Alfred Bunao</option>
                  </select>
                </div>

                <label>Location</label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.selectInput}
                    required
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">— Any —</option>
                    <option value="200 Forsythe St., Fayetteville, NC 28303">
                      200 Forsythe St., Fayetteville, NC 28303
                    </option>
                    <option value="4546 NC-87, Sanford, NC 27332">
                      4546 NC-87, Sanford, NC 27332
                    </option>
                  </select>
                </div>

                <button className={styles.stepOneNextBtn} type="submit">
                  Next
                </button>
              </form>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className={styles.formSection}>
              <DateTimePicker
                onBack={() => setStep(1)}
                onNext={(dateTimeData) => {
                  const newAppointment = {
                    service: selectedService,
                    doctor: selectedDoctor,
                    location: selectedLocation,
                    date: dateTimeData.date,
                    time: dateTimeData.time,
                  };
                  setAppointments([...appointments, newAppointment]);
                  setStep(3);
                }}
              />
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className={styles.formSection}>
              <h2>Your Reservation</h2>
              <br />
              {appointments.map((item, index) => (
                <div key={index} className={styles.reservationDetails}>
                  <div className={styles.reservationDetailsHeader}>
                    <strong>{item.service}</strong>
                    <strong>
                      {item.date.toLocaleString("default", { month: "long" })},{" "}
                      {item.date.getFullYear()}, {item.time}
                    </strong>
                  </div>
                  <hr />
                  <div className={styles.reservationDetailsBody}>
                    <div>
                      <p>
                        <strong style={{ color: "#7f7f7f" }}>Location</strong>
                      </p>
                      <p>{item.location}</p>
                    </div>
                    <div>
                      <p>
                        <strong style={{ color: "#7f7f7f" }}>Doctor</strong>
                      </p>
                      <p>{item.doctor}</p>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.reservationDetailsFooter}>
                    <button
                      className={styles.removeBtn}
                      onClick={() => {
                        const updated = appointments.filter(
                          (_, i) => i !== index
                        );
                        setAppointments(updated);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className={styles.buttonRow}>
                <button
                  className={styles.addMore}
                  onClick={() => {
                    setSelectedService("");
                    setSelectedDoctor("");
                    setSelectedLocation("");
                    setStep(1);
                  }}
                >
                  Add More
                </button>
                <button className={styles.nextFinal} onClick={() => setStep(4)}>
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className={styles.formSection}>
              <h2>Your Information</h2>
              <br />
              <p style={{ color: "#7f7f7f" }}>
                Required fields are followed by{" "}
                <span style={{ color: "red" }}>*</span>
              </p>
              <br />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Final submission logic here
                  console.log("Final data", { appointments, userInfo });
                }}
              >
                <label>
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  className={styles.userInfoInputField}
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  placeholder="Name"
                />

                <label>
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  className={styles.userInfoInputField}
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  placeholder="Email"
                />

                <label>
                  Phone <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  className={styles.userInfoInputField}
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  placeholder="Phone"
                />

                <label>Describe your symptoms in one sentence.</label>
                <textarea
                  className={styles.userInfoInputField}
                  value={userInfo.symptoms}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, symptoms: e.target.value })
                  }
                ></textarea>

                <label>
                  Medical Card <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="file"
                  required
                  className={styles.userInfoInputField}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, medicalCard: e.target.files[0] })
                  }
                />

                <div className={styles.buttonRow}>
                  <button
                    className={styles.addMore}
                    type="button"
                    onClick={() => setStep(3)}
                  >
                    Back
                  </button>
                  <button className={styles.nextFinal} type="submit">
                    Reserve
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Right Clinic Info */}
          <div className={styles.infoSection}>
            <h1 className={`${styles.brand} ${overlock.className}`}>
              Prana Health
            </h1>
            <br />
            <p className={`${styles.subtitle} ${noto_serif.className}`}>
              Dedicated To Your Health & Wellness
            </p>

            <div className={styles.address}>
              <div className={styles.addressBlock}>
                <p style={{ color: "#7f7f7f" }}>
                  200 Forsythe St.,
                  <br />
                  Fayetteville, NC 28303
                </p>
                <p>
                  <Image
                    src="/icons/call.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />{" "}
                  <span className={styles.phoneNumber}>(910) 824-7619</span>
                </p>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.addressBlock}>
                <p style={{ color: "#7f7f7f" }}>
                  4546 NC-87, Sanford, NC 27332 <br /> United States
                </p>
                <p>
                  <Image
                    src="/icons/call.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />{" "}
                  <span className={styles.phoneNumber}>(919) 935-0773</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
