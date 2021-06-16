import React from 'react';
import '../assets/css/footer.css';
import { BackTop } from 'antd';
import { ApiFilled } from '@ant-design/icons';

function Footer(props) {
  return (
    <footer>
      <div className="logo-section">
        <h1>
          <ApiFilled className="logo-icon" />
          Kelvin Electric
        </h1>
      </div>
      <div className="social-media">
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">Copyright &#169; Kelvin Electric</div>

      <BackTop>
        <div className="go-top">
          <i className="fas fa-arrow-circle-up"></i>
        </div>
      </BackTop>
    </footer>
  );
}

export default Footer;
