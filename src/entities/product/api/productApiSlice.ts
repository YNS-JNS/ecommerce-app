// src/entities/product/api/productApiSlice.ts
import { apiSlice } from '@/app/api/apiSlice';
import type { Product } from '../model/types';

// On injecte des endpoints dans notre apiSlice de base.
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Définition de la query "getProducts"
    getProducts: builder.query<Product[], void>({
      // <TypeDeLaRéponse, TypeDeLArgument>
      query: () => '/products', // L'URL de l'endpoint
      // 'providesTags' est crucial. Il dit à RTK Query:
      // "Les données de cette requête sont taguées comme 'Product'".
      // Si un autre appel invalide ce tag, cette requête sera re-exécutée.
      providesTags: (result = [], error, arg) => [
        'Product',
        ...result.map(({ id }) => ({ type: 'Product' as const, id })),
      ],
    }),
  }),
});

// RTK Query génère automatiquement des hooks à partir des endpoints définis.
export const { useGetProductsQuery } = productApiSlice;
