"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "./Stats";

gsap.registerPlugin(ScrollTrigger);

export default function Hero(){

  const heroRef = useRef();
  const carRef = useRef();
  const bgRef = useRef();
  const roadRef = useRef();

  useEffect(()=>{

    // HEADLINE STAGGER
    gsap.from(".letter",{
      opacity:0,
      y:80,
      stagger:0.05,
      duration:1,
      ease:"power4.out"
    });

    // PARALLAX BACKGROUND
    gsap.to(bgRef.current,{
      y:200,
      scrollTrigger:{
        trigger:heroRef.current,
        start:"top top",
        end:"bottom top",
        scrub:true
      }
    });

    // ROAD PARALLAX
    gsap.to(roadRef.current,{
      y:400,
      scrollTrigger:{
        trigger:heroRef.current,
        start:"top top",
        end:"bottom top",
        scrub:true
      }
    });

    // CAR CINEMATIC MOVE
    gsap.to(carRef.current,{
      y:-200,
      scale:1.3,
      rotation:5,
      scrollTrigger:{
        trigger:heroRef.current,
        start:"top top",
        end:"bottom top",
        scrub:true
      }
    });

  },[]);

  const text="WELCOME ITZ FIZZ".split("");

  return(
    <section
      ref={heroRef}
      className="h-screen relative flex flex-col items-center justify-center overflow-hidden"
    >

      {/* BACKGROUND */}
      <img
        ref={bgRef}
        src="/bg.png"
        className="absolute w-full top-0 left-0 object-cover"
      />

      {/* ROAD */}
      <img
        ref={roadRef}
        src="/road.png"
        className="absolute bottom-0 w-full"
      />

      {/* HEADLINE */}
      <h1 className="text-6xl font-bold tracking-[0.6em] z-10 text-center">
        {text.map((l,i)=>(
          <span key={i} className="letter inline-block">{l}</span>
        ))}
      </h1>

      <Stats/>

      {/* CAR */}
      <img
        ref={carRef}
        src="/car.png"
        className="absolute bottom-10 w-[600px] z-20"
      />

    </section>
  );
}