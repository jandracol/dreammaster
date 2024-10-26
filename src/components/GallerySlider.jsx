import React from "react";

// Custom CSS for animations - place this in your global CSS file
const customStyles = `
@keyframes move-it {
  0%, 90%, 100% { transform: translateY(2%); }
  45% { transform: translateY(-50%); }
}

@keyframes move-it-2 {
  0%, 90%, 100% { transform: translateY(-50%); }
  45% { transform: translateY(5%); }
}

.animate-move-it-1 {
  animation: 60s move-it ease alternate infinite 5s;
}

.animate-move-it-2 {
  animation: 58s move-it-2 ease alternate infinite 5s;
}

.animate-move-it-3 {
  animation: 70s move-it ease alternate infinite 6s;
}

.animate-move-it-4 {
  animation: 65s move-it-2 ease alternate infinite 5.5s;
}

.gallery-strip:hover {
  animation-play-state: paused;
}

.photo__name {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

.photo:hover .photo__name {
  color: white;
}
`;

const galleryData = [
  {
    id: 1,
    strip: "one",
    photos: [
      {
        src: "./images/desktop/alice_adventure.jpg",
        // src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
        name: "Alice",
      },
      {
        src: "./images/desktop/ballet_under_sea.jpg",
        name: "Ballet",
      },
      {
        src: "./images/desktop/dancing_air.jpg",
        name: "Dance",
      },
      {
        src: "./images/desktop/golden_Land_poster.jpg",
        name: "",
      },
    ],
  },
  {
    id: 2,
    strip: "two",
    photos: [
      {
        src: "./images/desktop/alice_adventure.jpg",
        name: "Alice",
      },
      {
        src: "./images/desktop/ballet_under_sea.jpg",
        name: "Ballet",
      },
      {
        src: "./images/desktop/dancing_air.jpg",
        name: "Dance",
      },
      {
        src: "./images/desktop/golden_Land_poster.jpg",
        name: "",
      },
    ],
  },
  {
    id: 3,
    strip: "three",
    photos: [
      {
        src: "./images/desktop/ballet_under_sea.jpg",
        name: "Ballet",
      },
      {
        src: "./images/desktop/alice_adventure.jpg",
        name: "Alice",
      },
      {
        src: "./images/desktop/dancing_air.jpg",
        name: "Dance",
      },
      {
        src: "./images/desktop/golden_Land_poster.jpg",
        name: "",
      },
    ],
  },
  {
    id: 4,
    strip: "four",
    photos: [
      {
        src: "./images/desktop/alice_adventure.jpg",
        name: "Alice",
      },
      {
        src: "./images/desktop/ballet_under_sea.jpg",
        name: "Ballet",
      },
      {
        src: "./images/desktop/dancing_air.jpg",
        name: "Dance",
      },
      {
        src: "./images/desktop/flying_pearl.jpg",
        name: "Flying",
      },
    ],
  },
];

const GallerySlider = () => {
  // Add custom styles to head
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const getStripAnimation = (strip) => {
    switch (strip) {
      case "one":
        return "animate-move-it-1";
      case "two":
        return "animate-move-it-2";
      case "three":
        return "animate-move-it-3";
      case "four":
        return "animate-move-it-4";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-wrap w-full overflow-hidden max-w-[1300px] mx-auto min-h-screen bg-white">
      {galleryData.map((strip) => (
        <div
          key={strip.id}
          className="flex-none w-full sm:w-1/2 lg:w-1/4 border-r-2 border-[#333] relative"
        >
          <div
            className={`gallery-strip min-h-screen ${getStripAnimation(
              strip.strip
            )}`}
          >
            {strip.photos.map((photo, index) => (
              <div key={index} className="relative text-right pb-12 group">
                <div className="photo__image">
                  <img
                    src={photo.src}
                    alt={photo.name}
                    className="w-[90%] transform translate-x-[30%] transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] delay-200 group-hover:translate-x-0"
                  />
                </div>
                <div className="photo__name uppercase text-[40px] tracking-[2px] text-transparent mt-[-25px] transition-colors duration-400 ease-in-out delay-400 relative w-full">
                  {photo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySlider;
