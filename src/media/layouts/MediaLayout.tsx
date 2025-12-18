import { Outlet } from "react-router";

export const MediaLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Outlet />
    </div>
  );
};
