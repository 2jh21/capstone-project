import { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/MissingRegister.css';

const today = new Date().toISOString().split('T')[0];

function MissingRegister() {
  const [form, setForm] = useState({
    name: '',
    type: '',
    breed: '',
    colors: [],
    gender: '',
    neutered: '',
    features: '',
    lostDate: today,
    lostLocation: '',
    lostSituation: '',
    images: [],
  });

  const colors = ['흰색', '검정', '회색', '갈색', '노랑', '주황', '크림', '고동', '베이지'];

  const breedsByType = {
    강아지: ['푸들', '말티즈', '진돗개', '비숑', '포메라니안'],
    고양이: ['코숏', '러시안블루', '페르시안', '스코티시폴드', '샴'],
  };

  const requiredFields = ['images', 'name', 'type', 'breed', 'colors', 'gender', 'lostDate', 'lostLocation'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setForm((prevForm) => ({
      ...prevForm,
      images: [...prevForm.images, ...previews],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = requiredFields.filter((field) => {
      if (field === 'images') return form.images.length === 0;
      if (field === 'colors') return !form.colors || form.colors.length === 0;
      return !form[field];
    });

    if (missingFields.length > 0) {
      alert('필수 항목을 모두 입력해주세요!');
      return;
    }

    console.log('Form submitted:', form);
    alert('등록이 완료되었습니다!');
  };

  return (
    <div className="register-container">
      <Header />
      <MenuBar />
      <h2>실종 동물 등록</h2>
      <form onSubmit={handleSubmit}>
        <div className="image-preview-area">
          {form.images.map((img, idx) => (
            <div className="image-thumb" key={idx}>
              <img src={img} alt={`uploaded-${idx}`} />
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  const updated = [...form.images];
                  updated.splice(idx, 1);
                  setForm({ ...form, images: updated });
                }}
              >
                ✕
              </button>
            </div>
          ))}

          <label htmlFor="image-upload" className="upload-box">+</label>
          <input
            type="file"
            id="image-upload"
            multiple
            onChange={handleImageUpload}
            accept="image/*"
            hidden
          />
        </div>

        <div className="row">
          <div className="inputs">
            <input name="name" 
            placeholder="이름" 
            value={form.name} 
            onChange={handleChange} />

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

            {Array.isArray(breedsByType[form.type]) && (
              <>
                <label>품종</label>
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
              </>
            )}
          </div>
        </div>

        <div className="color-picker">
          <label>털색</label>
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

        <div className="select-group">
          <label>성별</label>
          <div>
            <button type="button" className={form.gender === '수컷' ? 'selected' : ''} onClick={() => setForm({ ...form, gender: '수컷' })}>수컷</button>
            <button type="button" className={form.gender === '암컷' ? 'selected' : ''} onClick={() => setForm({ ...form, gender: '암컷' })}>암컷</button>
          </div>
        </div>

        <div className="select-group">
          <label>중성화 여부</label>
          <div>
            <button type="button" className={form.gender === '예' ? 'selected' : ''} onClick={() => setForm({ ...form, gender: '예' })}>예</button>
            <button type="button" className={form.gender === '아니오' ? 'selected' : ''} onClick={() => setForm({ ...form, gender: '아니오' })}>아니오</button>
          </div>
        </div>

        <label>실종일</label>
        <input
          name="lostDate"
          type="date"
          placeholder="실종일"
          value={form.lostDate}
          onChange={handleChange}
        />

        <label>실종장소</label>
        <input
          name="lostLocation"
          placeholder="실종장소"
          value={form.lostLocation}
          onChange={handleChange}
        />

        <label>실종장소</label>
        <textarea name="lostSituation" placeholder="실종상황" value={form.lostSituation} onChange={handleChange} />

        <div className="btn-group">
          <button type="button" className="save">저장</button>
          <button type="submit" className="submit">등록</button>
        </div>
      </form>
    </div>
  );
}

export default MissingRegister;
