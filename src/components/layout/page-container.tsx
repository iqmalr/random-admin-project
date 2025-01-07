import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = true
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-[calc(100dvh-52px)] bg-amber-400'>
          <div className='h-full p-4 md:px-6 bg-slate-950'>{children}</div>
        </ScrollArea>
      ) : (
        <div className='h-full p-4 md:px-6 bg-pink-400'>{children}</div>
      )}
    </>
  );
}