import React from 'react';
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import HotelCard from '../HotelCard/HotelCard.jsx';

function Result() {
  return (
    <main className="result">
      <Header />
      <div className="result__container">
        <div className="result__content">
          <Search result />
          <div className="result__filters">
            <button type="button" className="result__filter-button">
              Популярные
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <button type="button" className="result__filter-button">
              Цена
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
          <div className="result__hotel-cards">
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </div>
        <div className="result__map-content">
          <iframe
            className="result__map"
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abdb098e5c02d10a236415c85a3e8c89c4d6491cd8aab5eae3c87c86c71cbc479&amp;source=constructor"
            frameBorder="0"
          />
        </div>
      </div>
    </main>
  );
}

export default Result;
