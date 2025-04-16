// src/components/AnimalDetailInfo.js
import React from 'react';
import '../styles/AnimalDetail.css';

function AnimalDetailInfo({ data }) {
  return (
    <div className="animal-info-section">
      <section>
        <h3>🐾 동물의 정보</h3>
        <p><strong>품종:</strong> {data.breed}</p>
        <p><strong>상세:</strong> {data.details}</p>
        <p><strong>특징:</strong> {data.features}</p>
      </section>

      <section>
        <h3>📅 구조 정보</h3>
        <p><strong>구조일:</strong> {data.date}</p>
        <p><strong>구조장소:</strong> {data.location}</p>
      </section>

      <section>
        <h3>🐕 보호센터</h3>
        <p><strong>보호센터:</strong> {data.shelter}</p>
      </section>
    </div>
  );
}

export default AnimalDetailInfo;
