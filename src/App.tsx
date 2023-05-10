import React from 'react';

import { pricingCards, features } from './data/pricingData';

import { Button, Feature, FeaturesList, Price, PricingCard, Title } from './components';

import './styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pricing Table</h1>
      <div className="pricing-table">
        {pricingCards.map((card, index) => (
          <PricingCard key={index} borderColor={card.borderColor}>
            <Title>{card.title}</Title>
            <Price price={card.price} />
            <FeaturesList>
              {features.map((feature, featureIndex) => (
                <Feature key={feature} included={card.includedFeatures[featureIndex]}>
                  {feature}
                </Feature>
              ))}
            </FeaturesList>
            <Button>Get Started</Button>
          </PricingCard>
        ))}
      </div>
    </div>
  );
};

export default App;
