'use client'

import { Button } from '@/components/ui/button'
import { FC } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
interface PageProps {
    params: {
        slug: string
    }
}

const page: FC<PageProps> = ({params: {slug}}) => {
  return <div className='grid grid-cols-6 container'>
      <ScrollArea.Root className='w-full h-[calc(100vh-3.6rem)] overflow-hidden'>
        <ScrollArea.Viewport className='h-full w-full'>
        <aside className='flex flex-col items-start gap-2'>
        <span className='text-muted-foreground text-sm'>Getting started</span>
        <Button variant="link" size="sm" className='bg-primary text-secondary'>Introduction</Button>
        <span className='text-muted-foreground text-sm'>Frameworks</span>
        <Button variant="link" size="sm">JS VITE</Button>
        <Button variant="link" size="sm">React VITE</Button>
        <Button variant="link" size="sm">Next.js 13</Button>
        <Button variant="link" size="sm">Express.js</Button>
        <Button variant="link" size="sm">React Native Expo</Button>
        <span className='text-muted-foreground text-sm'>Packages</span>
        <Button variant="link" size="sm">tRPC</Button>
        <Button variant="link" size="sm">Zustand</Button>
        <Button variant="link" size="sm">Zod</Button>
        <Button variant="link" size="sm">React Hook Form</Button>
        <Button variant="link" size="sm">Framer Motion</Button>
        <Button variant="link" size="sm">GSAP</Button>
        <Button variant="link" size="sm">Tailwind</Button>
        <Button variant="link" size="sm">Shadcn library</Button>
        <Button variant="link" size="sm">React Router</Button>
        <Button variant="link" size="sm">Next Auth</Button>
        <Button variant="link" size="sm">Next Themes</Button>
        <Button variant="link" size="sm">Prisma</Button>
        <Button variant="link" size="sm">Drizzle</Button>
        <Button variant="link" size="sm">Apex Charts</Button>
        <Button variant="link" size="sm">MDX</Button>
        </aside>

        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation='vertical' className='flex w-1'>
          <ScrollArea.Thumb className='w-0.5 h-2 rounded-full bg-primary flex-1 relative'/>
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    <main className='col-span-5 p-6'>
asdasd
    </main>

  </div>

}

export default page