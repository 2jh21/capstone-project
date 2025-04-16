// src/pages/LoginPage.js
import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <MenuBar />
      <div className="login-content">
        <h2>로그인</h2>
        <form className="login-form">
          <label>
            휴대폰 번호
            <input type="tel" placeholder="010-0000-0000" />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="비밀번호" />
          </label>
          <button type="submit" className="login-btn">로그인</button>
        </form>

        <div className="divider">또는</div>

        <button className="kakao-btn">카카오톡으로 로그인</button>

        <div className="signup-link">
          아직 계정이 없으신가요? <a href="/signup">회원가입</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
