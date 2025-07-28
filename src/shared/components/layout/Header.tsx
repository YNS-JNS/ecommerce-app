// src/shared/components/layout/Header.tsx
import { Button } from '@/shared/components/ui/button';
import { ShoppingCart, User } from 'lucide-react'; // icônes populaires

export function Header() {
  return (
    <header className='bg-white shadow-md'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Section gauche : Logo et navigation */}
          <div className='flex items-center space-x-8'>
            <a href='/' className='text-2xl font-bold text-gray-800'>
              E-Store
            </a>
            <div className='hidden md:flex space-x-4'>
              <a href='/products' className='text-gray-600 hover:text-gray-900 font-medium'>
                Produits
              </a>
              {/* Ajoutez d'autres liens ici (Catégories, etc.) */}
            </div>
          </div>

          {/* Section droite : Actions */}
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon'>
              <User className='h-5 w-5' />
              <span className='sr-only'>Connexion</span>
            </Button>
            <Button variant='ghost' size='icon' className='relative'>
              <ShoppingCart className='h-5 w-5' />
              {/* Badge pour le panier, on le rendra dynamique plus tard */}
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                0
              </span>
              <span className='sr-only'>Panier</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
