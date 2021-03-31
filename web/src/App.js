import { useEffect } from 'react';
import { FormProvider } from './contexts/FormContext';
import Routes from './routes';

function App() {
  return (
    <FormProvider>
      <Routes />
    </FormProvider>
  );
}

export default App;
