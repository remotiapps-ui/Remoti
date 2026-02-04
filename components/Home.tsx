import React from 'react';
import { Hero } from './Hero';
import { Ecosystem } from './Ecosystem';
import { VoiceFeature } from './VoiceFeature';
import { HowItWorks } from './HowItWorks';
import { TrustBar } from './TrustBar';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Ecosystem />
      <VoiceFeature />
      <HowItWorks />
    </>
  );
};