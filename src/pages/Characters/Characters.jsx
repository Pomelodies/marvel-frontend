import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getImg from "../../utils/getImg";
import "./characters.css";
import Pagination from "../../components/Pagination/Pagination";
import ScrollUpButton from "../../components/ScrollUp/ScrollUp";

const Characters = ({ searchCharacter }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSkip, setCurrentSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      //pour la barre de recherche
      let characterName = "";
      let trueSkip = "";
      if (searchCharacter) {
        console.log(searchCharacter);
        characterName += "?name=" + searchCharacter;
        try {
          const response = await axios.get(
            `http://localhost:3000/characters${characterName}`
          );
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else if (currentSkip) {
        console.log(currentSkip);
        trueSkip += "?skip=" + currentSkip;
        try {
          const response = await axios.get(
            `http://localhost:3000/characters${trueSkip}`
          );
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        try {
          const response = await axios.get(`http://localhost:3000/characters`);
          console.log(response.data);
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
      <Pagination
        setCurrentSkip={setCurrentSkip}
        totalElement={data.count}
        limit={data.limit}
      />
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
            </article>
          );
        })}
      </div>
      <ScrollUpButton />
    </main>
  );
};

export default Characters;
