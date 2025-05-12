import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import AnimalFilterBox from '../components/AnimalFilterBox';
import AnimalCardList from '../components/AnimalCardList';
import '../styles/AnimalCardList.css';
import '../styles/ProtectedAnimals.css';
import '../styles/wrap.css';

const dummyAnimals = [
  {
    id: 1,
    image: '/images/protection1_cat1.jpg',
    breed: '한국고양이 ♂',
    details: '수컷 / 레몬색&흰색',
    date: '2025-04-27',
    location: '전라감영 화장실 쪽',
  },
  {
    id: 2,
    image: '/images/protection2_dog1.jpg',
    breed: '믹스견 ♂',
    details: '수컷 / 갈색',
    date: '2025-04-26',
    location: '나주시다시면 가운리 195',
  },
  {
    id: 3,
    image: '/images/protection3_cat1.jpg',
    breed: '샴 ♀',
    details: '암컷 / 크림색&암갈색',
    date: '2025-04-26',
    location: '하동 여흥로',
  },
  {
    id: 4,
    image: '/images/protection4_cat1.jpg',
    breed: '한국 고양이 ♀',
    details: '암컷 / 검은색&흰색&황토색',
    date: '2025-04-26',
    location: '나주시 동수농공단지길 78',
  },
  {
    id: 5,
    image: '/images/protection5_dog1.jpg',
    breed: '믹스견 ♀',
    details: '암컷 / 흰색&황갈색',
    date: '2025-04-26',
    location: '효성요양병원',
  },
  {
    id: 6,
    image: '/images/protection6_dog1.jpg',
    breed: '골든 리트리버 ♂',
    details: '수컷 / 크림색',
    date: '2025-04-25',
    location: '대교로 58 대천고등학교 로터리 인근',
  },
  {
    id: 7,
    image: '/images/protection7_dog1.jpg',
    breed: '진도견 ♀',
    details: '암컷 / 흰색',
    date: '2025-04-24',
    location: '성북로 60 서울농산물 앞',
  },
  {
    id: 8,
    image: '/images/protection8_cat1.jpg',
    breed: '한국 고양이 ♀',
    details: '암컷 / 검은색&흰색&황토색',
    date: '2025-04-24',
    location: '대명 시장 부근',
  },
  {
    id: 9,
    image: '/images/protection9_cat1.jpg',
    breed: '한국 고양이 ♀',
    details: '암컷 / 검은색&흰색',
    date: '2025-04-24',
    location: '광주시 회덕동 일대',
  },
  {
    id: 10,
    image: '/images/protection10_dog1.jpg',
    breed: '골든 리트리버 ♂',
    details: '수컷 / 크림색',
    date: '2025-04-24',
    location: '거제반려동물놀이터 참입',
  },
  {
    id: 11,
    image: '/images/protection11_dog1.png',
    breed: '믹스견 ♂',
    details: '수컷 / 갈색&검정&흰색',
    date: '2025-04-21',
    location: '경기도 양평군 양평읍 마유산로 315',
  },
  {
    id: 12,
    image: '/images/protection12_cat1.jpg',
    breed: '노르웨이 숲 ♂',
    details: '수컷 / 흰색&쿨무늬',
    date: '2025-04-16',
    location: '청라동 96-3',
  }
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
      <div className="wrap">
        <h2 className="page-title">보호 중인 동물</h2>

        <AnimalFilterBox onSearch={handleSearch} />
        <AnimalCardList animals={animals} />
      </div>
    </div>
  );
}

export default ProtectedAnimals;
