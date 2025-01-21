import { useState } from "react";
import burgerMenu from "./assets/icons/burder-menu.svg";
import crossMenu from "./assets/icons/cross-menu.svg";
import logo from "./assets/icons/logo.svg";
import cart from "./assets/icons/cart.svg";
import "./App.scss";

const App = () => {
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
              <img src={cart} alt="Cart" />
            </a>
          </nav>
        </div>
      </header>

      <main></main>
    </>
  );
};

export default App;
