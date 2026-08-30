"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/content/wedding";

const target = new Date(wedding.wedding.dateTime).getTime();
const labels = ["Days", "Hours", "Minutes", "Seconds"] as const;

function getTime(): [number, string][] {
  const d = Math.max(0, target - Date.now());
  return [
    [Math.floor(d / 86400000), "Days"],
    [Math.floor((d / 3600000) % 24), "Hours"],
    [Math.floor((d / 60000) % 60), "Minutes"],
    [Math.floor((d / 1000) % 60), "Seconds"],
  ];
}

export function Countdown() {
  const [time, setTime] = useState<[number, string][]>(labels.map((label) => [0, label]));

  useEffect(() => {
    const tick = () => setTime(getTime());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to the wedding">
      {time.map(([value, label]) => (
        <div key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
