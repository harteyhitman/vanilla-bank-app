import Ellipse from '../assets/Ellipse.svg'
import HoobankName from '../assets/HooBank.png'
import Hamburger from './Hamburger'



const Navbar = () => {


  return (
    <div className='navs-container'>
      <div className="hoobank-logo">
        <img src={Ellipse} alt="" />
        <img src={HoobankName} alt="" />
      </div>
      <div className="navs">
        <ul>
          <a href="#home"><li style={{ color: 'white' }}>Home</li></a>
          <a href="#about"> <li>About Us</li></a>
          <a href="#features"><li>Features</li></a>
          <a href="#solution"><li>Solution</li></a>
        </ul>
       
      </div> 
      <Hamburger />
    </div>
  )
}

export default Navbar