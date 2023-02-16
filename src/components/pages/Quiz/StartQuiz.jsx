import React, { useState, useEffect }  from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style/StartQuizz.css';

export default function StartQuizz() {

    const {id} = useParams();

  let photo1 = {
    photo: "/Photos/photo1.jpg",
    nom: "photo1"
  };
  let photo2 = {
    photo: "/Photos/photo2.jpg",
    nom: "photo2"
  };
  let photo3 = {
    photo: "/Photos/photo3.jpg",
    nom: "photo3"
  };
  let photo4 = {
    photo: "/Photos/photo4.jpg",
    nom: "photo4"
  };

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const photosToggle = [photo3, photo2, photo1, photo4];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % photosToggle.length;
        if (nextIndex === photosToggle.length - 1) {
          clearInterval(timer);
          navigate(`/quiz/${id}`);
        }
        return nextIndex;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <img className="slide" src={photosToggle[index].photo} alt={photosToggle[index].nom} />
    </div>
  );
}