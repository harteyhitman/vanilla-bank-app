import Ellipse from '../assets/Ellipse.svg'
import HoobankName from '../assets/HooBank.png'
import {FooterLinks} from '../components/index'
const Footer = () => {
    return (
        <div className='footer-cont'>
            <div className="hoobank-footer">
                <div className="hoobank-logo">
                    <div>
                        <img src={Ellipse} alt="" />
                        <img src={HoobankName} alt="" />
                    </div>
                    <p>
                        A new way to make the payments easy, reliable and secure.
                    </p>
                </div>
            </div>

                <div className='footer-links'>
                    {FooterLinks.map((footer)=>(
                        <div key={footer.title}>
                            <div className="useful-links">
                                <h4>{footer.title}</h4>
                                <ul>
                                    {footer.links.map((linked)=>(
                                        <li key={linked.name}>{linked.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

        </div>
    )
}

export default Footer