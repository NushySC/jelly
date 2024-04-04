import React from "react";
import { ReactComponent as CloseIcon } from "../img/close.svg";
import { ReactComponent as GlutenIcon } from "../img/gluten.svg";
import { ReactComponent as SugarIcon } from "../img/sugar.svg";
import { ReactComponent as SeasonIcon } from "../img/season.svg";
import { ReactComponent as KosherIcon } from "../img/kosher.svg";

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
  kosher: boolean;
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
    <div className="modal" onClick={handleCloseDetail}>
      <div
        className="modal__content"
        style={{ backgroundColor: bean.backgroundColor }}
      >
        <div className="modal__body">
          <CloseIcon className="modal__close" onClick={handleCloseDetail} />
          <h2 className="modal__title">{bean.flavorName}</h2>
          <img
            src={bean.imageUrl}
            alt={bean.flavorName}
            className="modal__img"
          />
          <p className="modal__description">{bean.description}</p>
          <div className="modal__icons">
            <p
              className={`modal__category ${
                bean.glutenFree === true ? "" : "off"
              } `}
            >
              <GlutenIcon className="modal__icon" />
              Gluten Free
            </p>

            <p
              className={`modal__category ${
                bean.seasonal === true ? "" : "off"
              } `}
            >
              <SeasonIcon className="modal__icon" />
              Seasonal
            </p>

            <p
              className={`modal__category ${
                bean.sugarFree === true ? "" : "off"
              } `}
            >
              <SugarIcon className="modal__icon" />
              Sugar Free
            </p>

            <p
              className={`modal__category ${
                bean.kosher === true ? "" : "off"
              } `}
            >
              <KosherIcon className="modal__icon" />
              Kosher
            </p>
          </div>
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
