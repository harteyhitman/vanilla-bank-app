import BillImg from '../assets/bill.png'
import Apple from '../assets/apple-store.png'
import GogglePlay from '../assets/google-play.png'


const Billing = () => {

  return (
    <div className='billing-invoice'>
        <img className='billin-img' src={BillImg} alt="" />
        <div className='easy-control'>
            <h2>Easily control your billing & invoicing.</h2>
            <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='apple-google-btn'>
                <img src={Apple} alt="" />
                <img src={GogglePlay} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Billing