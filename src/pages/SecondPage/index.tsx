import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { listImage } from "../../constants/urls";
import Animal from "../../models/animalModel";
import ApiService from "../../services/api/apiService";
import "./secondPage.scss";

const SecondPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [animalList, setAnimalList] = useState<Animal[]>([]);

  let fetchAnimalData: () => void = async () => {
    setLoading(true);
    let data: Animal[] = await ApiService.get(listImage);
    console.log(data);
    setAnimalList(data);
    setLoading(false);
  };

  useEffect(() => {
    console.log("use effect called");
    fetchAnimalData();
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="second-page">
      {animalList.map((animal) => (
        <Card
          name={animal.name}
          imageUrl={animal.image_link}
          type={animal.animal_type}
        />
      ))}
    </div>
  );
};

export default SecondPage;
