import { Link } from "react-router-dom";
import navsearch from "./../assets/search.svg";
import cart from "./../assets/cart.svg";
import fav from "./../assets/fav.svg";
import { useLocation } from "react-router-dom";
import logolight from "./../assets/logo-unikut.png";
import logodark from "./../assets/logo.png";
import Search from "./Search";

const Header = () => {
  const match= useLocation()
  const logo= match.pathname==="/"? logolight:logodark;
  const customClasse=match.pathname==="/"? 'header--dark':'header--light';
  return (
    <header className={`header ${customClasse}`}>
      <div className="container">
        <Link className="header__logo" to="/">
          <img src={logo} alt="logo UniCut" />
        </Link>
        <nav className="header__nav">
          <ul>
          <li className="header__nav__item">
              <Link className="header__logo" to="/">
              <img src={fav} alt="fav" />
                
              </Link>
            </li>
            <li className="header__nav__item">
              <Link className="header__logo" to="/">               
              <Search />
              </Link>
            </li>
            <li className="header__nav__item">
              <Link className="header__logo" to="/">
                <img src={cart} alt="cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__quote">
        <h1>
          Parmi les accessoires du couteau suisse de Chuck Norris, il y a Mac
          Gyver.
        </h1>
        <button>Acheter maintenant</button>
      </div>
    </header>
  );
};

export default Header;