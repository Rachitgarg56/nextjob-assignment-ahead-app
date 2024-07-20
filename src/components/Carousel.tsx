"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Carousel: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const boxContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting && boxContainerRef.current) {
      boxContainerRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: "smooth",
      });
    }
  }, [isIntersecting]);

  return (
    <section className="overflow-x-hidden lg:mt-12 lg:mb-32 p-4 lg:px-20" ref={ref}>
      <div className="flex flex-row items-center justify-between">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold md:px-4 md:mb-5">
            Does this sound familiar...
          </h1>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay: 0.3 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -390],
              y: [35, 20, 10, 0, -10],
              rotate: [-20, -45, -35, -35, -35, -35, -5],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image width={70} height={70} alt="" src="/red-ghost.png" />
        </motion.div>
      </div>
      <div
        className="p-10 flex space-x-8 md:gap-7 items-center overflow-x-auto hide-scrollbar h-250"
        ref={boxContainerRef}
      >
        {[
          {
            bgColor: "bg-purple-200",
            emoji: "😠",
            title: "You argue with a colleague",
            description:
              "You get angry and defensive, instead of staying open and working towards common ground",
          },
          {
            bgColor: "bg-blue-300",
            emoji: "😳",
            title: "You get a promotion at work",
            description:
              "You question yourself and wonder if you're an unqualified imposter instead of trusting yourself & your abilities",
          },
          {
            bgColor: "bg-yellow-200",
            emoji: "🤨",
            title: "You attend a class reunion",
            description:
              "You compare yourself with your peers and your self-judgment becomes more dependent on others.",
          },
          {
            bgColor: "bg-violet-600",
            emoji: "😒",
            title: "You are at a lively dinner party",
            description:
              "You play on your phone instead of confidently approaching strangers and striking up a chat",
          },
          {
            bgColor: "bg-blue-100",
            emoji: "😬",
            title: "You hit a dead end in a negotiation",
            description:
              "You get frazzled, nervous, and frustrated instead of staying optimistic and solution-oriented.",
          },
        ].map(({ bgColor, emoji, title, description }, index) => (
          <div
            key={index}
            className={`rounded-xl ${bgColor} min-w-[350px] p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}
          >
            <span className="text-3xl">{emoji}</span>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
