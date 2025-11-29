import axios from "axios";
import { useState, useEffect } from "react";
import getImg from "../../utils/getImg";
import "./comics.css";
import PaginationComics from "../../components/PaginationComics/PaginationComics";
import ScrollUpButton from "../../components/ScrollUp/ScrollUp";

const Comics = ({ searchComics }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [skipComics, setSkipComics] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let comicsSearch = "";
      let actualSkip = "";
      if (skipComics) {
        console.log(skipComics);
        actualSkip = "?skip=" + skipComics;
        try {
          const response = await axios.get(
            `http://localhost:3000/comics${actualSkip}`
          );
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else if (searchComics) {
        comicsSearch += "?title=" + searchComics;
      }
      try {
        const response = await axios.get(
          `http://localhost:3000/comics${comicsSearch}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [searchComics, skipComics]);

  return isLoading ? (
    <p>Data is loading, please wait...</p>
  ) : (
    <main>
      <PaginationComics
        setSkipComics={setSkipComics}
        totalElement={data.count}
      />
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
      <ScrollUpButton />
    </main>
  );
};
export default Comics;
