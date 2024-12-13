import { ThemeToggle } from '@/components/shared/theme-toggle';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10'>
      <h1 className='text-5xl font-bold text-primary'>Next JS + TypeScript + Tailwind + Shad Cn</h1>
      <ThemeToggle />
    </div>
  );
}
