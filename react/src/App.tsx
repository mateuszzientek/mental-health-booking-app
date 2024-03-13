import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './index.css';

export default function App() {

  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div >
      <RouterProvider router={router} />
    </div>

  );
}