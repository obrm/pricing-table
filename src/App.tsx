import React from 'react';

import { features, pricingCards } from './data/pricingData';

import { PricingCard } from './components';

import './styles/global.scss';

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>Pricing Table</h1>
      <div className="pricing-table">
        {pricingCards.map((card) => (
          <PricingCard key={card.price} {...card} features={features} />
        ))}
      </div>
    </div>
  );
};

export default App;
