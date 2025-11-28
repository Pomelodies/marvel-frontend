import axios from "axios";
import { useState, useEffect } from "react";
import getImg from "../../utils/getImg";
import "./comics.css";

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
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
        {data.results.map((comics) => {
          return (
            <article className="fiche-comics" key={comics._id}>
              <img src={getImg(comics.thumbnail)} alt="Comics picture" />
              <h2>{comics.title}</h2>
              <p>{comics.description}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
};
export default Comics;
