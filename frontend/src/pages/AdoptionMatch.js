// src/pages/AdoptionMatch.js
import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/AdoptionMatch.css';

const questions = [
  {
    question: '현재 거주 환경은?',
    options: ['아파트', '주택']
  },
  {
    question: '원하는 동물의 크기는?',
    options: ['소형', '중형', '대형']
  },
  {
    question: '원하는 동물의 성격은?',
    options: ['얌전한', '활발한']
  },
  {
    question: '하루에 산책은 얼마나 가능하신가요?',
    options: ['매일 가능', '주 2~3회', '거의 불가능']
  },
  {
    question: '털 빠짐에 대한 민감도는?',
    options: ['털 빠짐 적은 동물', '털 빠짐 많아도 상관 없음']
  },
  {
    question: '아이 또는 반려동물과의 생활은?',
    options: ['아이 있음', '다른 반려동물 있음', '없음']
  }
];

function AdoptionMatch() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSelect = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // 마지막 질문까지 끝나면 결과 페이지로 이동하거나 결과 계산
      console.log('선택한 답변:', newAnswers);
      alert('입양 후보 리스트를 불러옵니다!');
    }
  };

  const current = questions[step];

  return (
    <div className="adoption-match-page">
      <Header />
      <MenuBar />
      <div className="match-container">
        <h2>입양 추천 질문 {step + 1} / {questions.length}</h2>
        <h3>{current.question}</h3>
        <div className="card-options">
          {current.options.map((option, idx) => (
            <div
              key={idx}
              className="option-card"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdoptionMatch;
