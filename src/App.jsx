import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// import des composants
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import Favoris from "./pages/Favoris";
import Header from "./components/Header/Header";
import CharactersComics from "./pages/CharactersComics/CharactersComics";

function App() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchComics, setSearchComics] = useState("");
  const [userFavorites, setUserFavorites] = useState([]);

  return (
    <Router>
      <Header
        searchCharacter={searchCharacter}
        setSearchCharacter={setSearchCharacter}
        searchComics={searchComics}
        setSearchComics={setSearchComics}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              searchCharacter={searchCharacter}
              setSearch={setSearchCharacter}
              userFavorites={userFavorites}
              setUserFavorites={setUserFavorites}
            />
          }
        />
        <Route
          path="/comics"
          element={<Comics searchComics={searchComics} />}
        />
        <Route
          path="/favoris"
          element={<Favoris userFavorites={userFavorites} />}
        />
        <Route path="/comics/:characterId" element={<CharactersComics />} />
      </Routes>
    </Router>
  );
}

export default App;
