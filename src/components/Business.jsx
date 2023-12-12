import React from 'react'
import Button from './Button'
import {Rewards}  from '../components/index'

const Business = () => {
  return (
    <div id='features' className='business-cont'>
        <div className="money">
            <h2>You do the business, <br /> we’ll handle the money.</h2>
            <p>With the right credit card, you can improve your financial <br /> life by building credit, earning rewards and saving money. But <br /> with hundreds of credit cards on the market.</p>
            <Button />
        </div>
        <div className="rewards">
            {Rewards.map((Reward) => (
                <div className='reward' key={Reward.id}>
                    <img src={Reward.rewardsImg} alt="" />
                    <div className='reward-child'>
                        <h4>{Reward.rewardsheading}</h4>
                        <p>{Reward.rewardspara}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Business