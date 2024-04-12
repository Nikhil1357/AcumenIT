import React from 'react'
import './About.css'
import styles from '../styles'

export default function About() {
  return (
    <div
    className={`${styles.paddings} about`}>
        <h1> | About</h1>
        <p
        className='pt-12'
        >Welcome to the official website of <span>Acumen</span> for the <span>Information Technology</span> Branch at <span>Vasavi College of Engineering!</span> We are dedicated to fostering creativity and technical expertise among our students. Each year, we select a theme at the forefront of IT innovation and delve into its complexities through workshops, seminars, competitions, and hands-on activities. Whether you're a coding aficionado, tech enthusiast, or simply curious about IT advancements, Acumen offers something for everyone. Stay tuned for updates on this year's theme and exciting events. Join us in igniting curiosity, showcasing skills, and forging enduring connections at <span>Acumen for the IT Branch of Vasavi College of Engineering</span>.</p>
    </div>
  )
}
