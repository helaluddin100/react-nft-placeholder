import React from "react";

function Header() {
  return (
    <div>
      <nav className="navigation">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo">
                  <a href="">
                    <img src="assets/img/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-10">
                <div className="menu">
                  <ul className="menu-ul">
                    <li className="nav-list">
                      <a href="" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="" className="nav-link">
                        Roadmap
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="" className="nav-link">
                        About us
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="" className="nav-link">
                        Shop
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="" className="nav-link">
                        faq
                      </a>
                    </li>
                    <li className="nav-list">
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
}

export default Header;
