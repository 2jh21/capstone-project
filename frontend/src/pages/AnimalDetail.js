import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import dummyAnimals from '../data/dummyAnimals';
import AnimalDetailInfo from '../components/AnimalDetailInfo';
import '../styles/AnimalDetail.css';

function AnimalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = dummyAnimals.find((item) => item.id === parseInt(id));

  if (!animal) return <p>동물 정보를 찾을 수 없습니다.</p>;

  return (
    <div className="animal-detail-container">
      <Header />
      <MenuBar />
      <div className="detail-content">
        <div className="image-section">
          {animal.images.map((src, i) => (
            <img key={i} src={src} alt={`animal-${i}`} />
          ))}
        </div>
        <AnimalDetailInfo data={animal} />
        <div className="back-button-container">
          <button className="back-button" onClick={() => navigate(-1)}>목록으로 돌아가기</button>
        </div>
      </div>
    </div>
  );
}

export default AnimalDetail;
