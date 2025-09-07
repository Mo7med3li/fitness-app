import type { newPassResponse, newPassValues } from '@/lib/types/auth';
import axios from 'axios';

export default async function newPasswordApi(values:newPassValues) {
  const { data } = await axios.put<newPassResponse>(
    `${import.meta.env.VITE_API_URL}/auth/resetPassword`,
      values
    );

  return data
}
