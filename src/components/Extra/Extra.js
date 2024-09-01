import React from 'react'
import './Extra.css'
// import './index.css'


function Extra() {
    return (
        <>
            <section className="extra-wrapper">
                <div className="padding innerWidth flexCenter extra-container"></div>
                <div className="flexColStart extra-left">
                    <div className="extra-title">
                        <h1>Discover <br />Most Perfect <br />Property</h1>
                    </div>
                    <div className="flexColStart extra-des">
                        <span>Find Beautiful Properties That Suit You</span>
                        <span>You will not face any difficulty in finding the best residence for you </span>
                    </div>


                </div>

                <div className="flexCenter extra-right">
                    <div className="image-container">
                        <img src="mainimage.jpg" alt="main image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Extra
