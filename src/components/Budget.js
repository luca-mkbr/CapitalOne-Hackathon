import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './Budget.css'

const Budget = () => {
  const COLORS = ['#F6BD60', '#4DA1A9', '#FF6663'];
  const data = [
    { name: 'Savings', value: 20 },
    { name: 'Necessities', value: 50 },
    { name: 'Discretionary Spending', value: 30 }
  ];
  return (
    <div className="Budget">
      <div className="flex-container">
        <div className="flex-child">
          <PieChart width={550}
            height={550} >
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data}
              cx={250}
              cy={200}
              outerRadius={200}
              fill="#8884d8"
              label
            >
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <h1> Budget </h1>
        <div className="flex-child">
        </div>
      </div>
    </div>
  );
};

export default Budget;