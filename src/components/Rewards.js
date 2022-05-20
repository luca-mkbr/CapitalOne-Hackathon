import React, { useEffect } from 'react';
import './Rewards.css';
import Reward from './Reward.js';
import { data } from '../data/data';
import { pastRewardsData } from '../data/pastRewardsData';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { getCookie } from './Cookies';

const Rewards = () => {
    let navigate = useNavigate();
    useEffect(() => {
    if (getCookie("ver") === null) {
        navigate("../", ({replace:true}));
    }
    })
    return (
        <div className="og">
            <Header />
            <div>
                <div className='title1'>REWARDS:</div>
                <div className='rewards'>
                    {data.map((reward) => (
                        <Reward name={reward.name} image={reward.img} type={reward.type} />
                    ))}
                </div>
                <div className='title2'>Next Reward: You are 50 / 200 points towards your next reward!</div>
                <div className='title1'>PAST REWARDS:</div>
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