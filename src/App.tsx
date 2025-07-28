// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './app/router/RootLayout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import './index.css';

// Définir les routes de l'application
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Le layout est appliqué à toutes les routes enfants
    // errorElement: <ErrorPage />, // Vous pourrez ajouter une page d'erreur ici
    children: [
      {
        index: true, // La route par défaut pour "/"
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      // Ajoutez ici les autres pages (panier, connexion, etc.)
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
