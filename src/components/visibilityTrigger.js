import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function animateIntoView(isVisible, nodeId) {
  if (isVisible) {
    document.querySelector(`#${nodeId}`).classList.add('animate-in-done');
  }
}

export default function VisibilityTrigger({ nodeId }) {
  return (
    <VisibilitySensor
      onChange={(isVisible) => animateIntoView(isVisible, nodeId)}
    />
  );
}
