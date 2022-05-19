import React from 'react'
import { PieChart, Pie} from 'recharts';
import './Budget.css'

const Budget = () => {
  const data = [
      {name: 'Savings', percent:20, color: '#168118'},
      {name: 'Necessities', percent:50, color: '#168118'},
      {name: 'Discretionary Spending', percent:30, color: '#168118'}
  ];
  return (
      <PieChart width={700} height={700}>
          <Pie data={data} dataKey="percent" outerRadius={250} fill="yellow" />
      </PieChart>
  );
}

export default Budget;
