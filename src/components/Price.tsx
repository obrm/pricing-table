import React from 'react';

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = ({ price }) => {
  return <p className="price">${price} / mo</p>;
};

export default Price;
