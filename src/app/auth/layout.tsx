import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <p>this is a shared layout </p>
      <Outlet />
    </>
  );
}
