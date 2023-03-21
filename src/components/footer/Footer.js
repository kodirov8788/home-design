import React from 'react'
import './Footer.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import img7 from '../../images/img7.png'
import Herro from '../../images/Herro.png'
function Footer() {
    return (
        <div>
            <div className="footer-img">
                <img src={img1} alt="" style={{ marginLeft: '40px' }} />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
            </div>
            <div className="footer">
                <div className="f_one">
                    <img src={Herro} alt="" />
                    <p>Take a look at how we designed this housesimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>
                <div className="f_two">
                    <ul>
                        <li style={{ color: '#FFB077' }}>THE STUDIO</li>
                        <li>PROJECT</li>
                        <li>architecture</li>
                        <li>blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="f_three">
                    <h1>Visit</h1>
                    <p>Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
                    <h1>Call</h1>
                    <p>017-6153-1774</p>
                </div>
            </div>
        </div>
    )
}

export default Footer