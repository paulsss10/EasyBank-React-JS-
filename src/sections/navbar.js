import React, { useEffect, useState, useContext } from "react";
import logo from "../resources/images/logo.svg";
import { ComponentStateContext } from "../Contexts/ComponentStateContext";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const [overlayState, setOverlayState] = useContext(ComponentStateContext)

  useEffect(() => {
    setOverlayState(!overlayState);
  }, [hamburgerState]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="header">
      <div
        className={overlayState ? "overlay fade-out" : "overlay open fade-in"}
      ></div>
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <Link
          
          to="hero"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
        >
          <a href="#" className="header__logo" onClick={() => scrollToTop}>
            <img src={logo} alt="Easybank logo" />
          </a>
        </Link>

        <a
          href="#"
          className={
            hamburgerState
              ? "header__toggle hide-for-desktop open"
              : "header__toggle hide-for-desktop"
          }
          onClick={(e) => setHamburgerState(!hamburgerState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="header__links hide-for-mobile">
          <a href="#" activeClass="active">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              About
            </Link>
          </a>

          <Link
            activeClass="active"
            to="articles"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            <a>Articles</a>
          </Link>

          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <a className="button header__cta hide-for-mobile">Request Invite</a>
      </nav>

      <div className={overlayState ? "header__menu" : "header__menu open"}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>
    </header>
  );
};

export default Navbar;
