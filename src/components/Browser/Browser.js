import React from "react";
import icons from "../../assets/icons/Web icons.png";
import waseem from "../../assets/icons/W.png";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import refresh from "../../assets/icons/refresh.svg";
import SSL from "../../assets/icons/lock.svg";
import "./Browser.scss";
import Hero from "../Hero/Hero";
import linkedin from "../../assets/apps/linkedin-logo.png";
import github from "../../assets/apps/github-logo.png";
import resume from "../../assets/resume/waseem-khalo-resume.pdf";
import resumeIcon from "../../assets/icons/resume.png";

function Browser() {
  return (
    <div className="hero">
      <div className="hero__nav">
        <img src={icons} className="hero__icons" alt="icons" />
        <img src={waseem} className="hero__icons--w" alt="waseem tab icon" />
        <h5 className="hero__icons--waseem">Waseem Portfolio |</h5>
      </div>

      <div className="browser__searchbar">
        <div className="hero__searchbar">
          <div className="hero__searchbar-icons">
            <img
              src={back}
              className="hero__searchbar--back"
              alt="back button"
            />
            <img
              src={forward}
              className="hero__searchbar--forward"
              alt="forward button"
            />
            <img
              src={refresh}
              className="hero__searchbar--refresh"
              alt="refresh button"
            />
          </div>

          <div className="hero__searchbar-search">
            <div className="hero__searchbar-container">
              <img src={SSL} className="hero__searchbar--SSL" alt="ssl icon" />
              <h6 className="hero__searchbar--url">waseemkhalo.com/</h6>
            </div>
          </div>
        </div>

        <div className="browser__bookmarks-container">
          <div className="browser__socials">
            <a
              className="browser__socials--link"
              href="https://www.linkedin.com/in/waseemkhalo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="browser__socials--icons"
                src={linkedin}
                alt="socials linkedin"
              />
              Waseem Khalo
            </a>

            <a
              className="browser__socials--link"
              href="https://www.github.com/waseemkhalo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="browser__socials--icons"
                src={github}
                alt="socials github"
              />
              waseemkhalo
            </a>

            <a
              className="browser__socials--link"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="browser__socials--icons browser__socials--resume"
                src={resumeIcon}
                alt="socials resume"
              />
              Waseem Resume
            </a>

          </div>
        </div>
      </div>

      <Hero />
    </div>
  );
}

export default Browser;
