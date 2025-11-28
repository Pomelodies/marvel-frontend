import logo from "../../assets/img/logo_marvel.png";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = ({
  searchCharacter,
  setSearchCharacter,
  searchComics,
  setSearchComics,
}) => {
  const location = useLocation();
  //   console.log(location); {
  //     "pathname": "/",
  //     "search": "",
  //     "hash": "",
  //     "state": null,
  //     "key": "1f633ex5"
  // }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Marvel logo" />
        </Link>
        {location.pathname === "/" ? (
          <input
            type="text"
            placeholder="Rechercher un personnage"
            value={searchCharacter}
            onChange={(event) => {
              setSearchCharacter(event.target.value);
            }}
          />
        ) : location.pathname === "/comics" ? (
          <input
            type="text"
            placeholder="Rechercher un comics"
            value={searchComics}
            onChange={(event) => {
              setSearchComics(event.target.value);
            }}
          />
        ) : (
          ""
        )}
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
