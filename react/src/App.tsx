import { useEffect, } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './state/theme/themeSlice';
import { RootState } from './state/store';

export default function App() {

  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      dispatch(setTheme(newTheme));
      document.body.className = newTheme;
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


// const App: React.FC = () => {

//   const theme = useSelector((state: RootState) => state.theme.theme);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     document.body.className = theme;
//   }, [])

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = () => {
//       const newTheme = mediaQuery.matches ? 'dark' : 'light';
//       dispatch(setTheme(newTheme));
//       document.body.className = newTheme;
//     };
//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   return (
//     <Routes>
//       <Route
//         path="/contact"
//         element={
//           <Suspense fallback={<LoadingAnimationPage />}>
//             <Contact />
//           </Suspense>
//         }
//       />
//       <Route
//         path="/"
//         element={
//           <Suspense fallback={<LoadingAnimationPage />}>
//             <Home />
//           </Suspense>
//         }
//       />
//     </Routes>
//   );
// };

// export default App;

