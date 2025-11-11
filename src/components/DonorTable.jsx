import React from 'react'
import { motion } from 'framer-motion'

const DonorTable = ({ data = [] }) => { 
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 mt-10 w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Donor List
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-pink-100 text-left">
            <th className="p-2 md:p-3">Name</th>
            <th className="p-2 md:p-3">Amount</th>
            <th className="p-2 md:p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((donor, index) => (
              <tr key={index} className="border-b hover:bg-pink-50 transition">
                <td className="p-2 md:p-3">{donor.name}</td>
                <td className="p-2 md:p-3 text-pink-600 font-semibold">
                  ₹{donor.amount}
                </td>
                <td className="p-2 md:p-3 text-gray-600">{donor.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-2 md:p-4 text-gray-500">
                No donors yet 💸
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  )
}

export default DonorTable
