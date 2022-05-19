import React, {useState} from 'react'
import { data } from '../data/data'
import './addBudget.css'

const addBudget = () => {
    let navigate =useNavigate();

    const [savings, setSavings] = useState('')
    const [necessities, setNecessities] = useState('')
    const [discretionary, setDiscretionary] = useState('')

    const savingsHandler = (event) => {
        setSavings(event.target.value);
    }
    const necessitiesHandler = (event) => {
        setNecessities(event.target.value);
    }
    const discretionaryHandler = (event) => {
        setDiscretionary(event.target.value);
    }
   const addBudgetHandler = (event) => {
       data.push({
           savings:savings,
           necessities:necessities,
           discretionary:discretionary
       })
       navigate("../", ({replace:true}));
   }
 return (
     <div className = "form">
         <h1 className= "savings">Add Budget</h1>
         <label> Savings Amount</label>
         <input onChange={savingsHandler}></input>
         <label> Necessities Amount</label>
         <input onChange={necessitiesHandler}></input>
         <label> Discretionary Amount</label>
         <input onChange={discretionaryHandler}></input>
         <button onClick={addBudgetHandler}> Add Budget</button>
     </div>
 )
}

export default addBudget