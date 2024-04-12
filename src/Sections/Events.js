import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { EventDetails } from '../constants';
import './Events.css';
import EventCard from '../components/EventCard';

export default function Events() {
    const eventsRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            });
        });

        observer.observe(eventsRef.current);

        // Clean up the observer
        return () => observer.disconnect();
    }, []);

    return (
        <section id='events' className={`${styles.paddings}`} ref={eventsRef}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="relative z-10 px-[6vw] Event"
            >
                <h1>| Events </h1>
                <div className="resp Events z-1 py-12">
                    {EventDetails.map((event, index) => (
                        <EventCard key={event.id} {...event} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
