import React from 'react';
import '../styles/SidebarOption.css';

function SidebarOption({Icon, title, number, selected = false}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption__active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;