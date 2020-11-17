import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTypo3, FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/Travel-Website'>Testimonials</Link>
            <Link to='/Travel-Website'>Careers</Link>
            <Link to='/Travel-Website'>Investors</Link>
            <Link to='/Travel-Website'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Travel-Website'>Contact</Link>
            <Link to='/Travel-Website'>Support</Link>
            <Link to='/Travel-Website'>Destinations</Link>
            <Link to='/Travel-Website'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/Travel-Website'>Submit Video</Link>
            <Link to='/Travel-Website'>Ambassadors</Link>
            <Link to='/Travel-Website'>Agency</Link>
            <Link to='/Travel-Website'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/Travel-Website'>Instagram</Link>
            <Link to='/Travel-Website'>Facebook</Link>
            <Link to='/Travel-Website'>Youtube</Link>
            <Link to='/Travel-Website'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/Travel-Website' className='social-logo'>
              TRVL
              <FaTypo3 />
            </Link>
          </div>
          <small className='website-rights'>TRVL © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/Travel-Website'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link instagram'
              to={
                'https://www.instagram.com/4bdeladim/'
              }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/Travel-Website'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/Travel-Website'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/Travel-Website'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
