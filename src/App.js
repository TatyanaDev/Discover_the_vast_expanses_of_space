import { useState } from "react";
import burgerMenu from "./assets/icons/burder-menu.svg";
import crossMenu from "./assets/icons/cross-menu.svg";
import rocket from "./assets/images/rocket.png";
import earth from "./assets/images/earth.png";
import logo from "./assets/icons/logo.svg";
import "./app.css";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <div className="header__menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? crossMenu : burgerMenu} alt="Menu" />
          </div>

          <nav className={`header__links ${menuOpen ? "header__links--open" : ""}`}>
            <a href="/home" className="header__link">
              Home
            </a>
            <a href="/products" className="header__link">
              Products
            </a>
            <a href="/cart" className="header__link">
              <div className="cart-icon" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <svg width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cart-icon__default ${isHovered ? "hidden" : ""}`}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.234 18.182a1.827 1.827 0 0 0-1.847-1.819c-1.025 0-1.847.81-1.847 1.819C5.54 19.19 6.362 20 7.387 20c1.024 0 1.847-.81 1.847-1.818Zm12.927 0a1.827 1.827 0 0 0-1.847-1.819c-1.024 0-1.847.81-1.847 1.819 0 1.008.823 1.818 1.847 1.818s1.847-.81 1.847-1.818Zm1.846-15.455a.923.923 0 0 0-.923-.909H5.757C5.612 1.136 5.597 0 4.617 0H.923A.923.923 0 0 0 0 .909c0 .497.418.91.923.91h2.944l2.553 11.69c-.202.411-.88 1.505-.88 1.945 0 .498.419.91.924.91h14.773a.922.922 0 0 0 .924-.91.923.923 0 0 0-.924-.909H7.964c.144-.284.346-.582.346-.909 0-.326-.13-.681-.187-.994l15.062-1.733a.925.925 0 0 0 .822-.91V2.728Z" fill="#fff" />
                </svg>

                <svg width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cart-icon__gradient ${isHovered ? "" : "hidden"}`}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.234 18.182a1.827 1.827 0 0 0-1.847-1.819c-1.025 0-1.847.81-1.847 1.819C5.54 19.19 6.362 20 7.387 20c1.024 0 1.847-.81 1.847-1.818Zm12.927 0a1.827 1.827 0 0 0-1.847-1.819c-1.024 0-1.847.81-1.847 1.819 0 1.008.823 1.818 1.847 1.818s1.847-.81 1.847-1.818Zm1.846-15.455a.923.923 0 0 0-.923-.909H5.757C5.612 1.136 5.597 0 4.617 0H.923A.923.923 0 0 0 0 .909c0 .497.418.91.923.91h2.944l2.553 11.69c-.202.411-.88 1.505-.88 1.945 0 .498.419.91.924.91h14.773a.922.922 0 0 0 .924-.91.923.923 0 0 0-.924-.909H7.964c.144-.284.346-.582.346-.909 0-.326-.13-.681-.187-.994l15.062-1.733a.925.925 0 0 0 .822-.91V2.728Z" fill="url(#a)" fillOpacity=".6" />
                  <defs>
                    <linearGradient id="a" x1="8" y1="4" x2="19" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#EBFF00" />
                      <stop offset="1" stopColor="#FF70D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="space-background">
          <div className="space-background__container">
            <h1 className="space-background__title">
              Discover the vast expanses of <span>space</span>
            </h1>
            <p className="space-background__description">
              Where the possibilities are <span>endless!</span>
            </p>

            <article>
              <button className="space-background__button">Learn more</button>
              <img src={earth} alt="Earth" className="space-background__image" />
            </article>
          </div>
        </section>

        <div className="combined-sections">
          <section className="offers">
            <div className="offers__container">
              <h2 className="offers__title">Offers</h2>

              <div className="offers__grid">
                <article className="offers__card">
                  <h3 className="offers__card-title">Move the borders of reality!</h3>
                  <p className="offers__card-description">
                    Go on a space adventure <span>- it's possible with us!</span>
                  </p>
                  <button className="offers__card-button">Learn more</button>
                </article>

                <article className="offers__card">
                  <h3 className="offers__card-title">Space is not just stars and planets</h3>
                  <p className="offers__card-description">it is a majestic journey to</p>
                  <button className="offers__card-button">Learn more</button>
                </article>

                <article className="offers__card">
                  <h3 className="offers__card-title">For those who dream of stars</h3>
                  <p className="offers__card-description">Our offer: make your dream come true</p>
                  <button className="offers__card-button">Learn more</button>
                </article>

                <article className="offers__card">
                  <h3 className="offers__card-title">Fulfill your fantastic dreams</h3>
                  <p className="offers__card-description">Space has never been so close</p>
                  <button className="offers__card-button">Learn more</button>
                </article>
              </div>
            </div>
          </section>

          <section className="space-journey">
            <div className="space-journey__container">
              <h4 className="space-journey__title">Embark on a space journey</h4>
              <input type="checkbox" id="toggle" className="space-journey__toggle" />
              <p className="space-journey__description">Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
              <label htmlFor="toggle" className="space-journey__button">
                <span className="button-text--more">Read more</span>
                <span className="button-text--less">Read less</span>
              </label>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">
          <img src={rocket} alt="Rocket" className="footer__image" />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </>
  );
};

export default App;
