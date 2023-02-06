import React from 'react';

import './menu-item.css';


const MenuItem = ({title, imageUrl}) => {
    return (
        <div className='menu-item'
        style={{backgroundImage: `url(${imageUrl})`}}>
            <div className='content'>
                <h3>{title.toUpperCase()}</h3>
                <span>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;