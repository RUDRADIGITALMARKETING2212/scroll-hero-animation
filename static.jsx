"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Stats() {
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.from(statsRef.current, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      delay: 1,
      ease: "power3.out"
    });
  }, []);

  const stats = [
    { value: "95%", label: "Performance Boost" },
    { value: "80%", label: "User Engagement" },
    { value: "120%", label: "Growth Rate" }
  ];

  return (
    <div className="flex gap-12 mt-10">
      {stats.map((s, i) => (
        <div
          key={i}
          ref={el => statsRef.current[i] = el}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">{s.value}</h2>
          <p className="text-gray-400">{s.label}</p>
        </div>
      ))}
    </div>
  );
}