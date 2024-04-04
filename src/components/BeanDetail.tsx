import React from "react";
import { ReactComponent as CloseIcon } from "../img/close.svg";

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
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>; 

}

const BeanDetail: React.FC<Props> = ({ bean, setShowDetail }) => {

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="modal" >
      <div className="modal__content" style={{ backgroundColor: bean.backgroundColor }}>

        <div className="modal__body">
        <CloseIcon className="modal__close" onClick={handleCloseDetail}/>
        <h2 className="modal__title">{bean.flavorName}</h2>
        <img src={bean.imageUrl} alt={bean.flavorName} className="modal__img" />
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
      </div>
    </div>
  );
};

export default BeanDetail;
