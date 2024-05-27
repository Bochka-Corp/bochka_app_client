import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import wallpapers from '../../carousel/wallpapers.js';
import RoomImage from '../RoomImage/RoomImage.jsx';

function RoomCard() {
  const [positionStyle, setPositionStyle] = useState({});
  const [position, setPosition] = useState(0);

  function handleClickPrevious() {
    setPosition(position - 1);
  }

  function handleClickNext() {
    setPosition(position + 1);
  }

  useEffect(() => {
    setPositionStyle({ transform: `translate(${-100 * position}%)` });
  }, [position]);

  return (
    <div className="room-card">
      <div className="room-card__gallery">
        <div className="room-card__images" style={positionStyle}>
          {
            wallpapers.map((imageInfo) => (
              <RoomImage
                image={imageInfo.path}
                key={imageInfo.path}
              />
            ))
          }
        </div>
        <button
          type="button"
          className="room-card__gallery-btn room-card__gallery-btn_left"
          disabled={position === 0}
          onClick={handleClickPrevious}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path
              className="hotel__btn_back-icon"
              d="M6.41764 8L11.2075 12.7931C11.5979 13.1838 11.5977 13.817 11.207 14.2073C10.8164 14.5977 10.1832 14.5975 9.79281 14.2069L4.29656 8.70687C3.90636 8.3164 3.90636 7.6836 4.29656 7.29313L9.79281 1.79313C10.1832 1.40248 10.8164 1.40226 11.207 1.79265C11.5977 2.18304 11.5979 2.81621 11.2075 3.20687L6.41764 8Z"
              fill="#212a34"
            />
          </svg>
        </button>
        <button
          type="button"
          className="room-card__gallery-btn room-card__gallery-btn_right"
          disabled={wallpapers.length - 1 === position}
          onClick={handleClickNext}
        >
          <svg
            className="hotel__gallery-icon_right"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path
              className="hotel__btn_back-icon"
              d="M6.41764 8L11.2075 12.7931C11.5979 13.1838 11.5977 13.817 11.207 14.2073C10.8164 14.5977 10.1832 14.5975 9.79281 14.2069L4.29656 8.70687C3.90636 8.3164 3.90636 7.6836 4.29656 7.29313L9.79281 1.79313C10.1832 1.40248 10.8164 1.40226 11.207 1.79265C11.5977 2.18304 11.5979 2.81621 11.2075 3.20687L6.41764 8Z"
              fill="#212a34"
            />
          </svg>
        </button>
      </div>
      <div className="room-card__info-container">
        <div className="room-card__info">
          <h4 className="room-card__title">
            Стандартный двухместный номер, вид в холл отеля
          </h4>
          <p className="room-card__text">
            Площадь: 15 м
            <sup>2</sup>
          </p>
          <p className="room-card__text">
            В номере:
          </p>
          <div className="room-card__facilities">
            <div className="room-card__facility">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  d="M9.99992 1.33331V2.66665L12.4312 2.67461L9.33325 5.77244L10.2274 6.66664L13.3272 3.56696L13.3333 5.99998H14.6666V1.33331H9.99992Z"
                  fill="currentColor"
                />
                <path
                  d="M5.99992 14.6666V13.3254H3.5686L6.66659 10.2275L5.77249 9.33332L2.67266 12.433V9.99998H1.33325V14.6666H5.99992Z"
                  fill="currentColor"
                />
              </svg>
              35 м2
            </div>
            <div className="room-card__facility">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  d="M9.99992 1.33331V2.66665L12.4312 2.67461L9.33325 5.77244L10.2274 6.66664L13.3272 3.56696L13.3333 5.99998H14.6666V1.33331H9.99992Z"
                  fill="currentColor"
                />
                <path
                  d="M5.99992 14.6666V13.3254H3.5686L6.66659 10.2275L5.77249 9.33332L2.67266 12.433V9.99998H1.33325V14.6666H5.99992Z"
                  fill="currentColor"
                />
              </svg>
              Бесплатный Wi‑Fi
            </div>
            <div className="room-card__facility">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  d="M9.99992 1.33331V2.66665L12.4312 2.67461L9.33325 5.77244L10.2274 6.66664L13.3272 3.56696L13.3333 5.99998H14.6666V1.33331H9.99992Z"
                  fill="currentColor"
                />
                <path
                  d="M5.99992 14.6666V13.3254H3.5686L6.66659 10.2275L5.77249 9.33332L2.67266 12.433V9.99998H1.33325V14.6666H5.99992Z"
                  fill="currentColor"
                />
              </svg>
              Индивидуальная ванная комната
            </div>
            <div className="room-card__facility">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  d="M9.99992 1.33331V2.66665L12.4312 2.67461L9.33325 5.77244L10.2274 6.66664L13.3272 3.56696L13.3333 5.99998H14.6666V1.33331H9.99992Z"
                  fill="currentColor"
                />
                <path
                  d="M5.99992 14.6666V13.3254H3.5686L6.66659 10.2275L5.77249 9.33332L2.67266 12.433V9.99998H1.33325V14.6666H5.99992Z"
                  fill="currentColor"
                />
              </svg>
              Центральное кондиционирование
            </div>
          </div>
        </div>
        <div className="room-card__booking">
          <div className="room-card__pricing">
            <p className="room-card__price">
              48500₽
            </p>
            цена за 8 ночей
          </div>
          <Link to="/hotel/book/id" className="room-card__link">
            Забронировать
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
