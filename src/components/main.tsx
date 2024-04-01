import React, { useState, useEffect } from 'react';
import Side from './side';
import Beans from './beans';

const Main = () => {
    const [beans, setBeans] = useState([]);

    useEffect(() => {
        const fetchBeans = async () => {
            try {
                const response = await fetch(
                    `https://jellybellywikiapi.onrender.com/api/beans?pageSize=50`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                // console.error(data.items);
                setBeans(data.items);
            } catch (error) {
                console.error('Error:');
            }
        };

        fetchBeans();
    }, []);

    // // Function to filter beans by color
    // const handleColorSelect = (color) => {
    //     if (color === '') {
    //         setFilteredBeans(beans); // If no color selected, show all beans
    //     } else {
    //         const filtered = beans.filter((bean) => bean.colorGroup === color);
    //         setFilteredBeans(filtered);
    //     }
    // };

    return (
        <div className="main">
            {/* <Side beans={beans} onColorSelect={handleColorSelect} /> */}
            <Side beans={beans} />
            <Beans beans={beans} />
        </div>
    );
};

export default Main;
