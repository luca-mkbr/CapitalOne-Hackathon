import React from 'react'
import './Rewards.css'
import Reward from './Reward.js'
import {data} from '../data/data'

const Rewards = () => {
  return (
    <div>
        <h1 className='title'>Rewards</h1>
        <div className='rewards'>
          {data.map((reward) => (
            <Reward name={reward.name} genre={movie.genre} image={movie.img}/>
          ))}
        </div>
        <h2 className='subtitle'>Next Reward:</h2>
        <h1 className='title'>Past Rewards</h1>
        <div className='rewards'>

        </div>
    </div>
  )
}

export default Rewards