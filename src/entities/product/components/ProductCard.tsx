// src/entities/product/components/ProductCard.tsx

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card';
import type { Product } from '../model/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className='flex flex-col'>
      <CardHeader>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='w-full h-48 object-contain rounded-t-lg'
        />
      </CardHeader>
      <CardContent className='flex-grow'>
        <CardTitle className='text-lg'>{product.name}</CardTitle>
        <p className='text-sm text-gray-500'>{product.category}</p>
        <p className='text-xl font-bold mt-2'>{product.price.toFixed(2)} €</p>
        <p className='text-xs text-gray-400'>Stock: {product.stock}</p>
      </CardContent>
      <CardFooter>
        {/* Ce bouton est pour l'instant purement visuel */}
        <Button className='w-full cursor-pointer'>Ajouter au panier</Button>
      </CardFooter>
    </Card>
  );
}
