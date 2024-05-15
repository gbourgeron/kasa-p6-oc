import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import logements from '../../logements.json';
import StarRating from "../../components/StarRating";
import './index.scss';

function LogementPage () {
    const { id } = useParams();

    const logement = logements.find(logement => logement.id === id );

    if (!logement) {
        return <div>Logement introuvable</div>;
    }

    return (
        <div className="logement-container">
            <Slideshow images={logement.pictures} />
            <div>
                <div>
                    <div className="header-logement">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                    </div>
                    <div className="header-avatar">
                        <h4>{logement.host.name}</h4>
                        <img src={logement.host.picture} alt="Host" />
                    </div>
                </div>
                <div>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                    <div>
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