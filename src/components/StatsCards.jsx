import React from 'react';
import { motion } from "framer-motion";

const StatsCards = ({ total, donors }) => {
  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-pink-200 to-pink-400 rounded-xl shadow-lg p-4 md:p-6 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-lg md:text-2xl font-bold'>Total Donations</h2>
        <p className='text-xl md:text-4xl font-semibold mt-2'>₹{total}</p>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-purple-200 to-purple-400 rounded-xl shadow-lg p-4 md:p-6 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className='text-lg md:text-2xl font-bold'>Total Donors</h2>
        <p className='text-xl md:text-4xl font-semibold mt-2'>{donors}</p>
      </motion.div>

      <motion.div
        className='bg-gradient-to-r from-blue-200 to-blue-400 rounded-xl shadow-lg p-4 md:p-6 text-center text-white'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className='text-lg md:text-2xl font-bold'>Avg. Donation</h2>
        <p className='text-xl md:text-4xl font-semibold mt-2'>₹{(total / donors).toFixed(0)}</p>
      </motion.div>
    </>
  )
}

export default StatsCards;
