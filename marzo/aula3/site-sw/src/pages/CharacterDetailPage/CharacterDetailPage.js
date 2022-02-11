import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetailPage() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  console.log(details);
  const getDetail = () => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="App">
      <ul>
        <li>Name: {details.name}</li>
        <li>Height: {details.height}</li>
        <li>Mass: {details.mass}</li>
        <li>Hair Color: {details.hair_color}</li>
        <li>Skin Color: {details.skin_color}</li>
        <li>Eye Color: {details.eye_color}</li>
        <li>Birth Year: {details.birth_year}</li>
        <li>Gender: {details.gender}</li>
      </ul>
    </div>
  );
}

export default CharacterDetailPage;
