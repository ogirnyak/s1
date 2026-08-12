import React from 'react';
import './SearchInput.css';

function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="search-input">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="15" y2="15" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
