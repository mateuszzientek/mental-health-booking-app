import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './state/theme/themeSlice'; // Zaimportowanie akcji setTheme z reduktora
import { RootState } from './state/store';


export default function App() {

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme); // Pobranie aktualnego tematu ze stanu

  // Efekt uboczny dla reagowania na zmiany preferencji kolorów systemu operacyjnego
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      dispatch(setTheme(newTheme)); // Wywołanie akcji setTheme w odpowiedzi na zmianę preferencji kolorów
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  return (
    <div >
      <RouterProvider router={router} />
    </div>

  );
}