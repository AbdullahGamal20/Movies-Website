import React from "react";
import "./footer.css";
import FooterNavItem from "../../Components/FooterNavItem";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of Service",
    "Privacy Policy",
  ];

  const locations = [
    "City Stars Mall",
    "Mall of Arabia",
    "Egypt Mall",
    "Cairo Festival Mall",
    "Down Town ",
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>Aflam</span>
              </a>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                pariatur reiciendis commodi, aut aperiam soluta dolorem voluptas
                officiis debitis, placeat eligendi quia doloremque fugiat
                nostrum similique ex quo distinctio nesciunt?
              </p>

              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>

                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" className="youtube">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => {
                  return <FooterNavItem key={link} name={link} />;
                })}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Out Cinema</h4>
              <ul>
                {locations.map((link) => {
                  return <FooterNavItem key={link} name={link} />;
                })}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Shehab Street <br />
                El-Mohndseen, Cairo <br />
                Egypt <br />
                <br />
                <strong>Phons:</strong> +0123 456 789
                <br />
                <strong>Email:</strong> example@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; Copyright
        <strong>
          <span> Unlimited-EG </span>
        </strong>
        All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
