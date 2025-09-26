import { JSON_HEADER } from "@/lib/constants/api.const";
import type { ChangePasswordFields } from "@/lib/schemas/profile-change-password/change-password.schema";
import type { ChangePasswordResponse } from "@/lib/types/profile/change-password";
import axios from "axios";

const changePassword = async (values: ChangePasswordFields, userLogin: string) => {
  const res = await axios.patch(
    `https://fitness.elevateegy.com/api/v1/auth/change-password`,
    values,
    {
      headers: {
        ...JSON_HEADER,
        Authorization: `Bearer ${userLogin}`,
      },
    },
  );
  const payload = res.data;
  if ("error" in payload) {
    throw new Error(payload.error);
  }
  return payload as ChangePasswordResponse;
};
export default changePassword;
