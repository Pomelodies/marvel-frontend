import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import Favoris from "./pages/Favoris";
import Header from "./components/Header/Header";
import CharactersComics from "./pages/CharactersComics/CharactersComics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/comics/:characterId" element={<CharactersComics />} />
      </Routes>
    </Router>
  );
}

export default App;
