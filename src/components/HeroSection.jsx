import { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";

const HeroSection = ({ autoplay = true }) => {
  // const [videoHeight, setVideoHeight] = useState("auto");
  const sectionRef = useRef(null);

  const videos = [
    { id: "4Rc1xR7HZLs", title: "Mermaids" },
    { id: "3IBll6I05fs", title: "Hand Stand" },
    { id: "cJQRQiXQu2w", title: "Bubbles" },
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

  useEffect(() => {
    const updateVideoHeight = () => {
      // if (sectionRef.current) {
      // const width = sectionRef.current.offsetWidth;
      // 16:9 aspect ratio
      // const height = (width / 16) * 9;
      // setVideoHeight(`${height}px`);
      // }
    };

    updateVideoHeight();
    window.addEventListener("resize", updateVideoHeight);
    return () => window.removeEventListener("resize", updateVideoHeight);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div style={{ paddingBottom: "56.25%" }} className="relative w-full">
        <YouTube
          videoId={currentVideoId}
          opts={opts}
          className="absolute top-0 left-0 w-full h-full"
          iframeClassName="w-full h-full"
        />
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 sm:gap-4">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideoId(video.id)}
            className={`px-3 py-1 text-xs sm:text-sm md:text-base bg-white bg-opacity-70 hover:bg-opacity-100 text-blue rounded transition-all ${
              currentVideoId === video.id ? "ring-2 ring-gray-500" : ""
            }`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  autoplay: PropTypes.bool,
};

HeroSection.defaultProps = {
  autoplay: true,
};

export default HeroSection;
