/*importare foto*/

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="link-columns">
            <div>
              <h3>DC COMICS</h3>
              <ul>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">News</a></li>
              </ul>
              <h3>SHOP</h3>
              <ul>
                <li><a href="#">Shop DC</a></li>
                <li><a href="#">Shop DC Collectibles</a></li>
              </ul>
            </div>
            <div>
              <h3>DC</h3>
              <ul>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Privacy policy (New)</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">Talent Workshops</a></li>
                <li><a href="#">CPSC Certificates</a></li>
                <li><a href="#">Ratings</a></li>
                <li><a href="#">Shop Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3>SITES</h3>
              <ul>
                <li><a href="#">DC</a></li>
                <li><a href="#">MAD Magazine</a></li>
                <li><a href="#">DC Kids</a></li>
                <li><a href="#">DC Universe</a></li>
                <li><a href="#">DC Power Visa</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="signup-button">
            <button>SIGN-UP NOW!</button>
          </div>
          <div className="social-links">
            <h3>FOLLOW US</h3>
            <ul>
              <li><a href="#"><img src={} alt="Facebook" /></a></li>
              <li><a href="#"><img src={} alt="Twitter" /></a></li>
              <li><a href="#"><img src={} alt="YouTube" /></a></li>
              <li><a href="#"><img src={} alt="Pinterest" /></a></li>
              <li><a href="#"><img src={} alt="Periscope" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}