import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCookie, eraseCookie } from "./Cookies";
import './AddBudget.css'

const AddBudget = () => {
    let navigate = useNavigate();

    const [savings, setSavings] = useState('')
    const [necessities, setNecessities] = useState('')
    const [discretionary, setDiscretionary] = useState('')
    const [loan, setLoan] = useState('')

    const savingsHandler = (event) => {
        setSavings(event.target.value);
    }
    const necessitiesHandler = (event) => {
        setNecessities(event.target.value);
    }
    const discretionaryHandler = (event) => {
        setDiscretionary(event.target.value);
    }
    const loanHandler = (event) => {
        setLoan(event.target.value);
    }
    const addBudgetHandler = (event) => {
        if (savings > 0 && necessities > 0 && discretionary > 0 && loan > 0) {
            eraseCookie("necessitiesAmount");
            eraseCookie("savingsAmount");
            eraseCookie("discretionaryAmount");
            eraseCookie("loanPayments");
            setCookie("savingsAmount", savings, 999);
            setCookie("necessitiesAmount", necessities, 999);
            setCookie("discretionaryAmount", discretionary, 999);
            setCookie("loanPayments", loan, 999);
            navigate("../home", ({ replace: true }));
        }

        else {
            alert("Invalid budgeting amounts! Please enter values in all boxes which are greater than 0.");
        }
    }
    return (
        <div className="form">
            <h1 className="savings">Add Budget</h1>
            <label> Savings Amount</label>
            <input onChange={savingsHandler}></input>
            <label> Mandatory Amount</label>
            <input onChange={necessitiesHandler}></input>
            <label> Discretionary Amount</label>
            <input onChange={discretionaryHandler}></input>
            <label> Loan Payment Amount</label>
            <input onChange={loanHandler}></input>
            <button onClick={addBudgetHandler}> Add Budget</button>
        </div>
    )
}

export default AddBudget