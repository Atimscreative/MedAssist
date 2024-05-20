import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>,
);
