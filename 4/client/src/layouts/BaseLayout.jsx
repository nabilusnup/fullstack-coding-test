import { Outlet } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";

const BaseLayout = () => {
  return (
    <>
      <NavbarHeader />
      <Outlet />
    </>
  );
};
export default BaseLayout;