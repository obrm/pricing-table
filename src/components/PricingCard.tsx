import React from 'react';

import { Button, Feature, Price, Title } from '.';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isFeatureIncluded: boolean[];
  borderColor: string;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isFeatureIncluded,
  borderColor,
  buttonText
}) => {
  return (
    <div className={`card ${borderColor}`}>
      <Title title={title} />
      <Price price={price} />
      <ul>
        {features.map((feature, index) => (
          <Feature key={feature} included={isFeatureIncluded[index]} feature={feature} />          
        ))}
      </ul>
      <Button text={buttonText} />
    </div>
  );
};

export default PricingCard;
