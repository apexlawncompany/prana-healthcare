"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./floatingMenu.module.css";

export default function FloatingMenu() {
  const [open, setOpen] = useState(true);
  const [label, setLabel] = useState("");
  const router = useRouter();

  // Handle click actions
  const handlePhoneClick = () => {
    window.location.href = "tel:+19108247619";
  };

  const handleDirectionClick = () => {
    router.push("/direction");
  };

  return (
    <div className={styles.floatingMenu}>
      {/* Label appears only when open */}
      {open && label && (
        <div
          className={`${styles.label} ${
            label === "Direction" ? styles.directionLabel : ""
          }`}
        >
          {label}
        </div>
      )}

      {/* Arrow toggle */}
      <button className={styles.arrowBtn} onClick={() => setOpen(!open)}>
        <Image
          src={
            open ? "/icons/down-arrow-white.png" : "/icons/up-arrow-white.png"
          }
          alt="Toggle"
          width={24}
          height={24}
        />
      </button>

      {/* Menu Items only when open */}
      {open && (
        <div className={styles.menuItem}>
          {/* Phone */}
          <button
            className={styles.menuBtn}
            onMouseEnter={() => setLabel("Phone")}
            onMouseLeave={() => setLabel("")}
            onClick={handlePhoneClick}
          >
            <Image
              src="/icons/call-white.png"
              alt="Phone"
              width={24}
              height={24}
            />
          </button>

          {/* Direction */}
          <button
            className={styles.mapBtn}
            onMouseEnter={() => setLabel("Direction")}
            onMouseLeave={() => setLabel("")}
            onClick={handleDirectionClick}
          >
            <Image
              src="/icons/road-map.png"
              alt="Direction"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </div>
  );
}
