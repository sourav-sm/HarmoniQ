'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import axios from 'axios'
import { useEffect } from 'react'

type Video = {
  id: string
  title: string
  votes: number
}
const REFRESH_INTERVAL_MS=10*1000;

export default function VideoQueue() {
  const [queue, setQueue] = useState<Video[]>([
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', votes: 5 },
    { id: 'L_jWHffIx5E', title: 'All Star', votes: 3 },
    { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', votes: 7 },
  ])

  async function refreshStreams(){
    try {
      const res = await axios.get('/api/streams/my');
      console.log(res.data);
      // Update queue if necessary with response data
      // setQueue(res.data); // Uncomment and structure API response accordingly
    } catch (error) {
      console.log('Error fetching streams:', error);
    }
  }

  useEffect(()=>{
    refreshStreams();
    const interval=setInterval(()=>{
      
    },REFRESH_INTERVAL_MS); 
  },[]);


  const handleVote = (id: string, increment: number) => {
    setQueue(queue.map(video => 
      video.id === id ? { ...video, votes: video.votes + increment } : video
    ).sort((a, b) => b.votes - a.votes))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
        🎶 Upcoming Songs
      </h2>
      <ul className="space-y-4">
        {queue.map((video) => (
          <li
            key={video.id}
            className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex-grow">
              <h3 className="font-semibold text-lg text-gray-800">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500">Votes: {video.votes}</p>
            </div>
            <div className="flex space-x-2">
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={() => handleVote(video.id, 1)}
              >
                <ArrowUpIcon className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={() => handleVote(video.id, -1)}
              >
                <ArrowDownIcon className="h-4 w-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}