// src/app/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// createApi est le cœur de RTK Query.
export const apiSlice = createApi({
  // Le nom du slice, utilisé dans l'état Redux.
  reducerPath: 'api',

  // La configuration de base pour toutes les requêtes.
  // Notre json-server tourne sur le port 3001.
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),

  // Les "tags" sont utilisés pour le caching et l'invalidation automatique.
  // C'est une pièce maîtresse pour que l'UI se mette à jour toute seule.
  tagTypes: ['Product', 'Category', 'User', 'Order'],

  // Les endpoints sont les différentes opérations possibles avec l'API.
  // Nous les injecterons depuis d'autres fichiers pour garder ce fichier propre.
  endpoints: (builder) => ({}),
});
