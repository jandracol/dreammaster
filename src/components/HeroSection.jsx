import { useState } from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";

const HeroSection = ({ autoplay = true }) => {
  const videos = [
    { id: "4Rc1xR7HZLs", title: "Video 1" },
    { id: "3IBll6I05fs", title: "Video 2" },
    { id: "cJQRQiXQu2w", title: "Video 3" },
  ];

  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

  const opts = {
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      mute: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <YouTube
          videoId={currentVideoId}
          opts={opts}
          className="w-full h-full"
          iframeClassName="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 sm:gap-4 md:bottom-8 md:left-8 md:right-8">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideoId(video.id)}
            className={`px-3 py-1 text-xs sm:text-sm md:text-base bg-white bg-opacity-70 hover:bg-opacity-100 text-black rounded transition-all ${
              currentVideoId === video.id ? "ring-2 ring-blue-500" : ""
            }`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  autoplay: PropTypes.bool,
};

HeroSection.defaultProps = {
  autoplay: true,
};

export default HeroSection;
