import React from 'react';

const Pagination = ({onClick, disabled}) => {
    return (<div>
        <button onClick={onClick} disabled={disabled}>Next page</button>
    </div>)
};

export default Pagination;
