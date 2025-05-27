router.get('/auth/kakao', async (req, res) => {
    const { code } = req.query;
  
    try {
      const tokenResponse = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        qs.stringify({
          grant_type: 'authorization_code',
          client_id: '1bdd2796c0d723fd2ed5163f8aec5c87',
          redirect_uri: 'http://localhost:3000/oauth/callback/kakao',
          code,
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
  
      const accessToken = tokenResponse.data.access_token;
  
      const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      res.json(userResponse.data); // 프론트에 사용자 정보 전송
    } catch (err) {
      console.error(err.response?.data || err.message);
      res.status(500).json({ error: 'Kakao login failed' });
    }
  });  
