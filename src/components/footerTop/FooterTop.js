import React from 'react'
import footerTopBanner from "../footerTop/FooterTop.css"
import images from "../images/people.png"
function FooterTop() {
    return (
        <div className='footerTop'>
            <p className='footerText'>OUR PROJECT</p>
            <h1 className='footerTextBanner'>Meet With Our Team</h1>
            <div className="imageFooter">
                <img className='images11' src={images} alt="" />
            </div>
            <p className='footerTextLogo'>Cody Fisher   -   CEO</p>
            <hr className='Footer_hr' />

            <p className='footerTextLogo'>Savannah Nguyen   -   Interior architect</p>
            <hr className='Footer_hr' />


            <p className='footerTextLogo'>Jerome Bell   -   Interior</p>
            <hr className='Footer_hr' />


            <p className='footerTextLogo'>Cameron Williamson   -   architect</p>
            <hr className='Footer_hr' />

            <p className='footerTextLogo'>Marvin McKinney   -   COnstruction head</p>
            <hr className='Footer_hr' />
        </div>
    )
}

export default FooterTop