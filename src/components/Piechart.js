import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { getCookie } from "./Cookies";


const Piechart = () => {
  const COLORS = ['#F6BD60', '#4DA1A9', '#FF6663'];
  const savingValue = getCookie("necessitiesAmount");
  const necessitiesValue = getCookie("savingsAmount");
  const discretionaryValue = getCookie("discretionaryAmount");
  const total = parseInt(savingValue) + parseInt(necessitiesValue) + parseInt(discretionaryValue);
  const savingNew = Math.round(savingValue / total * 10000) / 100;
  const necessitiesNew = Math.round(necessitiesValue / total * 10000) / 100;
  const discretionaryNew = Math.round(discretionaryValue / total * 10000) / 100
  const data = [
    { name: 'Savings', value: savingNew },
    { name: 'Necessities', value: necessitiesNew },
    { name: 'Discretionary Spending', value: discretionaryNew }
  ];
  console.log("piechart values:" + savingValue, necessitiesValue, discretionaryValue, total, savingNew, necessitiesNew, discretionaryNew, data)
  return (
    <div className="Piechart">
      <div className="piIndent"> <h1></h1></div>
      <PieChart width={700}
        height={750} >
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={300}
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
  );
};

export default Piechart;