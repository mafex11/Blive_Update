"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Spline from '@splinetool/react-spline/next';
import About from '@/components/About';
import "../style/page.css"

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/metaMaskLogin');
  };

  return (
    <div className="min-h-screen relative">
      <Spline
        scene="https://prod.spline.design/iWU8kp9KqO0mXuQZ/scene.splinecode"
        className="spline absolute inset-0 z-0 object-cover"
      />

      <Navbar />
      <main className="p-8 max-w-4xl mx-auto z-10 relative"> {/* Ensure main content is above Spline */}
        <h1 className="font-bold title1">Get Started With</h1>
        <p className="text-left font-bold title2">a New Way to Stream.</p>
        <button
          onClick={handleLoginRedirect}
          className='px-4 py-2 metabutton1'
        >
          Login with MetaMask
        </button>
        <button className='px-4 py-2 WorkButton1'>
          How it works?
        </button>
      </main>
      {/* <About/> */}
    </div>
  );
}
