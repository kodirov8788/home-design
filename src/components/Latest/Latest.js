import React from 'react'
import "./Latest.css"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import img7 from "../images/img7.png"
import img8 from "../images/img8.png"
function Latest() {
    return (
        <div className='lastest'>
            <div className="lastest_navbar">
                <div className='lastest_logo'>
                    <p>OUR PROJECT</p>
                    <h1>Our Latest Projects</h1>
                </div>

                <div className="lastest_nav">
                    <ul>
                        <li style={{ color: "#FFC978", textDecoration: "underline" }}>All</li>
                        <li>Architecture</li>
                        <li>Construction</li>
                        <li>Interior Design</li>
                    </ul>
                </div>

            </div>

            <div className="lastest_carts">

                <div className="las_cart1">
                    <img src={img1} alt="" />
                </div>

                <div className="las_cart2">
                    <img src={img2} alt="" />
                </div>

                <div className="las_cart1">
                    <img src={img3} alt="" />
                </div>

                <div className="las_cart2">
                    <img src={img4} alt="" />
                </div>


                <div className="las_cart1">
                    <img src={img5} alt="" />
                </div>


                <div className="las_cart2">
                    <img src={img6} alt="" />
                </div>


                <div className="las_cart1">
                    <img src={img7} alt="" />
                </div>


                <div className="las_cart2">
                    <img src={img8} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Latest