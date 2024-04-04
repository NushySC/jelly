import React from 'react';

interface SortProps {
    onChange: (sortQuery: string) => void;
}

const Sort: React.FC<SortProps> = ({ onChange }) => {

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onChange(selectedValue);
    };

    return (
        <select className='sort' name="alphabetic" id="sortName" onChange={handleSortChange}>
            <option value="">Sort by name</option>
            <option value="normal">From A to Z</option>
            <option value="reverse">From Z to A</option>
        </select>
    );
};

export default Sort;
