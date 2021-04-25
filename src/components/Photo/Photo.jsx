import React from 'react';

import './Photo.scss';

const Photo = ({src}) => {
    return <img className="photo" src={src}/>
};

export default Photo;
