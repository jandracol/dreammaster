import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-transparent py-2 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src="/images/logo-blanco.png"
              alt="Dream Master Entertainment"
              className="ml-10 logo-size"
            />
          </Link>
        </div>
        <div className="flex gap-8">
          <div className="group">
            <Link
              to="/corporate"
              className="text-white  hover:text-gray-300 transition-colors"
            >
              Corporate
            </Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <Link
              to="/festivals"
              className="text-white  hover:text-gray-300 transition-colors"
            >
              Festivals
            </Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <Link
              to="/productions"
              className="text-white  hover:text-gray-300 transition-colors"
            >
              Productions
            </Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <Link
              to="/ourstudio"
              className="text-white  hover:text-gray-300 transition-colors"
            >
              Our Studio
            </Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <Link
              to="/circusschool"
              className="text-white  hover:text-gray-300 transition-colors"
            >
              Circus School
            </Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <Link
              to="/contact"
              className="text-white  hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
