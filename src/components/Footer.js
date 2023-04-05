import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <img src="assets/img/footer-img1.png" className="footer-img-a" alt="" />
        <img
          src="assets/img/footer-img-2.png"
          className="footer-img-b"
          alt=""
        />
        <div className="footer-social">
          <ul className="social-ul">
            <li>
              <a href="" className="social-link">
                <img src="assets/img/icon/1.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="" className="social-link">
                <img src="assets/img/icon/2.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="" className="social-link">
                <img src="assets/img/icon/3.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
