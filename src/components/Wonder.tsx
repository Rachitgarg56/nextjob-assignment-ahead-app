"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Wonder: React.FC = () => {
  return (
    <section className="mt-8 md:mt-16 lg:mb-32 rounded-3xl bg-blue-50 p-4 md:p-10 mx-4 lg:mx-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <h3 className="text-center text-gray-600 text-lg font-semibold">
          Let your friends, family, and co-worker (Anonymously) rate your social
          skills.
        </h3>
        <h1 className="text-3xl md:text-[2.6rem] font-bold text-center mt-4">
          Ever wondered what others think of you?
        </h1>
      </motion.div>
      <div className="mt-8 flex justify-center relative">
        <div className="hidden md:block absolute top-[1.5rem] w-[600px] text-transparent border-t border-yellow-700 h-4 border-dashed">
          
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-evenly w-[70rem] z-[10]">
          <div className="flex md:flex-col gap-4 md:justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image width={50} height={50} alt="" src="/badge.png" />
              </div>
            </div>
            <div className="md:text-center font-semibold">
              Answer questions on <br />
              your skill.
            </div>
          </div>

          <div className="flex md:flex-col gap-4 md:justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image width={50} height={50} alt="" src="/badge.png" />
              </div>
            </div>
            <div className="md:text-center font-semibold">
              Let other Anonymously answer <br />
              question about you.
            </div>
          </div>

          <div className="flex md:flex-col gap-4 md:justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image width={50} height={50} alt="" src="/badge.png" />
              </div>
            </div>
            <div className="md:text-center font-semibold">
              Find you where others and <br />
              you find the view same ways.
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
        <div className="mt-16 shadow bg-white rounded-xl w-[40rem] p-6 py-24 relative">
          <div className="flex justify-between ">
            <div className="h-4 w-4 rounded-full bg-violet-600 z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                  
                }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0, scale: 0.5 },
                }}
              >
                <div className="absolute text-white p-2 bg-violet-600 rounded-[0.6rem] top-[-3rem] left-[-1rem]">
                  You
                </div>
              </motion.div>
            </div>
            <div className="h-4 w-4 rounded-full bg-blue-400 z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8,delay:0.4  }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute whitespace-nowrap text-white p-3 bg-blue-400 rounded-[0.6rem] top-[2rem] md:left-[-4rem] lg:left-[42%]">
                  Anonymous 1
                </div>
              </motion.div>
            </div>
            <div className="h-4 w-4 rounded-full bg-yellow-400 z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8,delay:0.4  }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute  whitespace-nowrap  text-white p-2 bg-yellow-400 rounded-[0.6rem] top-[-3rem] left-[0.2rem]">
                  Anonymous 2
                </div>
              </motion.div>
            </div>
            <div className="h-4 w-4 rounded-full bg-green-400 z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8,delay:0.4 }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="hidden md:block absolute  whitespace-nowrap   text-white p-3 bg-green-400 rounded-[0.6rem]  top-[2rem] md:left-[-5rem] lg:left-[52%]">
                  Anonymous 3
                </div>
              </motion.div>
            </div>
          </div>
          <div className="border-t border-yellow-700 h-1 absolute top-[50%] w-[250px] md:w-[590px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Wonder;
