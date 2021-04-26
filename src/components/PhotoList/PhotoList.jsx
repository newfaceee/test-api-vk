import React from 'react';

import Photo from '../Photo/Photo';

const PhotoList = ({photos}) => {
    return (<div className="photo-list">
        {
            photos?.map((photo, index) => {
                const src = photo?.sizes[photo.sizes.length - 1]?.url;
                return <Photo key={index} src={src} />
            })
        }
    </div>)
};

export default PhotoList;
