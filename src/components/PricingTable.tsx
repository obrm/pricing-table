import React from 'react';

import PricingCardData from '../types/PricingCardData';

import { Button, Feature, FeaturesList, Price, PricingCard, Title } from './';

interface PricingTableProps {
  pricingCards: PricingCardData[];
  features: string[];
}

const PricingTable: React.FC<PricingTableProps> = ({ pricingCards, features }) => {
  return (
    <div className="pricing-table">
      {pricingCards.map((card) => {
        const { borderColor, title, price, includedFeatures, buttonText } = card;
        return (
          <PricingCard key={title} borderColor={borderColor}>
            <Title>{title}</Title>
            <Price price={price} />
            <FeaturesList>
              {features.map((feature, featureIndex) => (
                <Feature key={feature} included={includedFeatures[featureIndex]}>
                  {feature}
                </Feature>
              ))}
            </FeaturesList>
            <Button>{buttonText}</Button>
          </PricingCard>
        );
      })}
    </div>
  );
};

export default PricingTable;