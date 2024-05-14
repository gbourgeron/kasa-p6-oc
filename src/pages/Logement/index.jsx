import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import logements from '../../logements.json';

function LogementPage () {
    const { id } = useParams();

    const logement = logements.find(logement => logement.id === id );

    return (
        <div>
            <div>
                <h2>{logement.name}</h2>
                <Slideshow images={logement.pictures} />
            </div>
        </div>
    );
};

export default LogementPage;