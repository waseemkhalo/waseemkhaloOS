import React from "react";
import "./Hero.scss";
import linkedin from "../../assets/apps/linkedin-logo.png";
import github from "../../assets/apps/github-logo.png";
import html from "../../assets/icons/techstack/html-logo.png";
import css from "../../assets/icons/techstack/css-logo.png";
import javascript from "../../assets/icons/techstack/javascript-logo.png";
import react from "../../assets/icons/techstack/react-logo.png";
import typescript from "../../assets/icons/techstack/typescript-logo.png";
import node from "../../assets/icons/techstack/nodejs-logo.png";
import firebase from "../../assets/icons/techstack/firebase-logo.png";
import mysql from "../../assets/icons/techstack/mysql-logo.png";
import git from "../../assets/icons/techstack/git-logo.png";
import sass from "../../assets/icons/techstack/scss-logo.png";
import tailwindcss from "../../assets/icons/techstack/tailwindcss-logo.png";
import materialui from "../../assets/icons/techstack/materialui-logo.png";
import postman from "../../assets/icons/techstack/postman-logo.png";
import figma from "../../assets/icons/techstack/figma-logo.png";
// import photoshop from "../../assets/icons/techstack/photoshop-logo.png";
// import premierepro from "../../assets/icons/techstack/premierepro-logo.png";
// import aftereffects from "../../assets/icons/techstack/aftereffects-logo.png";
// import illustrator from "../../assets/icons/techstack/illustrator-logo.png";

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

        <div className="skills">
          <h1 className="skills__header">Skills</h1>
          <div className="skills__container">
            <div className="skills__box">
              <img className="skills__icons skills__icons--stretch" src={html} alt="html" />
            </div>
            <div className="skills__box">
              <img className="skills__icons skills__icons--stretch" src={css} alt="css" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={javascript} alt="javascript" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={typescript} alt="typescript" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={react} alt="reactjs" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={node} alt="nodejs" />
            </div>
            <div className="skills__box">
              <img className="skills__icons skills__icons--stretch" src={firebase} alt="firebase" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={mysql} alt="mysql" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={git} alt="git" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={github} alt="github" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={sass} alt="sass/scss" />
            </div>
            <div className="skills__box">
              <img className="skills__icons skills__icons--shrink" src={tailwindcss} alt="tailwindcss" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={materialui} alt="materialui" />
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={postman} alt="postman"/>
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={figma} alt="figma"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
