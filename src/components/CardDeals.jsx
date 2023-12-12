import React from 'react'
import Button from './Button'
import Cards from '../assets/card.png'

const CardDeals = () => {
    return (
        <div id='solution' className='billing-invoice'>

            <div className='easy-control'>
                <h2 className='find-better-card'>Find a better card deal in few easy steps.</h2>
                <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <div className='apple-google-btn'>
                    <Button />
                </div>
            </div>
            <img className='card-deal' src={Cards} alt="" />
        </div>
    )
}

export default CardDeals