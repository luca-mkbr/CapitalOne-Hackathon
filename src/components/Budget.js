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
     <PieChart width={800} height ={800}>
       <Pie
       dataKey="value"
       isAnimationActive={true}
       data={data}
       cx={400}
       cy={400}
       outerRadius={200}
       fill="#8884d8"
       label
       />
       <Tooltip/>
     </PieChart>
     </div>
  );
};

export default Budget;
