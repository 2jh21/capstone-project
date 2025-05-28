import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function KakaoCallback() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    // 백엔드 서버에 인가 코드 전달
    axios
      .get(`http://localhost:4000/auth/kakao/callback?code=${code}`)
      .then((res) => {
        const user = res.data;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      })
      .catch((err) => {
        console.error('카카오 로그인 실패:', err);
        alert('로그인에 실패했습니다.');
      });
  }, [navigate, setUser]);

  return <div>로그인 중입니다...</div>;
}

export default KakaoCallback;
