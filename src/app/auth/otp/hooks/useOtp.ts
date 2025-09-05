import otoApi from "@/lib/apis/auth/Otp.api";
import type {  verifyCodeResponse, verifyCodeValues } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function useOtp() {
  const navigate = useNavigate();

  return useMutation<verifyCodeResponse, AxiosError, verifyCodeValues>({
    mutationFn: async (values) => {
      const data = await otoApi(values);
      return data;
    },
    onSuccess: (data) => {
      if (data.status === "Success") {
        toast.success("You have successfully logged in.");
        navigate("/auth/create-password", { replace: true });
      } else {
        toast.error(data.status || "OTP failed");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error ?? "Network error"); // Handle network/server errors
    },
  });
}
