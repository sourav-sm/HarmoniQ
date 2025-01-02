import VideoSubmission from "../components/VideoSubmission"
import VideoQueue from '../components/VideoQueue'
import CurrentlyPlaying from '../components/CurrentlyPlaying'
import { useEffect } from "react";
import axios from "axios";

export default function Page() {

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-600">
        🎵 Stream Song Voting 🎶
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <CurrentlyPlaying videoId="dQw4w9WgXcQ" />
          <VideoSubmission />
        </div>

        {/* Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <VideoQueue />
        </div>
      </div>
    </div>
  );
}
