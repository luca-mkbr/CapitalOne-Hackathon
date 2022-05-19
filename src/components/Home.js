import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie} from 'recharts';
import './Home.css'

const Home = () => {
  return (
    <div className="main-container">
        <div className="flex-container">
            <div className="flex-child">
                <Button label="Savings">

                </Button>
                <Button label="Necessities">
                    
                </Button>
                <Button label="Discretionary">
                    
                </Button>
                <Button className="addBudget">
                    <h2>Show More</h2>
                </Button>
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