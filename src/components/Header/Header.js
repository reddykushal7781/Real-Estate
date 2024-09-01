import React from 'react'

function Header() {
  return (
      <>
          <section className='h-wrapper'>
              <div className='flexCenter padding h-container'>
                  
                  <img
                      src="logo.jpg"
                      alt="logo" width={100} />
                  <div className="h-menu">
                      <a href="">Recidencies</a>
                      <a href="">Our Value</a>
                      <a href="">Get Started</a>
                      <a href="">Contact Us</a>
                      

                  </div>

              </div>    

          </section>
          
      </>
  )
}

export default Header
