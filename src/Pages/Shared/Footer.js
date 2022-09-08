import React from 'react';
import footer from '../../assets/images/footer.png';
const Footer = () => {

    return (
        <footer style={{
            background:`url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10 ">
  <div className='footer'>
  <div>
    <span className="footer-title mt-10">Services</span> 
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Monthly Checkup</a>
    <a className="link link-hover">Weekly Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span className="footer-title mt-10">ORAL HEALTH</span> 
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Cavity Filling</a>
    <a className="link link-hover">Teath Whitening</a>
    <a className="link link-hover">Oral Surgery</a>
  </div> 
  <div>
    <span className="footer-title mt-10">OUR ADDRESS</span> 
    <a className="link link-hover">Pabna Sadar,6600</a>
    
  </div>

  </div>
 
  <div className='my-20 text-center'>
    <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
  </div>

</footer>
    );
};

export default Footer;