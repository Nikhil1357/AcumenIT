import React from 'react'

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import {motion} from 'framer-motion'


export default function Hero() {
  return (
    <section>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:true, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col px-6`}
    >
    <div
    className="flex justify-center items-center flex-col relative z-10"
    >
    {/* <motion.img variants={textVariant(0.5)} width="100px" src="acumen_logo.png"/>
    <motion.img variants={textVariant(0.6)} width="220px" src="acumen_text.png"/> */}
    


    </div>

    <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full"
      >
        <div className="absolute w-full h-[8vh] rounded-tl-[20vw] z-[0]" />

        <img
          src="bg6.jpg"
          alt="hero_cover"
          className="w-full h-[90vh] mt-4 object-bottom object-cover rounded-tl-[20vw] z-10 relative"
        />
    </motion.div>
    </motion.div>
    {/* <div
    style={{height:'100vh'}}>

    </div> */}
  </section>
  )
}
