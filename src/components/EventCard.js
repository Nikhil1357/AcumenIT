import React from 'react'
import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from "../utils/motion";
import './EventCard.css';


export default function EventCard({ id, imgUrl, title, desc, venue, link, index }) {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5, index * 0.5, 0.75)}
            className='relative outercard'

        >

            <img
                src={imgUrl}
                alt={title}
                className='card1'

            />
            <div
                className='card2'
            >
                <p
                    className='title'
                >{title}</p>
                <p
                    style={{
                        paddingBottom: "10%",
                    }}
                >{desc}</p>
                <p
                >Venue : {venue}</p>
                <a
                    href={link}
                    target='blank'
                    className='button'
                >Register</a>
            </div>
        </motion.div>
    )
}
