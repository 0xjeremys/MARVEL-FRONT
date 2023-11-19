// Importez ces modules au début de votre fichier
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./characterDetails.css";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-api--7mh6b6ddblpm.code.run/character/${characterId}`
        );
        console.log("Character details response:", response.data);
        setCharacterDetails(response.data);

        const comicResponse = await axios.get(
          `https://site--marvel-api--7mh6b6ddblpm.code.run/comics/${characterId}`
        );
        console.log(comicResponse.data.data.comics);
        setComics(comicResponse.data.data.comics);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  // je vérifie si l'image est disponible sinon je la remplace
  const getAviableOrNot = (thumbnail) => {
    const placeholderImageUrl =
      "https://imgs.search.brave.com/Lxlx74DUPFTGBRJjpDbyJZd5FjJTFdeWj2hMoea_nV8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlLzkw/Lzg2LzdlOTA4Njhj/NGJjYzQxMWFmZDM0/YWM5NmQ1NWRlMGFl/LmpwZw";

    if (thumbnail.path.includes("image_not_available")) {
      return placeholderImageUrl;
    }
    return `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;
  };
  // j'affiche les détails du personnage
  return (
    <section className="character">
      <div className="characters-container">
        {characterDetails && (
          <div className="character-details">
            <h1 className="h1-name">{characterDetails.data.name}</h1>
            <img
              src={getAviableOrNot(characterDetails.data.thumbnail)}
              alt={characterDetails.data.name}
            />
            <p>{characterDetails.data.description}</p>
          </div>
        )}
        <div className="comics-list">
          <h2> relatifs Comics :</h2>
          {comics.map((comic, index) => (
            <div key={index} className="comic-card">
              <h3>{comic.title}</h3>
              <img src={getAviableOrNot(comic.thumbnail)} alt={comic.title} />
              {/* <p>{comic.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterDetails;
