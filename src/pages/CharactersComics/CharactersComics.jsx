import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getImg from "../../utils/getImg";
import "./characterscomics.css";

const CharactersComics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  console.log(params); // { "characterId": "5fcf91f4d8a2480017b91453" }
  const { characterId } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--tygmhpsjkjgv.code.run/comics/${characterId}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Data is loading, please wait...</p>
  ) : (
    <main>
      <div className="container">
        {data.comics.length > 0 ? (
          data.comics.map((comics) => {
            return (
              // <Link to={`/comics/${character._id}`}>
              <article key={comics._id}>
                <img src={getImg(comics.thumbnail)} alt="Comics picture" />
                <h2>{comics.title}</h2>
                {comics.description ? <p>{comics.description}</p> : ""}
              </article>
              // </Link>
            );
          })
        ) : (
          <p>{`No comics related to ${data.name} in the database`}</p>
        )}
      </div>
    </main>
  );
};

export default CharactersComics;
