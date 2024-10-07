import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CounterProvider } from './hooks/counter-hook.tsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </CounterProvider>
  </StrictMode>
);
