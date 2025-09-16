"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./floatingMenu.module.css";

export default function FloatingMenu() {
  const [open, setOpen] = useState(true);

  return (
  <div className={styles.floatingMenu}>
      {/* Arrow Button */}
  <button className={styles.arrowBtn} onClick={() => setOpen(!open)}>
        <Image
          src={open ? "/icons/up-arrow.png" : "/icons/up-arrow.png"}
          alt="Toggle"
          width={24}
          height={24}
        />
      </button>

      {open && (
        <>
          {/* Phone */}
          <div className={styles.menuItem}>
            <button className={styles.menuBtn}>
              <Image src="/icons/call.png" alt="Phone" width={24} height={24} />
            </button>
            <span className={styles.tooltip}>Phone</span>
          </div>

          {/* Direction */}
          <div className={styles.menuItem}>
            <button className={styles.menuBtn}>
              <Image src="/icons/road-map.png" alt="Direction" width={24} height={24} />
            </button>
            <span className={styles.tooltip}>Direction</span>
          </div>
        </>
      )}
    </div>
  );
}
