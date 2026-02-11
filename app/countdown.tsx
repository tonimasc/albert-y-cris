"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-06-06T18:00:00+02:00"); // June 6, 2026 at 18:00 CEST (Madrid)

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] =
    useState<ReturnType<typeof getTimeLeft>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <p className="text-center font-serif text-base text-chocolate">&nbsp;</p>
    );
  }

  if (!timeLeft) {
    return (
      <p className="text-center font-serif text-base text-chocolate">
        Hoy es el gran día!
      </p>
    );
  }

  return (
    <p className="text-center font-serif text-base text-chocolate">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </p>
  );
}
