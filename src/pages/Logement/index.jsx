import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import logements from '../../logements.json';
import StarRating from "../../components/StarRating";
import './index.scss';

function LogementPage () {
    const { id } = useParams();

    const logement = logements.find(logement => logement.id === id );

    if (!logement) {
        return <Navigate to="/error" />;

    }

    const hostNameParts = logement.host.name.split(' ');
    const firstName = hostNameParts[0];
    const lastName = hostNameParts.slice(1).join(' ');

    return (
        <div className="logement-container">
            <Slideshow images={logement.pictures} />
            <div className="infos-logement">
                <div className="infos">
                    <div className="header-logement">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <div className="tags">
                            {logement.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="header-avatar">
                        <div className="name-picture">
                            <div className="name">
                                <h4>{firstName}</h4>
                                <h4>{lastName}</h4>
                            </div>
                            <img src={logement.host.picture} alt="Host" />
                        </div>
                        <StarRating rating={logement.rating} />
                    </div>
                </div>
                <div className="collapse-group">
                    <Collapse title="Description" content={logement.description} contentType="paragraph" />
                    <Collapse title="Équipements" content={logement.equipments} contentType="list" />
                </div>
            </div>
        </div>
);
};

export default LogementPage;