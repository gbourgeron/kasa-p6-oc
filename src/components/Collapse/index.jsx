import React, { useState } from 'react';
import './index.scss'
import arrow from '../../assets/arrow.png'

function Collapse({ title, content, contentType }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    const renderContent = () => {
        if (contentType === 'paragraph') {
            return <p className="content-collapse">{content}</p>;
        } else if (contentType === 'list') {
            return (
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            return null; // Gérer le cas où le type de contenu n'est pas reconnu
        }
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
                {renderContent()}
            </div>
        </div>
    )
}

export default Collapse;