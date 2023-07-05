import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/blogs">Blogs</Link>
      <hr />
      <Outlet />
    </div>
  );
}

export default RootLayout;
