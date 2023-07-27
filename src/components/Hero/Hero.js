import React from "react";
import Skills from "../Skills/Skills";
import "./Hero.scss";

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
      <div className="about__content">
        <div className="about">
          <h1 className="about__header">About me</h1>
          <p className="about__bio">
            {" "}
            I am a <strong>software engineer</strong>, driven by the desire to
            create impactful, visually stunning, and user-friendly products that
            solve real-world problems and enhance the overall user experience.{" "}
          </p>
          <p className="about__bio">
            {" "}
            My professional background first began in accounting when I studied
            at the University of Guelph-Humber.{" "}
          </p>
          <p className="about__bio">
            {" "}
            When I'm not behind my desk working, my heart draws me to the great
            outdoors, where I am captivated by the beauty of nature and the art
            of capturing it through photography and videography. Whether I'm
            hiking through breathtaking landscapes or documenting the wonders of
            the natural world, every frame I capture brings me inspiration and
            peace. If I could, I would live in the mountains :P{" "}
          </p>
        </div>

        <Skills />
      </div>
    </>
  );
}

export default Hero;
