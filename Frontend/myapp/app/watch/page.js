"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../style/watch.css';

interface Stream {
  playbackId: string;
  streamTitle: string;
}

const WatchStreamPage = () => {
  const [activeStreams, setActiveStreams] = useState<Stream[]>([]);

  useEffect(() => {
    const fetchActiveStreams = async () => {
      try {
        const response = await fetch('/api/streams/active', {
          headers: {
            'Cache-Control': 'no-store' // Ensure data is not cached
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch active streams");
        }
        const data = await response.json();
        setActiveStreams(data.streams);
      } catch (error) {
        console.error("Error fetching active streams:", error);
      }
    };

    fetchActiveStreams(); // Fetch latest data each page load
  }, []); // No dependencies here means it only runs once on component mount

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Watch Streams</h1>
      {activeStreams.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {activeStreams.map((stream) => (
            <Link href={`/stream/${stream.playbackId}`} key={stream.playbackId} passHref>
              <div className="block bg-blue-500 text-white rounded-lg shadow-md p-4 hover:shadow-lg hover:bg-blue-600 transition transform hover:-translate-y-1 cursor-pointer">
                <h2 className="text-lg font-semibold">{stream.streamTitle}</h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No active streams available</p>
      )}
    </div>
  );
};

export default WatchStreamPage;
