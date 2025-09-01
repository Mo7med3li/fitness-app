import axios from 'axios';
import type { ForgetPassResponse, ForgetPassValues } from '../../types/auth';

export default async function forgetPasswordApi(values:ForgetPassValues) {
  const { data } = await axios.post<ForgetPassResponse>(
    `${import.meta.env.VITE_API_URL}/auth/forgotPassword`,
      values
    );

  return data
}
