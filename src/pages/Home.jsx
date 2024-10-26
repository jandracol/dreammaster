import SparklesAnimation from "../components/SparklesAnimation";
import ImageCarousel from "../components/ImageCarousel";
import FadeInSection from "../components/FadeInSection";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold mb-4">Welcome to Our Site</h1> */}
      {/* Add your home page content here */}
      {/* Hero section - not really*/}
      <section id="hero" className="relative">
        <SparklesAnimation />
        {/*  Hero container  */}
        <div className="container max-w-6xl mx-auto px-6 py-1">
          {/* Todo Mobile Menu  */}
          <div className="flex ml-20 items-center md:justify-end h-screen">
            <div className="max-w-lg p-6 font-monserrat text-center text-base text-white uppercase border-2 md:p-10 md:text-4xl">
              We Bring Imagination to Life
            </div>
          </div>
        </div>
      </section>
      {/* Carousel section  */}
      <FadeInSection>
        <section id="carousel">
          <div>
            <ImageCarousel />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="heroSection">
          <HeroSection autoplay={true} />
        </section>

        {/* FEATURE SECTION  */}
        <section id="feature">
          {/* Feature Container  */}
          <div className="relative container flex flex-col max-w-6xl mx-auto my-16 px-6 text-gray-900 md:flex-row md:px-0">
            {/* image  */}
            <img
              src="../images/desktop/Woman-catalogo_731x500.png"
              alt=""
              className="feature-img-size"
            />
            {/* Text container  */}
            <div className="top-48 bg-gray-200 md:absolute md:right-2 md:py-20 md:pl-8">
              <h2 className="max-w-lg mt-10 mb-6 font-kodchasan text-2xl text-center text-gray-900 md:text-3xl md:mt-0 md:text-left">
                Dream Master Entertainment
              </h2>
              <p className="max-w-md ml-8 md:ml-2 text-left font-kodchasan font-thin pr-6 pl-2">
                For Dream Master, dreaming is an integral part of our
                philosophy: To take the adventure further, push our dreams
                further, and, above all, believe that our people are the engine
                of our enterprise.
                <br /> At Dream Master, we offer our artists and creators the
                freedom they need to imagine their most incredible dreams and
                bring them to life. <br />
                At the core of the creative energy of Dream Master shows are
                athletes, acrobats and artists at the pinnacle of their art.
                These women and men are driven by a passion to continually
                surpass themselves. <br />
                Each artist is an integral part of the originality of Dream
                Master productions, and everyone’s contribution is essential to
                the success of the cast.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Clients logo Section  */}
      <FadeInSection>
        <section id="references">
          <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-0 md:space-y-0 md:py-32 md:mb-0">
            <div className="flex flex-row">
              <h3 className="uppercase text-3xl">Our Clients</h3>
            </div>
            <div className="flex flex-col md:flex-row md:py-20">
              <img
                src="./images/desktop/MOE.png"
                alt=""
                className="client-logo-size"
              />
              <img
                src="./images/desktop/Fairmont-Palm.png"
                alt=""
                className="client-logo-size"
              />
              <img
                src="./images/desktop/DTCM.png"
                alt=""
                className="client-logo-size"
              />
              <img
                src="./images/desktop/City_Walk.png"
                alt=""
                className="client-logo-size"
              />
              <img
                src="./images/desktop/Meraas.png"
                alt=""
                className="client-logo-size"
              />
              <img
                src="./images/desktop/MajidalFuttaim.png"
                alt=""
                className="client-logo-size"
              />
              <img
                src="./images/desktop/Aldar.png"
                alt=""
                className="client-logo-size"
              />
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Home;
