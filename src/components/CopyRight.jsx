import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'

const CopyRight = () => {
    return (
        <div className='reserved-cont'>
            <div className="right-reserved">
                <p><span>Copyright &copy; </span>  2021 HooBank. All Rights Reserved.</p>
            </div>
            <div className="social-media">

                <a href="https://www.instagram.com/"><img src={Instagram} alt="" /></a>
                <a href="https://www.facebook.com/"><img src={Facebook} alt="" /></a>
                <a href="https://www.twitter.com/"><img src={Twitter} alt="" /></a>
                <a href="https://www.linkedin.com/"><img src={Linkedin} alt="" /></a>
            </div>
        </div>
    )
}

export default CopyRight