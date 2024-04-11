import React from 'react';

function Search() {
  return (
    <form className="search">
      <div className="search__field">
        <input type="text" placeholder="Куда вы хотите поехать?" className="search__input search__input_text" />
      </div>
      <div className="search__field">
        <input
          type="text"
          placeholder="Заезд"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          className="search__input search__input_date"
        />
      </div>
      <div className="search__field">
        <input
          type="text"
          placeholder="Выезд"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          className="search__input search__input_date"
        />
      </div>
      <div className="search__field">
        <input type="number" placeholder="Кол-во гостей" className="search__input search__input_number" />
      </div>
      <button type="submit" className="search__button">
        Найти
      </button>
    </form>
  );
}

export default Search;
