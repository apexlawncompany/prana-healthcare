import React, { useState } from "react";
import styles from "./datepicker.module.css";
import Image from "next/image";

const DateTimePicker = ({ onBack, onNext }) => {
  // 1. selectedDate is null by default
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "1:30 pm",
    "1:45 pm",
    "2:00 pm",
    "2:15 pm",
    "2:30 pm",
    "2:45 pm",
    "3:00 pm",
    "3:15 pm",
    "3:30 pm",
    "3:45 pm",
    "4:00 pm",
    "4:15 pm",
    "4:30 pm",
    "4:45 pm",
    "5:00 pm",
    "5:15 pm",
    "5:30 pm",
    "5:45 pm",
    "6:00 pm",
    "6:15 pm",
    "6:30 pm",
    "6:45 pm",
  ];

  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const getCalendarDays = () => {
    const days = [];
    const weekdayOffset = (startDay + 6) % 7; // adjust so Mon = 0
    for (let i = 0; i < weekdayOffset; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d)
      );
    }
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleNext = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }
    onNext({ date: selectedDate, time: selectedTime });
  };

  const isSameDay = (date1, date2) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();
  // Helper to check if a date is today
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPastDay = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day < today;
  };

  const isSunday = (day) => day.getDay() === 0;

  const calendarDays = getCalendarDays();

  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2 className={styles.heading}>Select Date & Time</h2>
      </div>

      {/* Calendar & Time Grid */}
      <div className={styles.gridWrapper}>
        {/* Calendar */}
        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <button className={styles.calendarNav} onClick={handlePrevMonth}>
              <Image
                src="/icons/chevron-left.png"
                alt="Previous Month"
                width={20}
                height={20}
              />
            </button>
            <span>
              {currentMonth.toLocaleString("default", { month: "long" })}{" "}
              {currentMonth.getFullYear()}
            </span>
            <button className={styles.calendarNav} onClick={handleNextMonth}>
              <Image
                src="/icons/chevron-right.png"
                alt="Next Month"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className={styles.weekdays}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className={styles.weekday}>
                {d}
              </div>
            ))}
          </div>

          <div className={styles.calendarGrid}>
            {calendarDays.map((day, index) => {
              const isDisabled = !day || isPastDay(day) || isSunday(day);
              return (
                <div
                  key={index}
                  className={
                    `${styles.day} ` +
                    (isDisabled ? ` ${styles.disabled}` : "") +
                    (day && isToday(day) && !selectedDate && !isDisabled
                      ? ` ${styles.today}`
                      : "") +
                    (day &&
                    selectedDate &&
                    isSameDay(day, selectedDate) &&
                    !isDisabled
                      ? ` ${styles.selected}`
                      : "")
                  }
                  onClick={() => !isDisabled && setSelectedDate(day)}
                >
                  {day ? day.getDate() : ""}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Show time grid only if a date is selected */}
        {selectedDate && (
          <div className={styles.timeGrid}>
            {times.map((time) => (
              <button
                key={time}
                className={`${styles.timeButton} ${
                  selectedTime === time ? styles.selectedTime : ""
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button onClick={onBack} className={styles.backButton}>
          Back
        </button>
        <button onClick={handleNext} className={styles.navButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DateTimePicker;
