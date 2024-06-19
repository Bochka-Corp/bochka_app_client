import React from 'react';
import Carousel from '../Carousel/Carousel.jsx';
import Header from '../Header/Header.jsx';

function Main() {
  return (
    <main className="main">
      <Header main isLoggedIn />
      <Carousel />
    </main>
  );
}

export default Main;
