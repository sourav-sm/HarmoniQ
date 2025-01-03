'use-client';

import { YouTubeEmbed } from '@next/third-parties/google'
import axios from 'axios';
import { useEffect, useState } from 'react';

// type CurrentlyPlayingProps = {
//   videoId: string
// }

export default function CurrentlyPlaying() {
  const [videoId,setVideoId]=useState('VGPmFSB8qVY');

  const fetchCurrentlyPlayinng=async()=>{
    try{
     const res=await axios.get('/api/currently-playing');
     setVideoId(res.data.videoId);
    }catch(error){
      console.log('Error fetching currently playing video:', error);
    }
  }

  useEffect(()=>{
    fetchCurrentlyPlayinng();
  },[])
  
  
  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
        🎥 Now Playing
      </h2>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <YouTubeEmbed videoid={videoId} height={400} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white text-sm">
          Playing Now: Enjoy your music!
        </div>
      </div>
    </div>
  );
}

