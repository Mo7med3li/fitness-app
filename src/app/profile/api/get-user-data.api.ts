import { JSON_HEADER } from "@/lib/constants/api.const";
import axios from "axios";

export const getUserData = async (userLogin: string) => {
  const res = await axios.get(`https://fitness.elevateegy.com/api/v1/auth/profile-data`, {
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${userLogin}`,
    },
  });
  return res.data;
};
