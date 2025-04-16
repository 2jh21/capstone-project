import React from 'react';
import '../styles/AnimalFilterBox.css';

function AnimalFilterBox({ onSearch }) {
  return (
    <div className="animal-filter-box">
      <div className="filter-box">
        <div className="filter-row">
          <label>날짜</label>
          <input type="date" />
          <span>~</span>
          <input type="date" />
        </div>
        <div className="filter-row">
          <label>시도</label>
          <select>
            <option>전체</option>
          </select>
          <label>시군구</label>
          <select>
            <option>전체</option>
          </select>
        </div>
        <div className="filter-row">
          <label>보호센터</label>
          <select>
            <option>전체</option>
          </select>
        </div>
        <div className="filter-row">
          <label>축종 및 품종</label>
          <select>
            <option>전체</option>
          </select>
          <select>
            <option>전체</option>
          </select>
          <label>성별</label>
          <select>
            <option>전체</option>
          </select>
        </div>
        <div className="search-btn-wrapper">
          <button className="search-btn" onClick={onSearch}>조회</button>
        </div>
      </div>
    </div>
  );
}

export default AnimalFilterBox;
