import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./comicDetails.css";

const ComicDetails = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    const fetchComicDetails = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-api--7mh6b6ddblpm.code.run/comic/${comicId}`
        );
        console.log(response.data.data.title);
        setComic(response.data.data);
      } catch (error) {
        console.error("Error fetching comic details:", error);
      }
    };

    fetchComicDetails();
  }, [comicId]);

  const getAviableOrNot = (thumbnail) => {
    if (thumbnail.path.includes("image_not_available")) {
      return "https://imgs.search.brave.com/Lxlx74DUPFTGBRJjpDbyJZd5FjJTFdeWj2hMoea_nV8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlLzkw/Lzg2LzdlOTA4Njhj/NGJjYzQxMWFmZDM0/YWM5NmQ1NWRlMGFl/LmpwZw"; // Remplacez "url_de_votre_image_de_replacement" par le chemin de votre image de remplacement
    }
    return `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;
  };

  return (
    <div className="comic-details">
      {comic ? (
        <div className="comic-details-card">
          <h1 className="comic-title">{comic.title}</h1>
          <div className="article">
            <div className="img-article-comic">
              <img src={getAviableOrNot(comic.thumbnail)} alt="" />
            </div>
            <div className="description-article-comic">
              <p className="comic-description">{comic.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ComicDetails;
