import React, { useState } from "react";
import { Link } from "react-scroll";
import PorfolioImage from "./naol.png";
import ProjectImage1 from "./excellerentSolutionsLandingPage.png";
import ProjectImage2 from "./costPlusDrugLandingPage.png";
import HMSImage from "./hms doctor dashboard.png";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeContainer">
      <header className="headerContainer">
        <h1>
          Hi, my name is <strong>Naol Adugna</strong>{" "}
        </h1>
        <h2>I am Full Stack Web Developer</h2>
        <div>
          <button>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={800}
            >
              Know Me More
            </Link>
          </button>
          <button>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              See My Works
            </Link>
          </button>
        </div>
      </header>
      {/* header Ends */}
      <main className="mainContainer">
        <section id="about">
          <div className="aboutContainer">
            <img src={PorfolioImage} alt="NaolImage" />
            <div className="aboutText">
              <h2> ABOUT ME </h2>
              <p>
                {" "}
                My name is Naol Adugna I am computer science undergraduate
                student and I'm a self-taught Full Stack Web Developer with a
                diverse skill set encompassing HTML, CSS, JavaScript, React JS,
                Express JS, Node JS, MYSQL, PostMan, Material UI, GitHub,
                WordPress, and SEO. Through my relentless pursuit of knowledge
                and hands-on experience, I have mastered the essentials of web
                development. I am ready to collaborate on projects that push the
                boundaries of what's possible on the web.{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="projectContainer">
            <h1>PROJECTS</h1>
            <div className="projectData">
              <div className="projectDetail">
                <h3>Hospital Management System</h3>
                <p>
                  This web based system is developed using React js, Express js,
                  Node js, MYSQL and CSS. This system has 6 actor users,
                  <span>Admin</span>, <span>Doctor</span>,{" "}
                  <span>Reception</span>, <span>Labratory Technician</span>,{" "}
                  <span> Pharmacist</span>, and <span>Paitient</span>. It uses
                  JSON Web Token for authenticating users with forgot password
                  generating OTP and sending to there email address, and zustand
                  for state management. There is also Gemini AI for users to
                  interact with it, and also has support Chat, sending files
                  between among other users.
                    <br/>
                    <br/>
                    <span>Backend is not hosted yet!</span>
                  
                </p>
                <div>
                  <button className="projectSeeButton projectonedemo">
                    {" "}
                    <NavLink
                      to="https://gebretsadikhms.netlify.app/"
                      target="_blank"
                    >
                      {" "}
                      See Demo
                    </NavLink>
                  </button>
                  <button className="projectSourceButton">
                    {" "}
                    <NavLink
                      to="https://github.com/NaolAdugna/HospitalManagementSystem"
                      target="_blank"
                    >
                      Source Code
                    </NavLink>{" "}
                  </button>
                </div>
              </div>
              <div className="projectImage">
                 <NavLink
                  to="https://gebretsadikhms.netlify.app/"
                  target="_blank"
                > {" "} 
                <img
                  src={HMSImage}
                  alt="ProjectImage"
                 
                  className="ProjectImage"
                />
                </NavLink>
              </div>
            </div>
            <div className="projectData">
              <div className="projectDetail">
                <h3>Execellerent Solutions Clone</h3>
                <p>
                  This clone website was done using React js and CSS and the
                  original website is{" "}
                  <NavLink
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                    to="https://excellerentsolutions.com/.com"
                  >
                    {" "}
                    ExcellerentSolutions.com
                  </NavLink>
                  {""}. I meticulously crafted this clone to mirror the
                  original's features and capabilities. From the seamless
                  navigation to the visually stunning elements, every aspect has
                  been meticulously recreated to capture the essence of
                  ExcellerentSolutions.com Website.
                </p>
                <div>
                  <button className="projectSeeButton projectonedemo">
                    {" "}
                    <NavLink
                      to="https://naoladugnaexcellerentsolutionsclone.netlify.app/"
                      target="_blank"
                    >
                      {" "}
                      See Demo
                    </NavLink>
                  </button>
                  <button className="projectSourceButton">
                    {" "}
                    <NavLink
                      to="https://github.com/NaolAdugna/excellerentsolutionsclone"
                      target="_blank"
                    >
                      Source Code
                    </NavLink>{" "}
                  </button>
                </div>
              </div>
              <div className="projectImage">
                <NavLink
                  to="https://naoladugnaexcellerentsolutionsclone.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={ProjectImage1}
                    alt="ProjectImage"
                    className="ProjectImage"
                  />
                </NavLink>
              </div>
            </div>
            <div className="projectData">
              <div className="projectDetail">
                <h3>Cost Plus Drugs Clone</h3>
                <p>
                  This meticulous replication of{" "}
                  <NavLink
                    to="https://costplusdrugs.com/"
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                  >
                    {" "}
                    CostPlusDrugs.com
                  </NavLink>{" "}
                  utilize advanced frameworks React.js and CSS, I have ensured
                  that every detail of the original Cost Plus Drugs website has
                  been faithfully reproduced.
                </p>
                <div>
                  <button className="projectSeeButton">
                    {" "}
                    <NavLink
                      to="https://naoladugnacostplusdrugsclone.netlify.app/"
                      target="_blank"
                    >
                      See Demo
                    </NavLink>{" "}
                  </button>
                  <button className="projectSourceButton">
                    {" "}
                    <NavLink
                      to="https://github.com/NaolAdugna/costplusdrugsclone"
                      target="_blank"
                    >
                      Source Code
                    </NavLink>{" "}
                  </button>
                </div>
              </div>
              <div className="projectImage">
                <NavLink
                  to="https://naoladugnacostplusdrugsclone.netlify.app/"
                  target="_blank"
                >
                  <img
                    src={ProjectImage2}
                    alt="ProjectImage"
                    className="ProjectImage"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        {/* Project Ends */}
        <section className="contactContainer">
          <div className="contactData">
            <h3>CONTACT</h3>
            <h4>Would wanna to reach out? awesome!</h4>
            <p>Email:naoladugna4747@gmail.com</p>
            <p>Phone Number:+251 947102035</p>
            <span>
              <NavLink
                to="https://github.com/NaolAdugna"
                target="_blank"
                title="github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/naoladugna47/"
                title="linkedin"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </NavLink>
            </span>
          </div>
        </section>
      </main>
      
    </div>
  );
}
