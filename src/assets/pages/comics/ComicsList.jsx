//import style
import "./comics.css";

// Import library
import { useState, useEffect } from "react";
import axios from "axios";

// Fonction pour limiter le nombre de caractères dans le titre
const titleMaxLength = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + "...";
  }
  return title;
};
// Composant React
const ComicsList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get("https://site--marvel-api--7mh6b6ddblpm.code.run/comics")
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((error) => {
        console.error("Error fetching comics:", error);
      });
  }, []);

  // si l'url de mon image contient image_not_aviable alors je la remplace par c'elle de mon choix
  const getAviableOrNot = (thumbnail) => {
    if (thumbnail.path.includes("image_not_available")) {
      return "https://imgs.search.brave.com/Lxlx74DUPFTGBRJjpDbyJZd5FjJTFdeWj2hMoea_nV8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlLzkw/Lzg2LzdlOTA4Njhj/NGJjYzQxMWFmZDM0/YWM5NmQ1NWRlMGFl/LmpwZw"; // Remplacez "url_de_votre_image_de_replacement" par le chemin de votre image de remplacement
    }
    return `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;
  };

  return (
    <article className="comics">
      <div className="comics-list">
        {/* Affichez la liste des comics */}
        {comics.map((comic) => (
          <section key={comic._id} className="comics-container">
            <div className="comics-card">
              <img
                className="comics-image"
                src={getAviableOrNot(comic.thumbnail)}
                alt={comic.title}
              />
              <h2 className="mg-10">{titleMaxLength(comic.title, 18)}</h2>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default ComicsList;
