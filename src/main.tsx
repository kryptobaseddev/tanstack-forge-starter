import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { AuthProvider } from './providers/auth-provider';
import { TRPCProvider } from './providers/trpc-provider';
import './index.css';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TRPCProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </TRPCProvider>
  </StrictMode>
);