import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      fetch(`http://localhost:4000/auth/kakao/callback?code=${code}`)
        .then((res) => res.json())
        .then((data) => {
          // 로그인 성공 시 유저 정보 저장
          localStorage.setItem('user', JSON.stringify(data));
          navigate('/'); // 홈으로 리디렉션
        })
        .catch((error) => {
          console.error('로그인 실패:', error);
          navigate('/login');
        });
    }
  }, [navigate]);

  return <div>로그인 중입니다...</div>;
};

export default KakaoCallback;
