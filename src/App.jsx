import './App.css';
import AppRoutes from './AppRoutes';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './app/store.js';
import { Provider } from 'react-redux';
function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <Toaster position='top-center' richColors />
      </QueryClientProvider>
      </Provider>

    </>
  );
}

export default App;
