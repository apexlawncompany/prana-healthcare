"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./floatingMenu.module.css";

export default function FloatingMenu() {
  const [open, setOpen] = useState(true);
  const [label, setLabel] = useState("");
  const router = useRouter();

  const toggleOpen = useCallback(() => setOpen((v) => !v), []);

  const handleDirectionClick = useCallback(() => {
    router.push("/direction");
  }, [router]);

  return (
    <div className={styles.floatingMenu}>
      {/* Label appears only when open */}
      {open && label && (
        <div
          className={`${styles.label} ${
            label === "Direction" ? styles.directionLabel : ""
          } ${label ? styles.visible : ""}`}
          role="status"
          aria-live="polite"
        >
          {label}
        </div>
      )}

      {/* Arrow toggle */}
      <button
        className={styles.arrowBtn}
        onClick={toggleOpen}
        aria-expanded={open}
        aria-controls="floating-menu-items"
        aria-label={open ? "Collapse menu" : "Expand menu"}
      >
        <Image
          src={open ? "/icons/down-arrow-white.png" : "/icons/up-arrow-white.png"}
          alt="Toggle menu"
          width={24}
          height={24}
        />
      </button>

      {/* Menu Items only when open */}
      {open && (
        <div id="floating-menu-items" className={styles.menuItem}>
          <button
            className={styles.menuBtn}
            href="tel:+19108247619"
            onMouseEnter={() => setLabel("Phone")}
            onMouseLeave={() => setLabel("")}
            onFocus={() => setLabel("Phone")}
            onBlur={() => setLabel("")}
            aria-label="Call Prana Healthcare"
          >
            <Image src="/icons/call-white.png" alt="Phone" width={24} height={24} />
          </button>

          {/* Direction */}
          <button
            className={styles.mapBtn}
            onMouseEnter={() => setLabel("Direction")}
            onMouseLeave={() => setLabel("")}
            onFocus={() => setLabel("Direction")}
            onBlur={() => setLabel("")}
            onClick={handleDirectionClick}
            aria-label="Get directions to Prana Healthcare"
          >
            <Image src="/icons/road-map.png" alt="Direction" width={24} height={24} />
          </button>
        </div>
      )}
    </div>
  );
}
