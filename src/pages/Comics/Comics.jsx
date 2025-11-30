import axios from "axios";
import { useState, useEffect } from "react";
import getImg from "../../utils/getImg";
import "./comics.css";
import Pagination from "../../components/Pagination/Pagination";
import ScrollUpButton from "../../components/ScrollUp/ScrollUp";

const Comics = ({ searchComics, setCurrentSkip, currentSkip }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let comicsSearch = "";
      let actualSkip = "";
      if (currentSkip) {
        console.log(currentSkip);
        actualSkip += "?skip=" + currentSkip;
        console.log(actualSkip);
        try {
          const response = await axios.get(
            `http://localhost:3000/comics${actualSkip}`
          );
          // console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else if (searchComics) {
        comicsSearch += "?title=" + searchComics;
        try {
          const response = await axios.get(
            `http://localhost:3000/comics${comicsSearch}`
          );
          // console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        try {
          const response = await axios.get(`http://localhost:3000/comics`);
          // console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    fetchData();
  }, [searchComics, currentSkip]);

  return isLoading ? (
    <>
      <p>Data is loading, please wait...</p>
    </>
  ) : (
    <main>
      <h1>LES COMICS</h1>
      <div className="container">
        {" "}
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
      <Pagination
        setCurrentSkip={setCurrentSkip}
        totalElement={data.count}
        limit={data.limit}
      />
      <ScrollUpButton />
    </main>
  );
};
export default Comics;
