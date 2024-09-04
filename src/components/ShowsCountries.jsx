import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ShowsCountries = () => {
  const [showCount, setShowCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      // Delay the start of counting by 3 seconds
      const delayTimer = setTimeout(() => {
        setStartCounting(true);
      }, 2000);

      return () => clearTimeout(delayTimer);
    }
  }, [inView]);

  useEffect(() => {
    if (startCounting) {
      const showInterval = setInterval(() => {
        setShowCount((prev) => (prev < 50 ? prev + 1 : 50));
      }, 40);
      const countryInterval = setInterval(() => {
        setCountryCount((prev) => (prev < 12 ? prev + 1 : 12));
      }, 160);

      return () => {
        clearInterval(showInterval);
        clearInterval(countryInterval);
      };
    }
  }, [startCounting]);

  return (
    <section
      ref={ref}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('./images/desktop/dancing-in-the-air-1600x600.png')",
      }}
    >
      {/* Transparent gray overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <h2 className="text-sm sm:text-2xl md:text-3xl font-bold text-white text-center px-4 z-10 relative">
        We have produced{" "}
        <span className="text-sm sm:text-2xl md:text-3xl text-white">
          {showCount}
        </span>
        + shows across{" "}
        <span className="text-sm sm:text-2xl md:text-3xl text-white">
          {countryCount}
        </span>{" "}
        countries
      </h2>
    </section>
  );
};

export default ShowsCountries;
