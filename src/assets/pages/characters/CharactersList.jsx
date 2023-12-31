//import style
import "./charactersList.css";

// Import library
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Fonction pour limiter le nombre de caractères dans le titre
const titleMaxLength = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + "...";
  }
  return title;
};

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-api--7mh6b6ddblpm.code.run/characters"
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  // si l'url de mon image contient image_not_aviable alors je la remplace par c'elle de mon choix
  const getAviableOrNot = (thumbnail) => {
    if (thumbnail.path.includes("image_not_available")) {
      return "https://imgs.search.brave.com/Lxlx74DUPFTGBRJjpDbyJZd5FjJTFdeWj2hMoea_nV8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlLzkw/Lzg2LzdlOTA4Njhj/NGJjYzQxMWFmZDM0/YWM5NmQ1NWRlMGFl/LmpwZw"; // Remplacez "url_de_votre_image_de_replacement" par le chemin de votre image de remplacement
    }
    return `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;
  };

  return (
    <article className="characters">
      <div className="characters-list">
        {characters.map((character) => (
          <Link
            className="link-style"
            key={character._id}
            to={`/character/${character._id}`}
          >
            <section className="character-container">
              <div className="character-card">
                <img
                  className="character-image"
                  src={getAviableOrNot(character.thumbnail)}
                  alt={character.name}
                />
                <h2 className="mg-10">{titleMaxLength(character.name, 20)}</h2>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default CharactersList;
