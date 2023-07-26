import React from "react";
import "./Hero.scss";
import linkedin from "../../assets/apps/linkedin-logo.png";
import github from "../../assets/apps/github-logo.png";

function Hero() {
  return (
    <>
      <div className="bio">
        <div className="bio__pfp" />
        <div className="bio__who">
          <p className="bio__hey">Hey, I'm</p>
          <h1 className="bio__heading">Waseem Khalo</h1>
          {/* <h2 className="bio__subheading">Software Engineer</h2> */}
          {/* <p className="bio__change">Inspired to make impactful products</p>

          <div className="bio__socials">
            <a
              className="bio__socials--link"
              href="https://www.linkedin.com/in/waseemkhalo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="bio__socials--icons"
                src={linkedin}
                alt="socials linkedin"
              />
            </a>

            <a
              className="bio__socials--link"
              href="https://www.github.com/waseemkhalo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="bio__socials--icons"
                src={github}
                alt="socials github"
              />
            </a>
          </div> */}
        </div> 
      </div>

      <div className="about">
        <h1 className="about__title">About me</h1>
        <p> This is me </p>
      </div>
    </>
  );
}

export default Hero;
