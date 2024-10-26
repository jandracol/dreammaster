import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-4">Festivals</h1> */}
      {/* Add your festivals page content here */}
      {/* FOOTER SECTION  */}
      <footer className="bg-white">
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
                  <div className="group">
                    <Link
                      to="/corporate"
                      className="text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      About Us
                    </Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  <div className="group">
                    <Link
                      to="/contact"
                      className="text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      Contact Us
                    </Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                </div>
                {/* Menu 2  */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div className="group">
                    <Link
                      to="/contact"
                      className="text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  <div></div>
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
    </div>
  );
};

export default Footer;
