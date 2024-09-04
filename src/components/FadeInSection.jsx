import PropTypes from "prop-types";
import useFadeIn from "./useFadeIn";

const FadeInSection = ({ children, className = "" }) => {
  const [domRef, isVisible] = useFadeIn();

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FadeInSection.defaultProps = {
  className: "",
};

export default FadeInSection;
