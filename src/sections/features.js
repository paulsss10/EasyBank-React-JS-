import React from "react";

// images
import OnlineBanking from "../resources/images/icon-online.svg";

const Features = () => {
  return (
    <section className="features" title="about" id="about">
      <div className="container container--pall" >
        <div className="features__title">
          <h2>Why choose Easybank?</h2>
        </div>

        <div className="features__subtitle">
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="features__cards">
          <div className="card">
            <div className="card-item">
              <div className="card-icon">
                <img src={OnlineBanking} />
              </div>

              <div className="card-title">
                <h3>Online Banking</h3>
              </div>

              <div className="card-text">
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-item">
              <div className="card-icon">
                <img src={OnlineBanking} />
              </div>

              <div className="card-title">
                <h3>Online Banking</h3>
              </div>

              <div className="card-text">
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-item">
              <div className="card-icon">
                <img src={OnlineBanking} />
              </div>

              <div className="card-title">
                <h3>Online Banking</h3>
              </div>

              <div className="card-text">
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-item">
              <div className="card-icon">
                <img src={OnlineBanking} />
              </div>

              <div className="card-title">
                <h3>Online Banking</h3>
              </div>

              <div className="card-text">
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
