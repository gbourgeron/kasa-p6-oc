import './index.scss';

function Card({ id, title, cover}) {
    return (
        <li className='logement'>
            <h3>{title}</h3>
            <div className='img-container'>
                <img src={cover} alt="" />
            </div>
        </li>
    )
}

export default Card;