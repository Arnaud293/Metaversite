'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import {TypingText, TitleText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title='| People on the world' textStyles='text-center' />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles='text-center'/>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover md:object-contain sm:object-contain"/>
        <div className="absolute bottom-[15%] right-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people"  className="w-full h-full"/>
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people"  className="w-full h-full"/>
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people"  className="w-full h-full"/>
        </div>
        <div className="absolute bottom-[35%] left-[23%] w-[180px] h-[140px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <div className="relative">
            <img src="/people-card1.png" alt="people-card" className="w-full h-full object-cover rounded-[24px] brightness-110" />
            <div className="absolute flex w-full h-full top-0">
              <img src="/people-min-1.png" alt="people-min-1" className="absolute top-[50%] z-3 left-[15px]" />
              <img src="/people-min-2.png" alt="people-min-2" className="absolute top-[50%] z-2 left-[28px]"/>
              <img src="/people-min-3.png" alt="/people-min-3" className="absolute top-[50%] z-1 left-[38px]"/>
              <p className="absolute top-[53%] right-3 text-white text-[10px]">+264 has joined</p>
              <h5 className="absolute bottom-[10%] left-[15px] font-bold text-white">The Upside Down</h5>
            </div>
          </div>
        </div>
        <div className="absolute top-6 right-[18%] w-[180px] h-[140px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <div className="relative">
            <img src="/people-card2.png" alt="people-card" className="w-full h-full object-cover rounded-[24px] brightness-110" />
            <div className="absolute flex w-full h-full top-0">
              <img src="/people-min-1.png" alt="people-min-1" className="absolute top-[50%] z-3 left-[15px]" />
              <img src="/people-min-2.png" alt="people-min-2" className="absolute top-[50%] z-2 left-[28px]"/>
              <img src="/people-min-3.png" alt="/people-min-3" className="absolute top-[50%] z-1 left-[38px]"/>
              <p className="absolute top-[53%] right-3 text-white text-[10px]">+264 has joined</p>
              <h5 className="absolute bottom-[10%] left-[15px] font-bold text-white">Hawkings Labs</h5>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
