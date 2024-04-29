import React from 'react';
import { Link } from 'react-router-dom';

function Search({ result }) {
  return (
    <form className={result ? 'search search_result' : 'search'}>
      <div className="search__field">
        <input type="text" placeholder="Куда вы хотите поехать?" className={result ? 'search__input search__input_text search__input_result' : 'search__input search__input_text'} />
      </div>
      <div className="search__field">
        <input
          type="text"
          placeholder="Заезд"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          className={result ? 'search__input search__input_date search__input_result' : 'search__input search__input_date'}
        />
      </div>
      <div className="search__field">
        <input
          type="text"
          placeholder="Выезд"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          className={result ? 'search__input search__input_date search__input_result' : 'search__input search__input_date'}
        />
      </div>
      <div className="search__field">
        <input type="number" placeholder="Кол-во гостей" className={result ? 'search__input search__input_number search__input_result' : 'search__input search__input_number'} />
      </div>
      <Link to="/search/moscow" className="search__button">
        Найти
      </Link>
    </form>
  );
}

export default Search;
