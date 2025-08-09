mon-ecommerce-app/
├── package.json // Dépendances et scripts du projet.
├── tsconfig.json // Configuration de TypeScript.
└── ... // Autres fichiers de configuration (vite, tailwind, postcss...).

└── src/
// ====================================================================================
// 1. COUCHE 'APP' - Le Cœur et la Configuration Globale
// ====================================================================================
├── app/
│ ├── api/
│ │ └── apiSlice.ts // LE CERVEAU DE RTK QUERY. Définit `createApi`, la `baseQuery`
│ │ // et les `tagTypes` globaux ('Product', 'User'...).
│ │
│ ├── hooks/
│ │ └── redux.ts // IMPORTANT : Définit les hooks `useAppDispatch` et `useAppSelector`
│ │ // typés pour une utilisation sécurisée dans toute l'application.
│ │
│ ├── router/
│ │ └── RootLayout.tsx // Le layout principal avec Header, Footer et le <Toaster />.
│ │ // Contient le <Outlet> où les pages sont affichées.
│ │
│ └── store.ts // Configure le store Redux. Assemble tous les reducers (de l'API,
│ // de la session, du panier) et connecte le middleware de RTK Query.
│
// ====================================================================================
// 2. COUCHE 'PAGES' - Les Écrans
// Assemble les 'features' et 'entities' pour construire un écran complet.
// ====================================================================================
├── pages/
│ ├── HomePage.tsx
│ ├── ProductsPage.tsx
│ ├── ProductDetailPage.tsx
│ └── LoginPage.tsx
│
// ====================================================================================
// 3. COUCHE 'FEATURES' - Logique Métier Interactive
// ====================================================================================
├── features/
│ ├── auth/
│ │ ├── login/
│ │ │ ├── api/
│ │ │ │ └── authApiSlice.ts // GESTION DU CACHE SERVEUR : INJECTE la mutation 'login'.
│ │ │ │ // Gère la communication avec le serveur pour se connecter.
│ │ │ └── components/
│ │ │ └── LoginForm.tsx // Le formulaire de connexion avec sa validation (Zod).
│ │ │
│ │ └── session/
│ │ └── slice/
│ │ └── sessionSlice.ts // GESTION DE L'ÉTAT CLIENT : SLICE CLASSIQUE (`createSlice`)
│ │ // pour stocker localement le token et les infos de l'utilisateur.
│ │
│ └── cart/
│ ├── add-to-cart/
│ │ └── components/
│ │ └── AddToCartButton.tsx // Le bouton qui dispatche l'action d'ajout.
│ │
│ └── slice/
│ └── cartSlice.ts // GESTION DE L'ÉTAT CLIENT : SLICE CLASSIQUE pour gérer
│ // l'état local du panier (ajouter, supprimer...).
│
// ====================================================================================
// 4. COUCHE 'ENTITIES' - Les Objets Métier de Base
// ====================================================================================
├── entities/
│ ├── product/
│ │ ├── api/
│ │ │ └── productApiSlice.ts // GESTION DU CACHE SERVEUR : INJECTE les queries
│ │ │ // `getProducts` et `getProductById`. Fournit les tags.
│ │ ├── components/
│ │ │ └── ProductCard.tsx // Affiche une carte produit. Réutilisable.
│ │ └── model/
│ │ └── types.ts // Définit le type TypeScript `Product`.
│ │
│ └── user/
│ └── model/
│ └── types.ts // Définit le type `User`.
│
// ====================================================================================
// 5. COUCHE 'SHARED' - La Boîte à Outils Générique
// ====================================================================================
└── shared/
├── components/
│ ├── ui/ // Composants bruts de Shadcn UI (button, card, input, sonner...).
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── form.tsx // Composants pour react-hook-form.
│ │ └── sonner.tsx // Le système de notifications (remplace toaster).
│ │
│ ├── layout/
│ │ ├── Header.tsx, Footer.tsx
│ │
│ └── skeletons/
│ └── ProductCardSkeleton.tsx
│
└── lib/
└── utils.ts // Fonctions utilitaires (ex: `cn` pour Tailwind).

    // ====================================================================================
    // POINTS D'ENTRÉE DE L'APPLICATION
    // ====================================================================================
    ├── App.tsx                        // Définit le routeur (createBrowserRouter) et ses routes.
    └── main.tsx                       // Point d'entrée. Rend l'App et l'enveloppe avec le <Provider> Redux.
