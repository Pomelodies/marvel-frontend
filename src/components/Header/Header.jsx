import logo from "../../assets/img/logo_marvel.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Marvel logo" />
        </Link>
        <menu>
          <Link to="/">
            <button>Personnages</button>
          </Link>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
          <Link to="/favoris">
            <button>Favoris</button>
          </Link>
        </menu>
      </div>
    </header>
  );
};

export default Header;
