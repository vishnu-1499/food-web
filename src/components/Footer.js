import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
        <h3> &copy; 2022 biryanilife@gmail.com </h3>
    </div>
  )
}

export default Footer;