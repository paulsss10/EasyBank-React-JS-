import React from "react";

const Hero = () => {
  return (
    <section className="hero" title="hero" id="hero">
      <div className="container">
        <div className="hero__image"></div>

        <div className="container--pall hero__text">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <a href="#" className="hero__cta button">
            Request Invite
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;