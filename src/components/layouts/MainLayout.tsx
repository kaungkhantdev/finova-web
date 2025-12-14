import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Loading from '../common/Loading';

function MainLayout() {
  return (
    <div className="lg:flex w-full min-h-screen mx-auto flex-wrap p-4 md:p-0">
      <Header />
      <main className="flex-1 mt-14 lg:mt-0">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default MainLayout;