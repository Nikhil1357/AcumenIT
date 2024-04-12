import React from 'react'

import { useState } from "react";
import {motion} from 'framer-motion';

import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { EventDetails } from '../constants';
import TeamCard from '../components/TeamCard';
import './TeamPage.css';

function TeamPage() {
  
    const [active, setActive] = useState('world-2')
  
  
    return(
    <section
    className={`${styles.paddings}`} id="explore">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, amount:0.25}}
      className="relative z-10 px-[6vw] Team"
      >
      <h1 id='TeamHeading'>| Team </h1>

      <h2 id='TeamSubHeading'> Faculty </h2>
      {/* <div className="gradient-03 z-0"/> */}
          {/* <div className='absolute w-[50%] inset-0 gradient-02'/> */}
          <div
        className="resp TeamFaculty"
  
        >
        {EventDetails.map((world, index)=>{
          
          if(world.role === "Faculty")
          {
          return(
            <TeamCard key={world.id}
            {...world}
            index={index}/>
          )
          }
        })}
        
        </div>
        <h2 id='TeamSubHeading'> Students </h2>
        <div
        className="resp TeamNormal"
  
        >
        {EventDetails.map((world, index)=>{
  
          if(world.role !== "Faculty")
          {
          return(
            <TeamCard key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}/>
          )
          }
        })}
        
        </div>
        
      </motion.div>    
    </section>
  )
  }

export default TeamPage