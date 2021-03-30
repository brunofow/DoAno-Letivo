import { useEffect } from 'react';
import Routes from './routes';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return null;
}

function App() {
  return (
    <Routes>
      <ScrollToTop />
    </Routes>
  );
}

export default App;
