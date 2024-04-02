import React, { useState, useEffect } from 'react';
import Bean from './Bean';

interface Props {
    searchQuery: string;
    sortQuery: string;
}

interface BeanItem {
    beanId: number;
    imageUrl: string;
    description: string;
    flavorName: string;
    colorGroup: string;
    ingredients: string[];
    seasonal: boolean;
    glutenFree: boolean;
    sugarFree: boolean;
    backgroundColor: string;
}

const Beans: React.FC<Props> = ({ searchQuery, sortQuery }) => {
    const [jellys, setJellys] = useState<BeanItem[] | null>(null);

    useEffect(() => {
        const fetchBeans = async () => {
            try {
                const response = await fetch(
                    `https://jellybellywikiapi.onrender.com/api/beans?pageSize=50`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setJellys(data.items);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchBeans();
    }, []);

    if (jellys === null) {
        return <div>Loading...</div>;
    }

    const filteredProducts = jellys.filter((bean) =>
        bean.flavorName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortQuery === 'normal') {
            return a.flavorName.localeCompare(b.flavorName);
        } else if (sortQuery === 'reverse') {
            return b.flavorName.localeCompare(a.flavorName);
        }
        return 0;
    });

    return (
        <div className="beans__list">
            {sortedProducts.map((bean, index) => (
                <Bean key={index} bean={bean} />
            ))}
        </div>
    );
};

export default Beans;
