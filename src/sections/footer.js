import React from 'react';

import logo from '../resources/images/logo-white.svg';
import fblogo from '../resources/images/icon-facebook.svg';
import ytlogo from '../resources/images/icon-youtube.svg';
import twtrlogo from '../resources/images/icon-twitter.svg';
import ptlogo from '../resources/images/icon-pinterest.svg';
import iglogo from '../resources/images/icon-instagram.svg';

const Footer = () => {
    return (
      <section className="footer">
        <div className="container container--pall">
          <div className="footer__logos">
            <img src={logo} className="site-logo" />

            <div className="social-media">
              <img src={fblogo} />
              <img src={ytlogo} />
              <img src={twtrlogo} />
              <img src={ptlogo} />
              <img src={iglogo} />
            </div>
          </div>

          <div className="footer__openHours">
            <h3>Open Hours</h3>
            <p>Mon – Thurs: 9AM to 8PM</p>
            <p>Fri: 9AM to 5PM</p>
            <p>Sat: 10AM to 3:30PM </p>
          </div>

          <div className="footer__location">
            <h3>Location</h3>
            <p>The Union Building,
            <br />
            51-59 Rose Lane
            <br />
            Norwich, England, NR1 1BY</p>
          </div>

          <div className="footer__btnCopyright">
            <button>Request Invite</button>
            <small>&copy; Easybank. All Rights Reserved</small>
          </div>
        </div>
      </section>
    );
}

export default Footer
