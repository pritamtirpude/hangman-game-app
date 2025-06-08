import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-6 py-8 md:px-12 md:py-[60px] lg:px-0 lg:py-14 lg:max-2xl:px-12">
      <Outlet />
    </div>
  );
};

export default LayoutPage;
