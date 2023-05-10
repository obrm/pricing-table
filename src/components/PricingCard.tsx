import React from 'react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  includedFeatures: boolean[];
  borderColor: string;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  includedFeatures,
  borderColor,
  buttonText
}) => {
  return (
    <div className={`card ${borderColor}`}>
      <h2>{title}</h2>
      <p className="price">
        ${price}{' '}
        <span className="month">
        / Mo
      </span>
      </p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            {includedFeatures[index] ? (
              <span className="icon-check">&#10003;</span>
            ) : (
              <span className="icon-cross">&#10060;</span>
            )}
            {feature}
          </li>
        ))}
      </ul>
      <button className={borderColor}>{buttonText}</button>
    </div>
  );
};

export default PricingCard;
