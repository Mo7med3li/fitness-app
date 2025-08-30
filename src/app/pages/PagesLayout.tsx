import { Link, Outlet } from "react-router-dom";

const PagesLayout = () => {
  return (
    <>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to={""}>Home</Link>
        <Link to={"about"}>About</Link>
        <Link to={"auth/login"}>Auth</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default PagesLayout;
