import React from 'react';
import './Cards.css';
import estrela from '../assets/estrela.png'

const Cards = ({ character }) => {
  // console.log(card);
  return (
    <div className="character">
      <img src={character.img} alt="imagem-character" />
      <div className={`character-status ${character.status === `Alive` ? `alive` : 'dead'}`}>
        <p>{character.status}</p>
      </div>
      <div className="character-description">
        <h3>{character.name}</h3>
        <div className="birthday">
          <img src={estrela} alt="birthday" />
         <p>{character.birthday}</p>
        </div>
        <p>{character.occupation[0]} <br /> {character.occupation[1]}</p>
      </div>
    </div>
  );
}

export default Cards;