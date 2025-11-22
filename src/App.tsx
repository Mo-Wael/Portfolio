import Navbar from './components/custom/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routers } from './routes';
import { AnimatePresence } from 'motion/react';

const App = () => {
  const location = useLocation();
  return (
    <main>
      <div>
      {
        location.pathname !== "/" && <Navbar />
      }
        <AnimatePresence mode='wait'>
          <Routes>
            {routers.map((route) => {
              const Component = route.component;
              return (
                <Route
                key={route.path}
                path={route.path}
                element={<Component />}
                index={route.index} // lowercase 'index'
                />
              );
            })}
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  )
}

export default App