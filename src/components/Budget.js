import React from 'react'
import { PieChart, Pie, Tooltip} from 'recharts';
import './Budget.css'

const Budget = () => {
  const data = [
      {name: 'Savings', value:20},
      {name: 'Necessities', value:50},
      {name: 'Discretionary Spending', value:30}
  ];
  return (
    <div className= "Budget">
    <h1>Budget</h1>
     <PieChart width={400} height ={400}>
       <Pie
       dataKey="value"
       isAnimationActive={true}
       data={data01}
       cx={200}
       cy={200}
       outerRadius={80}
       fill="#8884d8"
       label
       />
       <Tooltip/>
     </PieChart>
     </div>
  );
};

export default Budget;
