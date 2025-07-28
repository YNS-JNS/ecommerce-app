// src/pages/ProductsPage.tsx
// src/pages/ProductsPage.tsx
import { ProductCard } from '@/entities/product/components/ProductCard';
import { ProductCardSkeleton } from '@/shared/components/skeletons/ProductCardSkeleton';
// IMPORTER LE HOOK
import { useGetProductsQuery } from '@/entities/product/api/productApiSlice';

export function ProductsPage() {
  // UTILISER LE HOOK
  // Plus besoin de useState ou useEffect !
  const {
    data: products, // les données retournées par l'API
    isLoading, // boolean : la requête est-elle en cours ?
    isSuccess, // boolean : la requête a-t-elle réussi ?
    isError, // boolean : la requête a-t-elle échoué ?
    error, // l'objet d'erreur si isError est true
  } = useGetProductsQuery(); // Pas besoin d'arguments pour l'instant

  let content;

  if (isLoading) {
    // Si ça charge, afficher les squelettes
    content = (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  } else if (isSuccess && products) {
    // Si la requête réussit et qu'on a des produits
    content = (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (isError) {
    // S'il y a une erreur
    content = <div className='text-red-500'>Erreur: Impossible de charger les produits.</div>;
    console.error(error);
  }

  return (
    <div className='container mx-auto p-4'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold'>Nos Produits</h1>
        <p className='text-lg text-gray-600'>Découvrez notre collection exclusive</p>
      </header>

      {content}
    </div>
  );
}

// ########################################################################
// import { ProductCard } from '@/entities/product/components/ProductCard';
// import type { Product } from '@/entities/product/model/types';
// import { ProductCardSkeleton } from '@/shared/components/skeletons/ProductCardSkeleton';
// import { useEffect, useState } from 'react';

// // Créez des données factices (mock data) directement dans le fichier.
// const MOCK_PRODUCTS: Product[] = [
//   {
//     id: 1,
//     name: 'Casque Audio Pro',
//     price: 249.99,
//     imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//     stock: 15,
//     category: 'Électronique',
//   },
//   {
//     id: 2,
//     name: 'T-shirt Coton Bio',
//     price: 29.99,
//     imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
//     stock: 120,
//     category: 'Vêtements',
//   },
//   {
//     id: 3,
//     name: 'Tasse à Café Originale',
//     price: 14.5,
//     imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
//     stock: 50,
//     category: 'Maison',
//   },
//   {
//     id: 4,
//     name: 'Livre de Science-Fiction',
//     price: 22.0,
//     imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
//     stock: 30,
//     category: 'Livres',
//   },
// ];

// export function ProductsPage() {
//   // Simuler un état de chargement
//   const [isLoading, setIsLoading] = useState(true);

//   // Simuler un appel API qui prend 2 secondes
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer); // Nettoyer le timer
//   }, []);

//   return (
//     <div className='container mx-auto p-4'>
//       <header className='mb-8'>
//         <h1 className='text-4xl font-bold'>Nos Produits</h1>
//         <p className='text-lg text-gray-600'>Découvrez notre collection exclusive</p>
//       </header>

//       {/* La liste des produits */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//         {isLoading
//           ? // Si ça charge, afficher 8 squelettes
//             Array.from({ length: 8 }).map((_, index) => <ProductCardSkeleton key={index} />)
//           : // Sinon, afficher les vrais produits
//             MOCK_PRODUCTS.map((product) => <ProductCard key={product.id} product={product} />)}
//       </div>
//     </div>
//   );
// }
