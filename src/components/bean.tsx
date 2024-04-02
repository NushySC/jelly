import React from 'react';
interface Beany {
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
    bean: Beany;
}

const Bean: React.FC<Props> = ({ bean }) => {
    return (
                <div className="bean" style={{ backgroundColor: bean.backgroundColor }}>
                    <h2 className="bean__title">{bean.flavorName}</h2>
                    <img src={bean.imageUrl} alt={bean.flavorName} className="bean__img" />
                    <p className="bean__description">{bean.description}</p>
                    <p className="bean__category">{bean.glutenFree}</p>
                    <p className="bean__category">{bean.seasonal}</p>
                    <p className="bean__category">{bean.sugarFree}</p>
                    <p className="bean__ingredients">Ingredients:</p>
                    {bean.ingredients && (
                        <div className="bean__tags">
                            {bean.ingredients.map((ingredient, index) => (
                                <span key={index} className="bean__tag">
                                    {ingredient}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            );
};

export default Bean;
