import React from "react";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h2>10,000 Genesis Characters Ready to Mint August 5th</h2>
          <img src="assets/img/hero/1.png" alt="" className="hero-img" />
        </div>
      </div>

      <section>
        <div className="unique ">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="unique-wrapper">
                  <div className="unique-content">
                    <h2>What Make Us Unique</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley
                    </p>
                  </div>
                  <div className="unique-img">
                    <img src="assets/img/uniquepng.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="image-marque cpy-8">
          <Marquee>
            <img src="assets/img/marque.png" alt="" />
          </Marquee>
        </div>
      </section>
    </div>
  );
}

export default Home;
