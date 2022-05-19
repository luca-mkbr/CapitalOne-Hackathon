import React from 'react'
import './Reward.css'

const Reward = ({name, image, type}) => {
  return (
    <div className="reward">
            <img src={image} alt=""></img>
            <p className="rewardName">{name}</p>
            <p className="rewardDesc">{type}</p>
    </div>
  )
}

export default Reward