import React from 'react'

import { motion } from 'framer-motion';

import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { EventDetails } from '../constants';

import './Events.css'
import EventCard from '../components/EventCard';

export default function Events() {
    return (
        <section
            className={`${styles.paddings}`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
                className="relative z-10 px-[6vw] Event"
            >
                <h1>| Events </h1>
                {/* <div className="gradient-03 z-0"/> */}
                <div
                    className="resp Events z-1 py-12"

                >
                    {EventDetails.map((world, index) => {

                        return (
                            <EventCard key={world.id}
                                {...world}
                                index={index} />
                        )

                    })}
                    {/* <div className="gradient-04 z-0"/> */}
                </div>
                {/* <div 
      style={{
        backgroundImage: "radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(68,36,164,1) 3.7%, rgba(84,212,228,1) 92.7% )",
        position: "absolute",
        width: "404px",
        height: "800px",
        left: "20%",
        top: "10%",
        filter: "blur(220px)",
        transform: "rotate(-114.2deg)",
        zIndex: "-1",
        overflow: "hidden",
        
      }}/> */}
            </motion.div>

        </section>
    )
}
