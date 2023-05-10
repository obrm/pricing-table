import React from 'react';

interface FeaturesListProps {
  children: React.ReactNode;
}

const FeaturesList: React.FC<FeaturesListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default FeaturesList;
