// src/shared/components/skeletons/ProductCardSkeleton.tsx

import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton';

export function ProductCardSkeleton() {
  return (
    <Card className='flex flex-col'>
      <CardHeader>
        <Skeleton className='w-full h-48 rounded-t-lg' />
      </CardHeader>
      <CardContent className='flex-grow'>
        <Skeleton className='h-6 w-3/4 mb-2' />
        <Skeleton className='h-4 w-1/2 mb-4' />
        <Skeleton className='h-8 w-1/3' />
      </CardContent>
      <CardFooter>
        <Skeleton className='h-10 w-full' />
      </CardFooter>
    </Card>
  );
}
