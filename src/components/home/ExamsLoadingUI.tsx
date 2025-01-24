import React from 'react'
import { Skeleton } from '../ui';

const ExamsLoadingUI = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-8">Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        <div className="space-y-4">
          <Skeleton className="h-48 w-48 mx-auto bg-zinc-800" />
          <Skeleton className="h-6 w-24 mx-auto bg-zinc-800" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-48 w-48 mx-auto bg-zinc-800" />
          <Skeleton className="h-6 w-24 mx-auto bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}

export default ExamsLoadingUI