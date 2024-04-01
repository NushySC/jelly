import React from 'react';
import Bean from './bean';

interface Beansy {
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

interface Props {
    beans: Beansy[];
}


const Beans: React.FC<Props> = ({ beans }) => {

    return (
        <div className='beans'>
            <input className='beans__filter' type="text" placeholder='Search ingredient...' />
            <div className="beans__list">
               {beans.map((bean, index) => (
                    <Bean key={index} bean={bean} />
                ))}
            </div>
        </div>
    );
};

export default Beans;
