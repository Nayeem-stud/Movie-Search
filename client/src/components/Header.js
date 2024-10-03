import React from 'react';

function Header({ onSearch, searchTerm, setSearchTerm }) {
  return (
    <header>
      <h3 className="logo">Movie Search App</h3>
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search"
        />
      </form>
    </header>
  );
}

export default Header;
