import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";
import { motion } from "framer-motion";
import { donations } from "../data";



const DonationTrends = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  let cumulative = 0;
  const chartData = donations.map((item, index) => {
    cumulative += item.amount;
    return { ...item, cumulative, index };
  });

  const barSize = windowWidth < 768 ? 25 : 40;
  const showLabels = windowWidth >= 640;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 w-full mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
         Interactive Donation Trends
      </h2>

      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            onMouseMove={(state) => {
              if (state.isTooltipActive) setActiveIndex(state.activeTooltipIndex);
            }}
            onMouseLeave={() => setActiveIndex(null)}
            margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
          >
            
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
         
         
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
          
          
            <Tooltip
              contentStyle={{
                backgroundColor: "#fdf2f8",
                border: "1px solid #f9a8d4",
                borderRadius: "10px",
              }}
              formatter={(value, name) => [`₹${value}`, name]}
            />
            <Legend />

        
        
            <Bar
              dataKey="amount"
              barSize={barSize}
              radius={[10, 10, 0, 0]}
              name="Daily Donation"
              fill="#ec4899"
            >
              {showLabels && (
                <LabelList dataKey="amount" position="top" formatter={(val) => `₹${val}`} />
              )}
            </Bar>

         
         
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9333ea" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#9333ea" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <Line
              type="monotone"
              dataKey="cumulative"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{ r: 6, fill: "#9333ea", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 8 }}
              animationDuration={1500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

     
    </motion.div>
  );
};

export default DonationTrends;
