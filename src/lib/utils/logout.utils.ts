import { useNavigate } from "react-router-dom";

const logout = () => {
  //   Navigation
  const navigate = useNavigate();
  localStorage.removeItem("userToken");
  navigate("/auth/login");
};
export default logout;
