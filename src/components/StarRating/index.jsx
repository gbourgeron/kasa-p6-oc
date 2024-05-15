import React from 'react';
import './index.scss';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="star filled">&#9733;</span>); // Étoile pleine si i < rating
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>); // Étoile vide sinon
    }
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
