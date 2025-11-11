import React from 'react'
import {motion}from "framer-motion";
const StatsCards = ({total,donors}) => {
  return (
    <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
    >
<div className="bg-gradient-to-r from-pink-200 to-pink-400 rounded-xl shadow-lg p-6 text-center text-white">
    <h2 className='text-2xl font-bold'>Total Dontations</h2>
    <p className='text-4xl font-semibold mt-2'>₹{total}</p>

</div>

<div className="bg-gradient-to-r from-purple-200 to-purple-400 rounded-xl shadow-lg p-6 text-center text-white">
    <h2 className='text-2xl font-bold'>Total Donors</h2>
<p className='text-4xl font-semibold mt-2'>{donors}</p>
</div>

<div className='bg-gradient-to-r from-blue-200 to-blue-400 rounded-xl shadow-lg p-6 text-center text-white'>
<h2 className='text-2xl font-bold'>Avg. Donation</h2>
<p className='text-4xl font-semibold mt-2'>₹{(total / donors).toFixed(0)}</p>
</div>


    </motion.div>
  )
}

export default StatsCards