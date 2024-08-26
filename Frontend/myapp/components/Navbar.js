"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "../style/nav.css"


export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleLoginRedirect = () => {
    router.push('/metaMaskLogin');
  };
  const handleStartStreamRedirect = () => {
    router.push('/startStream');
  };
  const handleWatchStreamRedirect = () => {
    router.push('/watch'); // Redirect to the Watch Stream page
  };
  const handleHomePage = () =>{
    router.push('/');
  }
  return (
    <nav className="shadow-lg ">
      <div className="container px-4 py-2 flex justify-between items-center h-10 ">
        <div onClick={handleHomePage} className="font-bold title" >&lt;Blive/&gt;</div>
        <div className="flex space-x-4">
          {/* {isClient && (
            <button
              onClick={handleLoginRedirect}
              className=" px-4 py-2   metabutton"
            >
              Login with MetaMask
            </button>
          )} */}
          <button
            onClick={handleStartStreamRedirect}
            className="startbutton container h-10 w-32 font-thin mt-4 text-center text-sm bg-black sepia rounded-md mb-4"
          >
            Start Stream
          </button>
          <button
            onClick={handleWatchStreamRedirect}
            className="watchbutton container h-10 w-32 font-thin mt-4 text-center text-sm bg-black sepia rounded-md mb-4"
          >
            Watch Stream
          </button>
        </div>
      </div>
    </nav>
  );
}
