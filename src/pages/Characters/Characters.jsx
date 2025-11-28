import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getImg from "../../utils/getImg";
import "./characters.css";

const Characters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Data is loading, please wait...</p>
  ) : (
    <main>
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
    </main>
  );
};

export default Characters;
