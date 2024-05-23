import React from 'react';
import './index.scss';
import starFill from '../../assets/star-fill.svg';
import starEmpty from '../../assets/star-empty.svg';

function StarRating({ rating }) {
      const stars = [];
      for (let i = 0; i < 5; i++) {
          if (i < rating) {
              stars.push(<img key={i} src={starFill} alt="Filled star" className="star" />); // Étoile pleine si i < rating
          } else {
              stars.push(<img key={i} src={starEmpty} alt="Empty star" className="star" />); // Étoile vide sinon
          }
      }

      return <div className="star-rating">{stars}</div>;
}

export default StarRating;
