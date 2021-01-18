import React from 'react';
import "./form.css";

const FormComponent = ({ search, setQuery, setSearch}) => {

    const updateSearch = e => {
        setSearch(e.target.value);
      };
    
      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
      }
    return (
        <form className="form-containt" onSubmit={getSearch}>
          <h2>Recept kereső</h2>
          <label className="select-form">Írj be egy alapanyagot a kereséshez
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          </label>
            <button className="btn btn-primary" type="submit">Kiválaszt</button>
        </form>
    )
}

export default FormComponent;
