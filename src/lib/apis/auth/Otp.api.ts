import type { verifyCodeResponse, verifyCodeValues } from '@/lib/types/auth';
import axios from 'axios';

export default async function otoApi(values:verifyCodeValues) {
  const { data } = await axios.post<verifyCodeResponse>(
    `${import.meta.env.VITE_API_URL}/auth/verifyResetCode`,
      values
    );

  return data
}
