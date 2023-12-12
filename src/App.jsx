import React from 'react'
import './App.css'
import './Mobile.scss'
import './Tablet.scss'
import './General.scss'
import Navbar from './components/Navbar'
import Payment from './components/Payment'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeals from './components/CardDeals'
import FeedBack from './components/FeedBack'
import Service from './components/Service'
import Footer from './components/Footer'
import CopyRight from './components/CopyRight'


const App = () => {
  return (
    <main className='main-container'>
      <Navbar />
      <Payment />
      <Stats />
      <Business />
      <Billing />
      <CardDeals />
      <FeedBack />
      <Service />
      <Footer />
      <CopyRight />
    </main>
  )
}

export default App