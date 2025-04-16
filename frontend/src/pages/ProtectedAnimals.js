import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import AnimalFilterBox from '../components/AnimalFilterBox';
import AnimalCardList from '../components/AnimalCardList';
import '../styles/AnimalCardList.css';
import '../styles/ProtectedAnimals.css';

const dummyAnimals = [
  {
    id: 1,
    image: '/images/dog5.jpg',
    breed: '뱅갈 ♂',
    details: '암컷 / 나이 모름 / 체중 모름 / 갈색+2색무늬',
    date: '2025-03-28',
    location: '중구 시청인근',
  },
  {
    id: 2,
    image: '/images/dog6.jpg',
    breed: '말티즈 ♀',
    details: '암컷 / 나이 모름 / 체중 모름 / 흰색',
    date: '2025-04-05',
    location: '동구 금강역부근',
  },
];

function ProtectedAnimals() {
  const [animals, setAnimals] = useState(dummyAnimals);

  const handleSearch = () => {
    setAnimals(dummyAnimals);
  };

  return (
    <div className="protected-animals">
      <Header />
      <MenuBar />
      <h2 className="page-title">보호 중인 동물</h2>

      <AnimalFilterBox onSearch={handleSearch} />
      <AnimalCardList animals={animals} />
    </div>
  );
}

export default ProtectedAnimals;
