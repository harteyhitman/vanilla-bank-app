import Discount from '../assets/Discount.png'
import ArrowUp from '../assets/arrow.png'
import Robot from '../assets/robot.png'
const Payment = () => {
    return (
        <div id='home' className='getstarted-container'>
            <div className="getstarted-left">
                <div className="percent-cont">
                    <img src={Discount} alt="" />
                    <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
                </div>
                <div className='circle'>
                    <h1>The Next <br /> <span>Generation</span> <br /> Payment Method.</h1>
                    <div className="get-img">
                        <p>Get <br /> Started</p>
                        <img src={ArrowUp} alt="" />
                    </div>
                </div>
                <p className='our-team'>
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
                </p>
            </div>
            <div className="getstarted-right">
                <img src={Robot} alt="" />
            </div>
        </div>
    )
}

export default Payment