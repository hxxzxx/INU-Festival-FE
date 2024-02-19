import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { apiService } from '../services/ApiService';

export default function useAccessToken() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    console.log('Hello');
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  return { accessToken, setAccessToken };
}
