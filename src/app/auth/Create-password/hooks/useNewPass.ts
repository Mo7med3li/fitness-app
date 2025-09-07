import { UserContext } from "@/context/UserContext";
import newPasswordApi from "@/lib/apis/auth/new-password.api";
import type {  newPassResponse, newPassValues } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function useNewPass() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("Wrap tree with UserContext.Provider");
  const { setUserLogin } = userContext;


  return useMutation<newPassResponse, AxiosError, newPassValues>({
    mutationFn: async (values) => {
      const data = await newPasswordApi(values);
      return data;
    },
    onSuccess: (data) => {
      if (data.message === "success" && data.token) {
        localStorage.setItem("userToken", data.token);
        setUserLogin(data.token);
        toast.success("You have successfully create new password .");
        navigate("/", { replace: true });
      } else {
        toast.error(data.message || "create new password failed");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error ?? "Network error");
    },
  });
}
