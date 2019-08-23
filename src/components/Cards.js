import React from 'react';
import './Cards.css';

const Cards = ({character}) => {
   // console.log(card);
    return (
        <div className="card">
          <div className="card-img">
          <img src={character.img} alt="imagem" className="hero-img"/>
          </div>
          <div className="card-description">
          <h3>{character.name}</h3>
          <p>{character.status}</p>
          <p>{character.occupation}</p>
          </div>

        </div>
    );
}

export default Cards;