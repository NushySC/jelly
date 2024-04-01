import React from 'react';

interface Bean {
    colorGroup: string;
}

interface Props {
    beans: Bean[];
    // onColorSelect: (color: string) => void;
}

const Side: React.FC<Props> = ({ beans }) => {
    // Extracting unique colors from beans
    // const colors = Array.from(new Set(beans.map(bean => bean.colorGroup)));
    return (
        <div className='side'>
            {/* <p>Filter by color:</p>
            {colors.map((color, index) => (
                <button key={index} onClick={() => onColorSelect(color)}>
                    {color}
                </button>
            ))}
            <button onClick={() => onColorSelect('')}>Clear Filter</button> */}
        </div>
    );
};

export default Side;
