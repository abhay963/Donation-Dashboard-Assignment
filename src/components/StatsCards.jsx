import React from 'react'
import {motion}from "framer-motion";
const StatsCards = () => {
  return (
    <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
    >



    </motion.div>
  )
}

export default StatsCards