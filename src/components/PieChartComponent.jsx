import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { donations } from "../data";
import { motion } from "framer-motion";

const COLORS = ["#ec4899", "#9333ea", "#f59e0b", "#10b981", "#3b82f6", "#f43f5e"];

const PieChartComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const outerRadius = windowWidth < 768 ? 70 : 100;
  const showLabels = windowWidth >= 768;

  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-6 w-full mb-6 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
 
 
      <h2 className="text-xl font-semibold text-center text-pink-600 mb-6">
        Donations by Donor
      </h2>


      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={donations}
              dataKey="amount"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={outerRadius}
              label={showLabels ? (entry) => entry.name : false}
            >
              {donations.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `₹${value}`} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PieChartComponent;
