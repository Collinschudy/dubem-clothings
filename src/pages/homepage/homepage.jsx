import React from 'react';
import Directory from '../../components/directory/directory';

import './homepage.css'


const HomePage = ({ title }) => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default HomePage;