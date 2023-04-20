import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchFor, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => {
      return res.json()
    })
    .then((plantData) => {
      setPlants(plantData)
    })
  }, [])

  function handlePlantUpdate(newPlant) {
    setPlants([...plants, newPlant])
  }

  const plantsToDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchFor.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onPlantUpdate={handlePlantUpdate}/>
      <Search searchFor={searchFor} onPlantSearch={setSearch}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
