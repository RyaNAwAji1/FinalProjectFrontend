import React from 'react'
import { NavLink } from 'react-router-dom';
import MainImg from "../imegas/MainImg.jpg";


function Home() {
  return (
    <div classNam='container'>
      <div className='Header'>
        <div className='Logo'>
          <span>FoT</span>rack
        </div>
        <div className='NavBary'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/History'}>History</NavLink>
        <NavLink to={'/Product'}>Product</NavLink>
        {/* <NavLink to={'/Gift'}>Gift</NavLink> */}
        </div>
        <div className='subscrip'>
          <NavLink className='log' to={'/subscrip'}>subscrip</NavLink>
        </div>
      </div>
      <div className='Main'>
      <div className='img' ><img src={MainImg}/></div> 
    <div className='overlody'></div>
    <div className='text'>
          <h1>Food<span>Track</span></h1>
          <p>
          are major components of the street food industry that serves<br /> an estimated 2.5 billion people every day
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className='aboutAs'> 
      <h4>about<span>as</span></h4>
      <p>We are a company that provides innovative and distinctive solutions in the world of foodtracks The company FootRack offers you the most important advice required in the market from experience lasting more than 20 years towards excellence and innovation providing the requirements and the required assistance</p>
      </div>

      <footer>
      <h4>contact<span>as</span></h4>
      <div className='icons'>
      <i class="fab fa-github"></i>
      <i class="fas fa-envelope"></i>
      <i class="fab fa-whatsapp-square"></i>
      <p className='p1'>
        ryanmawaji@gmail.com
      </p>

      </div>
      </footer>
    </div>
  )
}

export default Home;