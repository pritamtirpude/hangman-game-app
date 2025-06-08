import { Navigate, Route, Routes } from 'react-router-dom';
import {
  CategoriesPage,
  GamePage,
  HomePage,
  HowToPlayPage,
  LayoutPage,
} from './pages';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-[url('/images/background-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/background-tablet.svg')] lg:bg-[url('/images/background-desktop.svg')]">
      <Routes>
        <Route path="/" element={<Navigate to="/hangmangame" replace />} />
        <Route path="hangmangame">
          <Route index element={<HomePage />} />
          <Route element={<LayoutPage />}>
            <Route path="gameinstructions" element={<HowToPlayPage />} />
            <Route path="categories">
              <Route index element={<CategoriesPage />} />
              <Route path="game/:category" element={<GamePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </main>
  );
}
