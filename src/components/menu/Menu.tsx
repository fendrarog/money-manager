import classNames from "classnames";
import { NavLink } from "react-router-dom";
import CustomLink from "../CustonLink";

const Menu: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <NavLink to="/" className="header__logo">
            Moniger
          </NavLink>
          <nav className={classNames("header__menu", "menu")}>
            <ul className="menu__list">
              <li className="menu__item">
                <CustomLink to="/">
                  Home
                </CustomLink>
              </li>
              <li className="menu__item">
                <CustomLink to="/transactions">
                  Transactions
                </CustomLink>
              </li>
              <li className="menu__item">
                <CustomLink to="/stocks">
                  Stocks
                </CustomLink>
              </li>
              <li className="menu__item">
                <CustomLink to="/analysis">
                  Analysis
                </CustomLink>
              </li>
              <li className="menu__item">
                <CustomLink to="/settings">
                  Settings
                </CustomLink>
              </li>
            </ul>
          </nav>
          <NavLink to="/login" className="header__login">
            Login
          </NavLink>
        </div>
        <div className="header__line"></div>
      </div>
    </header>
  );
};

export default Menu;
