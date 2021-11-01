import "./footer.css";
import github from "./../../assets/images/github.png";

const footer = () => {
  return (
    <footer>
      <div className="line"></div>
      <div className="social-media-list">
        <div className="social-media">
          <a href="https://github.com/johnforjc">
            <div className="social-media-icon">
              <img src={github} alt="" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
