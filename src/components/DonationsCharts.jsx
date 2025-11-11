import React from 'react'
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer
}
from "recharts";
import { motion } from "framer-motion";


const DonationsCharts = ({data}) => {
  return (
    <motion.div
     className="bg-white rounded-2xl shadow-lg p-6 mt-10 w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}>
<h2 className='text-xl font-semibold mb-4 text-center text-gray-700'>Donation Trends</h2>
<ResponsiveContainer width="100% height={300}">
    <BarChart data={data}>
        <CartesianGrid strokeDasharray="3.3"/>
        <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#ec4899" radius={[10, 10, 0, 0]} />

    </BarChart>


</ResponsiveContainer>
    </motion.div>
  );
};

export default DonationsCharts