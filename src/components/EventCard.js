import React from 'react'
import {motion} from 'framer-motion';

import { staggerContainer, fadeIn } from "../utils/motion";
import styles from "../styles";
import {exploreWorlds} from '../constants';
import './EventCard.css';


export default function EventCard({id, imgUrl, title, index}) {
  return (
    <motion.div
  variants={fadeIn('right', 'spring', 0.5, index*0.5, 0.75)}
  className='relative outercard' 
 
  >
  
    <img
      src={imgUrl}
      alt="planet-04"
      className='card1'

    />
    <div
    className='card2'
    >
    <p
    className='title'
    >Webathon</p>
    <p
    style={{
      paddingBottom:"10%",
    }}
    >Get ready to boast your skills</p>
    <p
    >Venue : V Block</p>
    <button
    className='button'

    >Register</button>
    </div>
  </motion.div>
  )
}
