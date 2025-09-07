import forgetPasswordApi from "@/lib/apis/auth/forget-password.api";
import type { ForgetPassResponse, ForgetPassValues } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function useForgetPassword() {
  const navigate = useNavigate();

  return useMutation<ForgetPassResponse, AxiosError, ForgetPassValues>({
    mutationFn: async (values) => {
      const data = await forgetPasswordApi(values);
      return data;
    },
    onSuccess: (data) => {
      if (data.message === "success") {
        toast.success("OTP has been sent to your email	");
        navigate("/auth/OTP" ,);
      } else {
        toast.error(data.message || "Send email failed");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error ?? "Network error");
    },
  });
}
