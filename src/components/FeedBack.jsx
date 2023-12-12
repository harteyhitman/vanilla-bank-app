import React from 'react'
import { RatingsData } from '../components/index'
import AirBnb from '../assets/airbnb.png'
import Binance from '../assets/binance.png'
import CoinBase from '../assets/coinbase.png'
import DropBox from '../assets/dropbox.png'

const FeedBack = () => {
    return (
        <div id='about' className='feedback-container'>
            <div className="header-feedback">
                <h2>What people are saying about us</h2>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>


            <div className="rating-con">
                {RatingsData.map((Rating) => (
                    <div key={Rating.id} className="ratings">
                        <img src={Rating.commas} alt="" />
                        <p>{Rating.feedbacks}</p>
                        <div className="raters">
                            <img src={Rating.raters} alt="" />
                            <div className="names">
                                <p className='rate-names'>{Rating.ratersNames}</p>
                                <p className='rate-founder'>{Rating.founders}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='company-names' >
               <img src={AirBnb} alt="" />
               <img src={Binance} alt="" />
               <img src={CoinBase} alt="" />
               <img src={DropBox} alt="" />
            </div>
        </div>

    )
}

export default FeedBack