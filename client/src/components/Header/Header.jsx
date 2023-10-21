import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">EStore.</div>
        <div className="right">
          <SearchIcon />
          <FavoriteBorderOutlinedIcon />
          <span className="cart-icon">
            <ShoppingCartOutlinedIcon />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
