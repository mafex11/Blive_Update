"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { Meteors } from '@/components/ui/meteors';
import "../style/page.css";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/metaMaskLogin');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Meteors number={50} className="absolute inset-0 z-0 h-2/3" />

      {/* Foreground content */}
      <Navbar />
      <main className="p-8 max-w-4xl mx-auto z-10 relative">
        <h1 className="font-bold title1">Get Started With</h1>
        <p className="text-left font-bold title2">a New Way to Stream.</p>

        <NeonGradientCard
          borderSize={3}
          borderRadius={25}
          neonColors={{ firstColor: "#ff00aa", secondColor: "#00FFF1" }}
          className="max-w-2/4 w-64 h-auto mt-20 mx-auto"
        >
          <div className='text-md text-center text-black cursor-pointer' onClick={handleLoginRedirect}>
            Login with MetaMask
          </div>
        </NeonGradientCard>

        <NeonGradientCard
          borderSize={3}
          borderRadius={25}
          neonColors={{ firstColor: "#ff00aa", secondColor: "#00FFF1" }}
          className="max-w-2/4 w-56 max-h-2/4 h-auto mt-10 mx-auto"
        >
          <div className='text-md text-center text-black cursor-pointer'>
            How it works?
          </div>
        </NeonGradientCard>
      </main>
    </div>
  );
}
