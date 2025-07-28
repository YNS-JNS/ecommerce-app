// src/shared/components/layout/Footer.tsx

export function Footer() {
  return (
    <footer className='bg-gray-100 border-t mt-12'>
      <div className='container mx-auto py-6 px-4 text-center text-gray-600'>
        <p>© {new Date().getFullYear()} E-Store. Tous droits réservés.</p>
        <p className='text-sm'>Un projet d'apprentissage avec React & RTK Query.</p>
      </div>
    </footer>
  );
}
