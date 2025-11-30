import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import getImg from "../../utils/getImg";
import "./characters.css";
import Pagination from "../../components/Pagination/Pagination";
import ScrollUpButton from "../../components/ScrollUp/ScrollUp";

const Characters = ({
  searchCharacter,
  userFavorites,
  setUserFavorites,
  setCurrentSkip,
  currentSkip,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let characterName = "";
      let trueSkip = "";

      if (searchCharacter) {
        console.log(searchCharacter);
        characterName += "?name=" + searchCharacter;
        try {
          const response = await axios.get(
            `https://site--marvel-backend--tygmhpsjkjgv.code.run/characters${characterName}`
          );
          // console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else if (currentSkip) {
        // console.log(currentSkip);
        trueSkip += "?skip=" + currentSkip;
        try {
          const response = await axios.get(
            `https://site--marvel-backend--tygmhpsjkjgv.code.run/characters${trueSkip}`
          );
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        try {
          const response = await axios.get(
            `https://site--marvel-backend--tygmhpsjkjgv.code.run/characters`
          );
          // console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    fetchData();
  }, [searchCharacter, currentSkip]);

  return isLoading ? (
    <p>Data is loading, please wait...</p>
  ) : (
    <main>
      <h1>LES PERSONNAGES</h1>
      <div className="container">
        {data.results.map((character) => {
          return (
            <article key={character._id}>
              <Link
                className="link-style"
                to={`/comics/${character._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={getImg(character.thumbnail)}
                  alt="Character picture"
                />
                <h2>{character.name}</h2>
                {character.description ? <p>{character.description}</p> : ""}
              </Link>
              <div>
                <button
                  onClick={() => {
                    //copie du tableau
                    const newTab = [...userFavorites];
                    // modification du tableau
                    newTab.push(character);
                    //mise à jour du state
                    setUserFavorites(newTab);
                    // console.log(newTab);
                    // mis à jour du cookie
                    // console.log(userFavorites);
                    Cookies.set(
                      "userFavoriteCharacters",
                      JSON.stringify(newTab),
                      {
                        expires: 20,
                      }
                    );
                  }}
                >
                  Ajouter aux favoris
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <Pagination
        setCurrentSkip={setCurrentSkip}
        totalElement={data.count}
        limit={data.limit}
      />
      <ScrollUpButton />
    </main>
  );
};

export default Characters;
