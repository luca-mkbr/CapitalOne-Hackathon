import React from 'react'
import returnDis from './Piechart'
import returnNec from './Piechart'
import returnSav from './Piechart'
import { Link } from "react-router-dom";

function rewardz(){
    const total = returnDis +returnNec +returnSav
    if (returnNec/total<0.5 && returnSav/total>0.2 ){
    alert ('Claim your rewards!');
}}
const GetPoints = () => {
    <button onClick={rewardz}> Reward Status</button>
}

export default GetPoints