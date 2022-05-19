import React, { useState} from 'react'
import './Rewards.css'
import Reward from './Reward.js'
import {data} from '../data/data'
import {pastRewardsData} from '../data/pastRewardsData'

const Rewards = () => {
  return (
    <div>
        <h1 className='title'>Rewards</h1>
        <div className='rewards'>
          {data.map((reward) => (
            <Reward name={reward.name} image={reward.img} type={reward.type}/>
          ))}
        </div>
        <h2 className='subtitle'>Next Reward:</h2>
        <h1 className='title'>Past Rewards</h1>
        <div className='rewards'>
            {pastRewardsData.map((reward) => (
                <Reward name={reward.name} image={reward.img} type={reward.type}/>
            ))}
        </div>
    </div>
  )
}

export default Rewards