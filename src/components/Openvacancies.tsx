"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Vacancy {
  jobTitle: string;
  position: string;
  location: string;
  pay: string;
}

const vacancies: Vacancy[] = [
  {
    jobTitle: "Senior Full-Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€65-85k, 0.5%-1.5% equity share options",
  },
  {
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€40-55k, 0.25%-0.50% equity share options",
  },
  {
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€20-24k, 0.5%-1.50% equity share options",
  },
];

const OpenVacancies: React.FC = () => {
  return (
    <section className="mt-6 md:mt-20 py-8 md:py-4 md:-mb-12 lg:mb-0 lg:py-8 px-4 text-center md:text-left lg:px-24 min-h-screen md:min-h-96">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: "-30%", y: "50%", opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1.5 },
          },
        }}
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">Open vacancies</h1>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-between gap-8">
        {vacancies.map((vac, index) => {
          return <HoverCard key={index} vac={vac} index={index} />;
        })}
      </div>
    </section>
  );
};

interface HoverCardProps {
  vac: Vacancy;
  index: number;
}

const HoverCard: React.FC<HoverCardProps> = ({ vac, index }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  return (
    <motion.div
      initial={{ height: 170 }}
      whileHover={{ height: 250 }}
      onHoverStart={() => setButtonVisible(true)}
      onHoverEnd={() => setButtonVisible(false)}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="bg-[#fefbec] rounded-lg hover:bg-[#ece7d1] hover:cursor-pointer"
    >
      <div className="rounded-2xl p-6 md:p-4 lg:p-6 px-4 lg:px-12">
        <h2 className="text-xl font-bold">{vac.jobTitle}</h2>

        <ul className="mt-4 text-sm font-semibold list-disc pl-4 flex flex-col items-start md:block">
          <li className="">{vac.position}</li>
          <li className="">{vac.location}</li>
          <li className="">{vac.pay}</li>
        </ul>
      </div>
      {isButtonVisible && (
        <motion.button
          initial="hidden"
          whileInView="visible"
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.7 },
          }}
          className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
        >
          Click Me
        </motion.button>
      )}
    </motion.div>
  );
};

export default OpenVacancies;
