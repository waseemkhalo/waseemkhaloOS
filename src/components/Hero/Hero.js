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
            When I'm not behind my desk working, my heart draws me to the great
            outdoors, where I am captivated by the beauty of nature and the art
            of capturing it through photography and videography. Whether I'm
            hiking through breathtaking landscapes or documenting the wonders of
            the natural world, every frame I capture brings me inspiration and
            peace.{" "}
          </p>

        </div>

        <Skills />

        <div className="contact">
          <h1 className="contact__header">Contact</h1>
          <p className="contact__bio">
            {" "}
            I am currently looking for new opportunities. If you would like to
            get in touch, please feel free to reach out to me via email or
            LinkedIn.{" "}
          </p>
          <p>Click on any of the bookmarks or apps to see more of my work!</p>
          <a className='contact__email' href="mailto:waseemkhalo@gmail.com">waseemkhalo@gmail.com</a>

        </div>

        <div className="footer">
          <p>Waseem Khalo © 2023</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
