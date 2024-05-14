import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, title, cover}) {

    console.log(title);
    console.log(cover);

    return (
        <Link to={`/logement/${id}`} className='logement-link'>
            <li className='logement'>
                <h3>{title}</h3>
                <div className='img-container'>
                    <img src={cover} alt="" />
                </div>
            </li>
        </Link>
    )
}

export default Card;