import React from 'react'
import './Rewards.css'
import Reward from './Reward.js'
import { data } from '../data/data'
import { pastRewardsData } from '../data/pastRewardsData'
import Header from './Header';
import PickReward from './PickReward'

const Rewards = () => {
    return (
        <div className="og">
            <Header />
            <div>
                <div className='title1'>Rewards:</div>
                <div className='rewards'>
                    {data.map((reward) => (
                        <Reward name={reward.name} image={reward.img} type={reward.type} />
                    ))}
                </div>

                <PickReward />
            
                <div className='title1'>Past Rewards</div>
                <div className='rewards'>
                    {pastRewardsData.map((reward) => (
                        <Reward name={reward.name} image={reward.img} type={reward.type} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rewards