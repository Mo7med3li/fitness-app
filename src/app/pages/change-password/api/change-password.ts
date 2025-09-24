import { UserContext } from "@/context/UserContext";
import { JSON_HEADER } from "@/lib/constants/api.const";
import type { ChangePasswordFields } from "@/lib/schemas/profile-change-password/change-password.schema";
import axios from "axios";
import { useContext } from "react";

const changePassword = async (values: ChangePasswordFields) => {
  const userContext = useContext(UserContext);
  if (!userContext) return null;
  const { userLogin } = userContext;
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
  return res.data;
};
export default changePassword;
