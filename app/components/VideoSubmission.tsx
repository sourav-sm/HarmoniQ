'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { YouTubeEmbed } from '@next/third-parties/google'

export default function VideoSubmission() {
  const [videoUrl, setVideoUrl] = useState('')
  const [videoId, setVideoId] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = extractVideoId(videoUrl)
    if (id) {
      setVideoId(id)
      // Here you would typically send this to your backend
      console.log('Submitted video ID:', id)
    } else {
      alert('Invalid YouTube URL')
    }
  }

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
        🎤 Submit a Song
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-inner"
      >
        <Input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Paste YouTube video URL here"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <Button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
        >
          Submit
        </Button>
      </form>
      {videoId && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-green-600">
            🎬 Preview:
          </h3>
          <YouTubeEmbed videoid={videoId} height={200} />
        </div>
      )}
    </div>
  );
}