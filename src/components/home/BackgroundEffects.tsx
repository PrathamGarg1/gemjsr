"use client";

import dynamic from 'next/dynamic';

const BackgroundEffectsContent = dynamic(
  () => import('./BackgroundEffectsContent').then((mod) => mod.BackgroundEffectsContent),
  { ssr: false }
);

export function BackgroundEffects() {
  return <BackgroundEffectsContent />;
}
