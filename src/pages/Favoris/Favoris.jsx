import Cookies from "js-cookie";
import getImg from "../../utils/getImg";
import "./favoris.css";

const Favoris = () => {
  let dataFinal = null;
  let fav = "";

  fav = Cookies.get("userFavoriteCharacters");
  console.log(fav);
  dataFinal = JSON.parse(fav);
  // console.log(dataFinal);

  //JSON PARSE > POUR RECUPERER MON TABLEAU D'OBJET

  return (
    <div>
      <h1>LES FAVORIS</h1>
      <h2>Les personnages favoris</h2>
      <div className="fav-articles">
        {dataFinal.map((element) => {
          return (
            <article key={element._id}>
              <img src={getImg(element.thumbnail)} alt="Character picture" />
              <p>{element.name}</p>
            </article>
          );
        })}
      </div>
      <h2>Les comics favoris</h2>
    </div>
  );
};

export default Favoris;
