// components/ExampleCarouselImage.jsx
import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ccc' }}>
      <h2>{text}</h2>
    </div>
  );
}

export default ExampleCarouselImage;
