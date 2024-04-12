'use client';

import {motion} from 'framer-motion';

import { staggerContainer, fadeIn } from "../utils/motion";
import styles from "../styles";
import './TeamCard.css';


const TeamCard = ({id, imgUrl, title, index, active, handleClick}) => (
  <motion.div
//   variants={fadeIn('left', 'spring', 0.5, index*0.5, 0.75)}
    className='people-card-outer'
  >

    <div
    className='people-card'
    >
        <img src='prof1.png'/>
        <div
        className='people-card-body'
        >
        <h1>Abhiram Sreekar</h1>
        <p>Technical Lead</p>
        {/* <div
        className='social'
        >
            <img 
            width={"20px"}
            height={"20px"}
            src='./linkedin1.png'/>
            <img 
            width={"20px"}
            height={"20px"}
            src='.png'/>
        </div> */}
        </div>
    </div>

  </motion.div>
);

export default TeamCard;
