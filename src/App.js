import React from 'react';
import './App.css';
import Reviews from './Reviews';

function App() {
  return (
    <section className="section">
      <div className="title">
        <h2>
        <span>/</span>Reviews
        </h2>
      </div>
      <Reviews />
    </section>
  );
}

export default App;
