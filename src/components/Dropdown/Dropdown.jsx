import React from 'react';

const Dropdown = ({ onChange, value }) => {

    return (
        <div className="dropdown">
            <span>Количество выводимых постов</span>
            <select onChange={onChange} value={value}>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    )
};

export default Dropdown;
