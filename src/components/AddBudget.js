import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { setCookie, eraseCookie } from "./Cookies";
import './AddBudget.css'

const AddBudget = () => {
    let navigate = useNavigate();

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
        eraseCookie("necessitiesAmount");
        eraseCookie("savingsAmount");
        eraseCookie("discretionaryAmount");
        setCookie("necessitiesAmount", savings, 999);
        setCookie("savingsAmount", necessities, 999);
        setCookie("discretionaryAmount", discretionary, 999);
        navigate("../home", ({replace:true}));
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

export default AddBudget