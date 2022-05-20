import React from 'react'
import './Rewards.css'
import Reward from './Reward.js'
import { data } from '../data/data'
import { pastRewardsData } from '../data/pastRewardsData'
import Header from './Header';

const Rewards = () => {
    return (
        <div className="og">
            <Header/>
            <div className='title1'>Rewards:</div>
            <div className='rewards'>
                {data.map((reward) => (
                    <Reward name={reward.name} image={reward.img} type={reward.type} />
                ))}
            </div>
            <div className='title2'>Next Reward:</div>
            <div className='title1'>Past Rewards: You are </div>
            <div className='rewards'>
                {pastRewardsData.map((reward) => (
                    <Reward name={reward.name} image={reward.img} type={reward.type} />
                ))}
            </div>
        </div>
    )
}

export default Rewards