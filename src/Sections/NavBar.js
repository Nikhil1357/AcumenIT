import React from 'react'
import {motion} from 'framer-motion';
import {navVariants} from '../utils/motion'
import styles from '../styles'

export default function NavBar() {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    className={`${styles.xPaddings} py-6 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01'/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
        {/* <img
          src='/search.svg'
          alt='search'
          className='w-[24px] h-[24px] object-contain'
        /> */}
        {/* <h2
        className='font-extrabold text-[24px] leading-[30px] text-white'
      >ACUMEN IT</h2> */}
        
        <div
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        <img width={150} src='acumen_it_logo.png'/>
        {/* <img width={150} src='acumen_text.png'/> */}
        </div>
        <img src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'/>
      </div>
    </motion.nav>
  )
}
