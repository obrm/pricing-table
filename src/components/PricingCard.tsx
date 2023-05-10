import React from 'react';

interface PricingCardProps {
  borderColor: string;
  children: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({ borderColor, children }) => {
  return <div className={`card ${borderColor}`}>{children}</div>;
};

export default PricingCard;
