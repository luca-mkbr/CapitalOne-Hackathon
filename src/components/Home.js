import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie} from 'recharts';
import './Home.css'
import './AddBudget.js'

const Home = () => {
    const data = [
        {name: 'Savings', percent:20 },
        {name: 'Necessities', percent:50},
        {name: 'Discretionary Spending', percent:30}
    ];
    return (
        <div className="main-container">
            <div className="flex-container">
                <div className="flex-child">
                    <button label="Savings" amount="$69">

                    </button>
                    <button label="Necessities" amount="$69">
                        
                    </button>
                    <button label="Discretionary" amount="$69">
                        
                    </button>
                    <div className="showmore">
                    <Link to="/AddBudget">Show More</Link>
                    </div>
                </div>
                <div className="flex-child">
                <PieChart width={700} height={700}>
                    <Pie data={data} dataKey="percent" outerRadius={250} fill="yellow" />
                </PieChart>
                </div>
            </div>
        </div>
    )
}

function CategoryBox(props) {
    return (
        <div className="categorybox">
            <h2>{props.label}</h2>
            {props.amount}
        </div>
    );
}

export default Home