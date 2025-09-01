import { UserContext } from "@/context/UserContext";
import loginApi from "@/lib/apis/auth/login.api";
import type { LoginResponse, LoginValues } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function useLogin() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("Wrap tree with UserContext.Provider");
  const { setUserLogin } = userContext;


  return useMutation<LoginResponse, AxiosError, LoginValues>({
    mutationFn: async (values) => {
      const data = await loginApi(values);
      return data;
    },
    onSuccess: (data) => {
      if (data.message === "success" && data.token) {
        localStorage.setItem("userToken", data.token);
        setUserLogin(data.token);
        toast.success("You have successfully logged in.");
        navigate("/", { replace: true });
      } else {
        toast.error(data.message || "Login failed");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error ?? "Network error");
    },
  });
}
