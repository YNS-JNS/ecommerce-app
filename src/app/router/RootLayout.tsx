// src/app/router/RootLayout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';

export function RootLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        {/* Outlet est l'endroit où les pages enfants seront rendues */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
