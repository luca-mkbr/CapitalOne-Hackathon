import React from 'react'
import './Reward.css'
import {data} from '../data/data.js'

const Reward = ({name, image, type}) => {
  return (
    <div className="reward">
            <img src={image}></img>
            <p className="rewardName">{name}</p>
            <p className="rewardActivate">{type}</p>
    </div>
  )
}

export default Reward