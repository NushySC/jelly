import React, { useState } from "react";
import BeanDetail from "./BeanDetail";

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
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleDetail = () => {
    setShowDetail(true);
  };

  return (
    <div className="bean" style={{ backgroundColor: bean.backgroundColor }}>
      <img src={bean.imageUrl} alt={bean.flavorName} className="bean__img" />
      <div className="bean__body">
        <h2 className="bean__title">{bean.flavorName}</h2>
        <p className="bean__description">{bean.description}</p>
      </div>
      <button className="bean__button" onClick={handleDetail}>
        Know more
      </button>
      {showDetail && <BeanDetail bean={bean} setShowDetail={setShowDetail} />}
    </div>
  );
};

export default Bean;
