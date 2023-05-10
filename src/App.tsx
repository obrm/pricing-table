import React from 'react';

import { pricingCards, features } from './data/pricingData';

import { PricingTable } from './components';

import './styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pricing Table</h1>
      <PricingTable pricingCards={pricingCards} features={features} />
    </div>
  );
};

export default App;
