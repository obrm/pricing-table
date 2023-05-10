import React from 'react';

interface FeatureProps {
  included: boolean;
  children: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ included, children }) => {
  return (
    <li>
      {included ? <span className="icon-check">&#10003;</span> : <span className="icon-cross">&#10060;</span>}
      {children}
    </li>
  );
};

export default Feature;
