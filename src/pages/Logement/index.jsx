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
                <div className="infos-part1">
                    <div className="header-logement">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                    </div>
                    <div className="header-avatar">
                        <div className="name">
                            <h4>{firstName}</h4>
                            <h4>{lastName}</h4>
                        </div>
                        {/* <h4>{logement.host.name}</h4> */}
                        <img src={logement.host.picture} alt="Host" />
                    </div>
                </div>
                <div className="infos-part2">
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