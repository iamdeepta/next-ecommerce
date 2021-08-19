import Location from "../../assets/icons/location";
import Mail from "../../assets/icons/mail";
import Phone from "../../assets/icons/phone";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>Contact Us</h6>
            <div className="f-info">
              <li>
                <Location />
              </li>
              <h1>Address: No 40 Baria Sreet 133/2 NY, USD</h1>
            </div>
            <div className="f-info">
              <li>
                <Mail />
              </li>
              <li>
                <a href="mailto:sm-destino@magentech.com">
                  Mail Us: sm-destino@magentech.com
                </a>
              </li>
            </div>
            <div className="f-info">
              <li>
                <Phone />
              </li>
              <li>
                <a href="tel:1234 56789">Phone: (888) 1234 56789</a>
              </li>
            </div>

            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook footer-icon1"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter footer-icon2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin footer-icon3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram footer-icon4"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play footer-icon5"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li className="f-heading">Genaral Information</li>
              <li>
                <a href="/company-overview">Compnay Overview</a>
              </li>
              <li>
                <a href="/our-teams">Our Teams</a>
              </li>
              <li>
                <a href="/return-refund">Return and refund Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privecy-policy">Privacy Policy</a>
              </li>
            </ul>

            <ul>
              <li className="f-heading">Our Mobile App</li>
              <div class="mobileApp">
                <a href="#">
                  <div className="appleApp">
                    <div className="appleApp-logo">
                      <img
                        src="http://trust-lite.com/test/assets/img/apple.png"
                        alt="apple"
                      />
                    </div>
                    <div className="appleInfo">
                      <p>Download From The</p>
                      <h4>App Store</h4>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="appleApp androApp">
                    <div className="appleApp-logo">
                      <img
                        src="http://trust-lite.com/test/assets/img/playstore.png"
                        alt="apple"
                      />
                    </div>
                    <div className="appleInfo">
                      <p>Download From The</p>
                      <h4>Play Store</h4>
                    </div>
                  </div>
                </a>
              </div>
            </ul>
            <ul>
              <li className="f-heading">Do You Have Any Question?</li>
              <div>
                <form class="footer-form">
									<input type="text" placeholder="Your Name" id="name" name="name" />
									<input type="text" placeholder="Phone or Email" id="email" name="email" />
									<input type="text" placeholder="Subject" id="subject" name="subject" />
									<textarea rows="3" placeholder="Your Message" id="message" name="message"></textarea>
									<button type="submit" id="submit-btn">submit</button>
								</form>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY Anik Routh - © 2021. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
