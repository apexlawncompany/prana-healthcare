"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./accordion.module.css";
import { Overlock } from "next/font/google";

const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={overlock.className}>{title}</h2>
        <div className={styles.icon}>
          <Image
            src={
              isOpen
                ? "/icons/accordian-minus.png"
                : "/icons/accordian-plus.png"
            }
            alt={isOpen ? "Collapse" : "Expand"}
            width={20}
            height={20}
          />
        </div>
      </div>

      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
}
