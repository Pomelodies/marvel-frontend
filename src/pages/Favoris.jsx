// import { useState, useEffect } from "react";
// import axios from "axios";
import Cookies from "js-cookie";

const Favoris = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  let copyFav = [];
  let fav = "";

  if (Cookies.get("userFavoriteCookies")) {
    fav = Cookies.get("userFavoriteCookies");
    console.log(fav);
    copyFav = fav.split(",");
    console.log(copyFav);
  }

  // useEffect(() => {
  //   copyFav.map((id) => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:3000/character/${id}`
  //         );
  //         console.log(response.data);
  //         // copie du tableau
  //         const newTab = [...data];
  //         // modif du tableau
  //         newTab.push(response.data.name);
  //         //envoie vers le state
  //         setData(newTab);
  //         setIsLoading(false);
  //         console.log(response.data.name);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     fetchData();
  //   });
  // }, []);

  return (
    <div>
      Vos personnages mis en favoris sont :
      <ul>
        {copyFav.map((element) => {
          return <li>• {element}</li>;
        })}
      </ul>
    </div>
  );
};

export default Favoris;
