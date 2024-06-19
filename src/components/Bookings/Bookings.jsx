import React from 'react';
import Header from '../Header/Header.jsx';
import BookingCard from '../BookingCard/BookingCard.jsx';

function Bookings() {
  return (
    <section className="bookings">
      <Header isLoggedIn />
      <div className="bookings__container">
        <div className="bookings__title">
          Мои бронирования
        </div>
        <div className="bookings__content">
          <BookingCard />
          <BookingCard />
        </div>
      </div>
    </section>
  );
}

export default Bookings;
