import React from 'react'

const Reward = () => {
  return (
    <div className="reward">
            <img src={image}></img>
            <p className="rewardName">{name}</p>
            <p className="rewardActivate">{activate}</p>
    </div>
  )
}

export default Reward