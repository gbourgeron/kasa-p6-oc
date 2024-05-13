import React, { useState } from 'react';
import './index.scss'
import arrow from '../../assets/arrow.png'

function Collapse({ id, title, description}) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className={`rule-collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className="header-collapse">
                <h2 className="title-collapse">{title}</h2>
                <img 
                    className={`arrow-collapse ${isCollapsed ? '' : 'rotate'}`} 
                    src={arrow} 
                    alt="Flèche pour dérouler le texte" onClick={toggleCollapse} />
            </div>
            <div className="text-block">
                <p className="text-collapse">{description}</p>
            </div>
        </div>
    )
}

export default Collapse;