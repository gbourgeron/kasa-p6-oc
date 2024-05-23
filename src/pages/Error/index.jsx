import { Link } from 'react-router-dom';
import './index.scss';

function Error() {
    return (
        <div className='error'>
            <h2 className="error-404">404</h2>
            <h3 className='error-text'>Oups! La page que vous avez demandez n'existe pas.</h3>
            <Link to="/" className='home-link'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error
