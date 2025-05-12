import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import AnimalFilterBox from '../components/AnimalFilterBox';
import AnimalCardList from '../components/AnimalCardList';
import { useLocation } from 'react-router-dom';
import '../styles/AnimalCardList.css';
import '../styles/AdoptableAnimals.css';
import '../styles/wrap.css';

const dummyAnimals = [
  {
    id: 13,
    image: '/images/adoption1_dog1.jpg',
    breed: '믹스견 ♀',
    details: '암컷 / 검은색&흰색',
    date: '2025-04-15',
    location: '정선가축병원',
  },
  {
    id: 14,
    image: '/images/adoption2_cat1.jpg',
    breed: '한국 고양이 ♂',
    details: '수컷 / 베이지&흰색',
    date: '2025-04-14',
    location: '제주 동물보호센터',
  },
  {
    id: 15,
    image: '/images/adoption3_dog1.jpg',
    breed: '믹스견 ♀',
    details: '암컷 / 흰색',
    date: '2025-04-15',
    location: '데이지동물병원',
  },
  {
    id: 16,
    image: '/images/adoption4_cat1.jpg',
    breed: '한국 고양이 ♂',
    details: '수컷 / 검정색&회색',
    date: '2025-04-16',
    location: '동부동물병원',
  },
  {
    id: 17,
    image: '/images/adoption5_dog1.jpg',
    breed: '푸들 ♂',
    details: '수컷 / 흰색',
    date: '2025-04-15',
    location: '사천시 동물보호센터',
  },
  {
    id: 18,
    image: '/images/adoption6_dog1.jpg',
    breed: '믹스견 ♀',
    details: '암컷 / 흰색',
    date: '2025-04-17',
    location: '제주 동물보호센터',
  },
  {
    id: 19,
    image: '/images/adoption7_cat1.jpg',
    breed: '한국 고양이 ♀',
    details: '암컷 / 갈색',
    date: '2025-04-14',
    location: '익산유기동물보호소',
  }, 
  {
    id: 20,
    image: '/images/adoption8_cat1.jpg',
    breed: '한국 고양이 ♂',
    details: '수컷 / 갈색&검은색 줄무늬',
    date: '2025-04-25',
    location: '광주동물보호센터',
  }, 
  {
    id: 21,
    image: '/images/adoption9_dog1.jpg',
    breed: '골든 리트리버 ♂',
    details: '수컷 / 갈색',
    date: '2025-04-15',
    location: '화성동물보호센터',
  },
  {
    id: 22,
    image: '/images/adoption10_dog1.jpg',
    breed: '믹스견 ♀',
    details: '암컷 / 검은색&흰색',
    date: '2025-04-18',
    location: '화성동물보호센터',
  },
  {
    id: 23,
    image: '/images/adoption11_dog1.jpg',
    breed: '미니어쳐 푸들 ♂',
    details: '수컷 / 갈색',
    date: '2025-04-24',
    location: '구리반려동물문화센터',
  },
  {
    id: 24,
    image: '/images/adoption12_dog1.jpg',
    breed: '골든 리트리버 ♂',
    details: '수컷 / 금색',
    date: '2025-04-02',
    location: '정읍시 동물보호소',
  }
];

function AdoptableAnimals() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const typeParam = params.get('type');
  const breedParam = params.get('breed');

  const [animals, setAnimals] = useState(() => {
    if (typeParam && breedParam) {
      return dummyAnimals.filter(animal => animal.breed.includes(breedParam));
    }
    return dummyAnimals;
  });

  const handleSearch = () => {
    setAnimals(dummyAnimals);
  };

  return (
    <div className="adoptable-animals">
      <Header />
      <MenuBar />
      <div className="wrap">
        <h2 className="page-title">입양 대상 동물</h2>

        <AnimalFilterBox defaultType={typeParam} defaultBreed={breedParam} onSearch={handleSearch} />
        <AnimalCardList animals={animals} />
      </div>
    </div>
  );
}

export default AdoptableAnimals;