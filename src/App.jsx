import "./index.css";
import SparklesAnimation from "./components/SparklesAnimation";
import ImageCarousel from "./components/ImageCarousel";
// import ThreeDSection from "./components/ThreeDSection";

function App() {
  return (
    <>
      {/* Hero section */}
      <section id="hero" className="relative">
        <SparklesAnimation />
        {/*  Hero container  */}
        <div className="container max-w-6xl mx-auto px-6 py-1">
          {/* Menu / Logo container */}
          <nav className="flex items-center justify-between text-black">
            <img src="/images/logo-blanco.png" alt="" className="logo-size" />
            {/* <img src="/images/logo.svg" alt="" /> */}
            {/* Menu  */}
            <div className="hidden h-10 font-sansjosefin md:flex md:space-x-8">
              <div className="group">
                <a href="#" className="text-white">
                  Corporate
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="text-white">
                  Festivals
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="text-white">
                  Productions
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="text-white">
                  Circus School
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="text-white">
                  Our Studio
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* Todo Hamburger button */}
          </nav>
          {/* Todo Mobile Menu  */}
          <div className="flex ml-20 items-center md:justify-end h-screen">
            <div className="max-w-lg p-6 font-monserrat text-center text-base text-white uppercase border-2 md:p-10 md:text-4xl">
              We Bring Imagination to Life
            </div>
          </div>
        </div>
      </section>
      {/* Carousel section  */}
      <section id="carousel">
        <div>
          <ImageCarousel />
        </div>
      </section>

      <section id="feature">
        {/* Feature Container  */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-16 px-6 text-gray-900 md:flex-row md:px-0">
          {/* image  */}
          <img
            src="./images/desktop/Woman-catalogo_731x500.png"
            alt=""
            className="feature-img-size"
          />
          {/* Text container  */}
          <div className="top-48 bg-gray-100 md:absolute md:right-2 md:py-20 md:pl-8">
            <h2 className="max-w-lg mt-10 mb-6 font-kodchasan text-4xl text-center text-gray-900 md:text-3xl md:mt-0 md:text-left">
              Dream Master Entertainment
            </h2>
            <p className="max-w-md ml-8 md:ml-2 text-left font-kodchasan font-thin pr-6 pl-2">
              For Dream Master, dreaming is an integral part of our philosophy:
              To take the adventure further, push our dreams further, and, above
              all, believe that our people are the engine of our enterprise.
              <br /> At Dream Master, we offer our artists and creators the
              freedom they need to imagine their most incredible dreams and
              bring them to life. <br />
              At the core of the creative energy of Dream Master shows are
              athletes, acrobats and artists at the pinnacle of their art. These
              women and men are driven by a passion to continually surpass
              themselves. <br />
              Each artist is an integral part of the originality of Dream Master
              productions, and everyone’s contribution is essential to the
              success of the cast.
            </p>
          </div>
        </div>
      </section>
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-20 md:space-y-0 md:py-32 md:mb-0">
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
      {/* <section id="3dmodel">
        <div className="container">
          <ThreeDSection />
        </div>
      </section> */}
      <footer className="bg-gray-100">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* image  */}
            <img src="/images/logo-blue.png" alt="" className="logo-size " />
            {/* Container for Menu & socials  */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-gray-600">
              {/* Menus  */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1  */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="" className="hover:text-teal-800">
                      About Us
                    </a>
                    <div>
                      <a href="" className="hover:text-teal-800">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                {/* Menu 2  */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="" className="hover:text-teal-800">
                      Privacy Policy
                    </a>
                    <div>
                      <a href="" className="hover:text-teal-800">
                        Circus School
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social icons  */}
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img
                    src="/images/icon-facebook-dark.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/icon-instagram-dark.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
