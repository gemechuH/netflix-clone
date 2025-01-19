import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
// import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
const TitleCard = ({title, category}) => {

  const [apiData,  setApiData] = useState([])
  const cardsRef = useRef()
  const url = `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTQxMTYyZjhhMGE5M2Y0MjNjYzMzNDQ2YTNmMzk4YSIsIm5iZiI6MTczNzEzMDIzNC4xMTM5OTk4LCJzdWIiOiI2NzhhODBmYTI5MDcxYzM2YWM5Nzc3MjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Tey1DYafUAu52_ZHBN8WImZo6cRBQyzhWnkoq4DgxBo",
    },
  };

 


  
  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }
  useEffect(() => {
     fetch(url, options)
       .then((res) => res.json())
       .then((response) => setApiData(response.results))
       .catch((err) => console.error(err));





    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  



  return (
    <div className="title-cards">
      <h2>{title?title:'popular on netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="card" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
