import React from 'react'
import "../styles/hero.css"
function Hero() {
  return (
    <div>
    <div className='hero'>
        <div className='left'>
        <h1>The Leading Optimization</h1>
        <h1>Platforms for Fleets</h1>
        <p>An end-to-end software platform for optimized, reliable and
        sustainable transportation services for fleets and mobility operators</p>
        <div className='btns'>
            <div className='demobutton'>
                <button>Request a demo</button>
            </div>
            <div className='bluebutton'>
                <button>Autofleet in 90 seconds</button>
            </div>
        </div>
     </div>
        <div className='right'>
        <img src={require('../images/right.jpg')} />
         </div>
    </div>
    </div>
  )
}

export default Hero