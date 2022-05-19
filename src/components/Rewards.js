import React from 'react'
import './Rewards.css'
import Reward from './Reward.js'

const Rewards = () => {
    const [data, setData] = useState([])
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

        </div>
    </div>
  )
}

export default Rewards