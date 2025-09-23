import { useNavigate } from "react-router-dom";

//   Navigation
const navigate = useNavigate();

const logout = () => {
  localStorage.removeItem("userToken");
  navigate("/auth/login");
};
export default logout;
