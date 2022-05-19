<<<<<<< HEAD
import React from 'react'
import { PieChart, Pie} from 'recharts';

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
=======
import React from 'react';

const Budget = () => {
  return (
    <div>
        
    </div>
  )
}

export default Budget
>>>>>>> 844adcbda969c32c72f2a81ecd0f60a03bfa702b
