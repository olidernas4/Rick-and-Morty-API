import { useEffect, useState } from "react";



function App (){

  const [characters, setCharacters]= useState ([])

  useEffect(() => {

    //consumir api

    fetch('https://rickandmortyapi.com/api/character')
    .then ((res) => res.json())
    .then ((data) => {
      setCharacters(data.results); // se guarda los persoanjes
      
    } )
    .catch((error) =>
      console.error('no carga los personajes intentan de nuevo', error));
  }, []); /// codigo consumir api
  return(
    <div style={{padding: '2rem,'}}>
    <h1> rick and morty personajes</h1>
    <div style={{padding: '2rem,'}}>
      {characters.map((char) => (
        <div key={char.id} >
        <img src={char.image} />
        <h3>{char.name}</h3>
        <p>Mundo  prueba: {char.origin.name}</p>
|     </div> 
      ))}

      </div> 

    </div>
  );

};

export default App
