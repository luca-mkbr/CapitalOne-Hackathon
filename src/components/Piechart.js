import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { getCookie } from "./Cookies";

const Piechart = () => {
  const COLORS = ['#F6BD60', '#004777', '#FF6663', '#136F63'];
  const savingValue = getCookie("necessitiesAmount");
  const necessitiesValue = getCookie("savingsAmount");
  const discretionaryValue = getCookie("discretionaryAmount");
  const loanPaymentsValue = getCookie("loanPayments");
  const total = parseInt(savingValue) + parseInt(necessitiesValue) + parseInt(discretionaryValue) + parseInt(loanPaymentsValue);
  const savingNew = Math.round(savingValue / total * 10000) / 100;
  const necessitiesNew = Math.round(necessitiesValue / total * 10000) / 100;
  const discretionaryNew = Math.round(discretionaryValue / total * 10000) / 100;
  const loanPaymentsNew = Math.round(loanPaymentsValue / total * 10000) / 100;
  const data = [
    { name: 'Savings', value: savingNew },
    { name: 'Mandatory', value: necessitiesNew },
    { name: 'Discretionary', value: discretionaryNew },
    { name: 'Loan Payments', value: loanPaymentsNew }
  ];
  console.log("piechart values:" + savingValue, necessitiesValue, discretionaryValue, loanPaymentsValue, total, savingNew, necessitiesNew, discretionaryNew, loanPaymentsNew, data)

  return (
    <div className="Piechart">
      <div className="piIndent"> <h1></h1></div>
      <PieChart width={800}
        height={800} >
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={450}
          cy={250}
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