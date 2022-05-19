import React from 'react'
import { PieChart, Pie} from 'recharts';
import './Budget.css'

const Budget = () => {
  const data = [
      {name: 'Savings', percent:20 },
      {name: 'Necessities', percent:50},
      {name: 'Discretionary Spending', percent:30}
  ];
  return (
      <PieChart width={700} height={700}>
          <Pie data={data} dataKey="percent" outerRadius={250} fill="yellow" />
      </PieChart>
  );
}

export default Budget;
