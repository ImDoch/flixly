import { Outlet } from 'react-router';
import { CustomHeader } from '../components/CustomHeader';

export const MediaLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-slate-900 to-black">
      <CustomHeader />
      <Outlet />
    </div>
  );
};
