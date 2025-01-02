import { YouTubeEmbed } from '@next/third-parties/google'

type CurrentlyPlayingProps = {
  videoId: string
}

export default function CurrentlyPlaying({ videoId }: CurrentlyPlayingProps) {
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

