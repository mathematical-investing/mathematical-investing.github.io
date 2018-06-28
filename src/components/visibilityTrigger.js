import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function animateIntoView(isVisible, nodeId, offset) {
  if (isVisible) {
    setTimeout(() => (
      document.querySelector(`#${nodeId}`).classList.add('animate-in-done')
    ), offset);
  }
}

export default function VisibilityTrigger({ nodeId, offset = 0 }) {
  return (
    <VisibilitySensor
      onChange={(isVisible) => animateIntoView(isVisible, nodeId, offset)}
    />
  );
}
