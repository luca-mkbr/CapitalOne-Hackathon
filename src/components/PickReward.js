import React, {useState} from 'react'
import Reward from './Reward';
import {data} from '../data/data'

const PickReward = () => {
    const [randomReward, setRandomReward] = useState({});

    const  rewardPicker = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        console.log(randomReward)
        setRandomReward(random);
    }
    return (

        <div>
            <h1 className="title">Pick a Reward</h1>
                <div></div>
                <Reward name={randomReward.name} image={randomReward.img} type={randomReward.type}/>
                <button className="randreward" onClick={rewardPicker}> Surprise Award </button>            
            </div>
            
            
    )
}

export default PickReward