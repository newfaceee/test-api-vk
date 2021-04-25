import React from 'react';

import Chip from '../Chip/Chip';

import './ChipList.scss';

const ChipList = ({chips}) => {
    return (
        <div className="chip-list">
            {
                chips?.map((type, index) => (<Chip key={index} type={type} />))
            }
        </div>
    )
};

export default ChipList;
