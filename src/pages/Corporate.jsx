import SparklesAnimation from "../components/SparklesAnimation";
import SlideShow1 from "../components/SlideShow1";
import GallerySlider from "../components/GallerySlider";

const Corporate = () => {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold mb-4">Corporate</h1> */}
      {/* Add your corporate page content here */}
      <section id="hero-corporate" className="relative">
        <SparklesAnimation />
        {/*  Hero container  */}
        <div className="container max-w-6xl mx-auto px-6 py-1">
          {/* Todo Mobile Menu  */}
          <div className="flex ml-20 items-center md:justify-center h-screen">
            <div className="max-w-lg p-6 font-monserrat text-center text-base text-white uppercase border-2 md:p-10 md:text-4xl">
              Corporate Shows
            </div>
          </div>
        </div>
      </section>
      {/* Text Section  */}
      <section className="container mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Overview</h2>

        {/* Text container with column layout */}
        <div className="text-gray-600 leading-relaxed columns-1 md:columns-2 gap-8">
          {/* {text} */}
          <p>
            {" "}
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.`
          </p>
        </div>
      </section>
      {/* Carrousel  */}
      <SlideShow1 />
      {/* Text Section  */}
      <section className="container mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Overview</h2>

        {/* Text container with column layout */}
        <div className="text-gray-600 leading-relaxed columns-1 md:columns-2 gap-8">
          {/* {text} */}
          <p>
            {" "}
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.`
          </p>
        </div>
      </section>
      <GallerySlider />
    </div>
  );
};

export default Corporate;
