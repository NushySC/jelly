import React from 'react';
import Bean from './Bean';

interface Props {
    searchQuery: string;
    sortQuery: string;
    jellys: BeanItem[] | null; // Receive jellys as props
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

const Beans: React.FC<Props> = ({ searchQuery, sortQuery, jellys }) => {
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
