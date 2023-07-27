import './Skills.scss'
// import linkedin from "../../assets/apps/linkedin-logo.png";
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
import photoshop from "../../assets/icons/techstack/photoshop-logo.png";
import premierepro from "../../assets/icons/techstack/premierepro-logo.png";
import aftereffects from "../../assets/icons/techstack/aftereffects-logo.png";
import illustrator from "../../assets/icons/techstack/illustrator-logo.png";
import qb from "../../assets/icons/techstack/qb-logo.png";

function Skills() {
  return (
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
            <div className="skills__box">
              <img className="skills__icons" src={photoshop} alt="figma"/>
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={premierepro} alt="figma"/>
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={aftereffects} alt="figma"/>
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={illustrator} alt="figma"/>
            </div>
            <div className="skills__box">
              <img className="skills__icons" src={qb} alt="figma"/>
            </div>
          </div>
        </div>
  )
}

export default Skills