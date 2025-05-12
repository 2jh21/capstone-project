import { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/MissingRegister.css';

function AdoptionRegister() {
  const [form, setForm] = useState({
    type: '',
    breed: '',
    colors: [],
    gender: '',
    neutered: '',
    size: '',
    region: '',
    preferences: '',
  });

  const colors = ['흰색', '검정', '회색', '갈색', '노랑', '주황', '크림', '고동', '베이지', '상관없음'];

  const breedsByType = {
    강아지: ['푸들', '말티즈', '진돗개', '비숑', '포메라니안'],
    고양이: ['코숏', '러시안블루', '페르시안', '스코티시폴드', '샴'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('입양 희망 등록이 완료되었습니다!');
    console.log('입양 희망 정보:', form);
  };

  return (
    <div className="register-container">
      <Header />
      <MenuBar />
      <div className="wrap">
        <h2>입양 희망 등록</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>동물 종류</label>
            <select
              name="type"
              value={form.type}
              onChange={(e) => {
                const selectedType = e.target.value;
                setForm({
                  ...form,
                  type: selectedType,
                  breed: '',
                });
              }}
            >
              <option value="">선택하세요</option>
              {Object.keys(breedsByType).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {Array.isArray(breedsByType[form.type]) && (
            <div className="form-group">
              <label>선호 품종</label>
              <select
                name="breed"
                value={form.breed}
                onChange={handleChange}
              >
                <option value="">선택하세요</option>
                {breedsByType[form.type].map((breed) => (
                  <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label>선호 털색</label>
            <div className="color-options">
              {colors.map((c) => {
                const isSelected = form.colors.includes(c);
                return (
                  <button
                    type="button"
                    key={c}
                    className={isSelected ? 'selected' : ''}
                    onClick={() => {
                      const updatedColors = isSelected
                        ? form.colors.filter((color) => color !== c)
                        : [...form.colors, c];
                      setForm({ ...form, colors: updatedColors });
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-group">
            <label>선호 성별</label>
            <div className="select-group">
              <button type="button" className={form.gender === '수컷' ? 'selected' : ''} onClick={() => setForm({ ...form, gender: '수컷' })}>수컷</button>
              <button type="button" className={form.gender === '암컷' ? 'selected' : ''} onClick={() => setForm({ ...form, gender: '암컷' })}>암컷</button>
              <button type="button" className={form.gender === '상관없음' ? 'selected' : ''} onClick={() => setForm({ ...form, gender: '상관없음' })}>상관없음</button>
            </div>
          </div>

          <div className="form-group">
            <label>중성화 여부</label>
            <div className="select-group">
              <button type="button" className={form.neutered === '예' ? 'selected' : ''} onClick={() => setForm({ ...form, neutered: '예' })}>예</button>
              <button type="button" className={form.neutered === '아니오' ? 'selected' : ''} onClick={() => setForm({ ...form, neutered: '아니오' })}>아니오</button>
              <button type="button" className={form.neutered === '상관없음' ? 'selected' : ''} onClick={() => setForm({ ...form, neutered: '상관없음' })}>상관없음</button>
            </div>
          </div>

          <div className="form-group">
            <label>체형 (크기)</label>
            <select name="size" value={form.size} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="소형">소형</option>
              <option value="중형">중형</option>
              <option value="대형">대형</option>
            </select>
          </div>

          <div className="form-group">
            <label>입양 희망 지역</label>
            <select name="region" value={form.region} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="부산">부산</option>
              <option value="대구">대구</option>
              <option value="인천">인천</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="form-group">
            <label>기타 요청사항</label>
            <textarea
              name="preferences"
              placeholder="특별히 원하는 조건이 있다면 입력해주세요"
              value={form.preferences}
              onChange={handleChange}
            />
          </div>

          <div className="btn-group">
            <button type="submit" className="submit">등록</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdoptionRegister;