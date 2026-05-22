"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    month: "Step 1",
    title: "Map what's broken",
    description:
      "I come in, figure out what's eating your time, and run the day-to-day while we figure out what to fix.",
  },
  {
    month: "Step 2",
    title: "Build what fixes it",
    description:
      "We build the automations and systems that take it off your plate — workflows, tools, processes, whatever is creating the most friction.",
  },
  {
    month: "Step 3",
    title: "Systems in place",
    description:
      "You have a set of systems that actually work — and you understand how they run. From here we keep building, or you take it forward. Your call.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Connecting line — desktop only */}
      <div
        className="hidden md:block absolute top-4 left-[16%] right-[16%] h-px bg-accent/30"
        style={{
          transition: "opacity 0.8s ease 0.3s",
          opacity: visible ? 1 : 0,
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map(({ month, title, description }, i) => (
          <div
            key={month}
            style={{
              transitionDelay: `${i * 180}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            {/* Step dot */}
            <div className="w-8 h-8 rounded-full bg-accent text-white text-sm font-medium flex items-center justify-center mb-5 z-10 relative">
              {i + 1}
            </div>
            <span className="text-accent text-sm font-medium mb-2 tracking-wide uppercase">
              {month}
            </span>
            <h3 className="font-serif text-xl mb-3">{title}</h3>
            <p className="text-foreground/65 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
