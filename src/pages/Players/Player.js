import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {

  const navigate = useNavigate()

  const {id}  =   useParams()


  const [apiData, setApiData] = useState({
    name: "", 
    key: "",
    published_at: "",
    type: "",
  });




const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTQxMTYyZjhhMGE5M2Y0MjNjYzMzNDQ2YTNmMzk4YSIsIm5iZiI6MTczNzEzMDIzNC4xMTM5OTk4LCJzdWIiOiI2NzhhODBmYTI5MDcxYzM2YWM5Nzc3MjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Tey1DYafUAu52_ZHBN8WImZo6cRBQyzhWnkoq4DgxBo",
    },
  };

  useEffect(() => {
     fetch(url, options)
       .then((res) => res.json())
       .then((response) => setApiData(response.results[0]))
       .catch((err) => console.error(err));



  })

 







  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>navigate(-1)}/>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10) }</p>
        <p>{apiData.name}</p>
        <p>{ apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
