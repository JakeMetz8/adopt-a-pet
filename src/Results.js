import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            animal={pet.type}
            name={pet.name}
            breed={pet.breed}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            pet={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
