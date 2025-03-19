import { Outlet } from "react-router";

export const ClientLayout = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-600">Generic Template</h1>
      <Outlet />
    </>
  );
};
