import type { LoginResponse, LoginValues } from '@/lib/types/auth';
import axios from 'axios';

export default async function loginApi(values:LoginValues) {
  const { data } = await axios.post<LoginResponse>(
    `${import.meta.env.VITE_API_URL}/auth/signin`,
      values
    );

  return data
}
