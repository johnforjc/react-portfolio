import PropTypes from "prop-types";
import "./button.css";

const button = (props) => {
  if (props.action === "download") {
    return (
      <a href={props.url}>
        <div className={`btn btn-${props.type} btn-${props.size} ${props.cta ? "cta" : ""}`} download="resume.pdf" data-aos={props.animation} data-aos-delay={props.delay}>
          {props.children}
        </div>
      </a>
    );
  } else {
    return (
      <a href={props.url}>
        <div className={`btn btn-${props.type} btn-${props.size} ${props.cta ? "cta" : ""}`} data-aos={props.animation} data-aos-delay={props.delay}>
          {props.children}
        </div>
      </a>
    );
  }
};

button.defaultProps = {
  type: "primary",
  size: "md",
  cta: false,
  url: "#",
  action: null,
};

button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  cta: PropTypes.bool,
};

export default button;
