import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/Api.js';

function Search({ result }) {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState(undefined);
  const [typing, setTyping] = useState(false);

  function handleSearchInput(e) {
    setSearch(e.target.value);
    setTyping(true);
  }

  function handleSuggestionClick(e) {
    setSearch(e.target.innerText);
    setSuggestions(undefined);
    setTyping(false);
  }

  useEffect(() => {
    if (typing && search.length > 0) {
      api.getSuggestions(search)
        .then((res) => setSuggestions(res.results));
    } else {
      setSuggestions(undefined);
    }
  }, [search]);

  return (
    <form className={result ? 'search search_result' : 'search'}>
      <div className="search__field">
        <input
          type="text"
          placeholder="Куда вы хотите поехать?"
          className={result ? 'search__input search__input_text search__input_result' : 'search__input search__input_text'}
          onChange={handleSearchInput}
          value={search}
        />
        <div className={`${suggestions !== undefined ? 'search__suggestions-container' : ''} ${result ? 'search__suggestions-container_result' : ''}`}>
          {
            suggestions ? suggestions.map((suggestion, index) => (
              <button type="button" key={suggestion.title.text + index} className={`${result ? 'search__suggestion search__suggestion_result' : 'search__suggestion'}`} onClick={handleSuggestionClick}>
                {suggestion.title.text}
              </button>
            )) : ''
          }
        </div>
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
        <input
          type="number"
          placeholder="Кол-во гостей"
          className={result ? 'search__input search__input_number search__input_result' : 'search__input search__input_number'}
        />
      </div>
      <Link to="/search/moscow" className="search__button">
        Найти
      </Link>
    </form>
  );
}

export default Search;
