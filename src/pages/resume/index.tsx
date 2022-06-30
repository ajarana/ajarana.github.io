import React from 'react'
import './index.scss';

class Resume extends React.Component {
  render() {
    return (
      <main id="resume">        
        <article>
          <header>
            <h1>Andres Arana</h1>

            <ul className="contact-information">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Centreville, VA</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>ajoelarana@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <span>(703) 434-0219</span> 
              </li>
              <li>
                  <i className="fas fa-laptop-code"></i>
                  <span>ajarana.github.io</span>
              </li>
            </ul>   
          </header>

          <section id="skillSection" className="resumeSection">
            <h2>Skills</h2>

            <section className="subSection">
              <section className="flexSection alignCenter front-end-skills">
                <h4 className="secondaryHeader">Front End</h4>

                <div className="skillsContainer">
                  <div className="skillList">
                    <span>JavaScript</span>
                    <span>CSS3</span>
                    <span>HTML5</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Angular</span>
                    <span>Responsive Design</span>
                  </div>

                  <div className="skillList">
                    <span>Sass</span>
                    <span>Bootstrap</span>
                    <span>Node</span>
                    <span>Kendo UI</span>
                    <span>Jasmine</span>
                    <span>CesiumJS</span>
                  </div>
                </div>
              </section>

              <section className="flexSection alignCenter">
                <h4 className="secondaryHeader">Software Tools</h4>

                <div>
                  <div className="skillsContainer">
                    <div className="skillList">
                      <span>macOS</span><span>Ubuntu</span><span>Git</span><span>VS Code</span><span>Jira</span><span>Sentry</span><span>CircleCI</span>
                   </div>
                  </div>
                </div>
              </section>
                
              <section className="flexSection">
                <h4 className="secondaryHeader">Languages</h4>

                <div>
                  <div className="skillsContainer">
                    <div className="skillList">
                      <span>English</span><span>Spanish</span>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            
          </section>

          <div className="separator"></div>

          <section id="workSection" className="resumeSection">
            <h2>Work Experience</h2>

            <section className="subSection">
              <section className="flexSeparated">
                <h3 className="secondaryHeader">Senior Front-End Developer</h3>
                <p>
                  January 2021 - Present
                </p>
              </section>

              <h4>Ace Info Solutions <span>(acquired by Guidehouse in October, 2021)</span></h4>

              <ul>
                <li>
                  Using Angular and Kendo UI to develop and update the core features of a user management application.
                </li>

                <li>
                  Coordinating with a UI/UX team in order to bring consistency and extensibility to common components shared across different projects.
                </li>

                <li>
                  Developed the frontend for a minimally viable product using React and TypeScript. 
                </li>
              </ul>
            </section>

            <section className="subSection">
              <section className="flexSeparated">
                <h3 className="secondaryHeader">Front-End Developer</h3> 
                <p>
                  April 2019 - December 2020
                </p>
              </section>

              <h4>LifeFuels</h4>

              <ul>
                <li>
                  Project lead for a small remote team in charge of coordinating the project's various back-end, front-end, and design needs.
                </li>

                <li>
                  Building the React-based dashboard front end for sports teams to manage the nutrition and hydration of players using the LifeFuels bottle.
                </li>

                <li>
                  Built the majority of the lifefuels.com shop front end including cart, checkout, and subscription workflows using React.
                </li>
              </ul>
            </section>

            <section className="subSection">
              <section className="flexSeparated">
                <h3 className="secondaryHeader">UI Developer</h3> 
                <p>
                  September 2017 - April 2019
                </p>
              </section>

              <h4>Pragmatics</h4>

              <ul>
                <li>
                  Visualized real-time geospatial and weather data using CesiumJS for a prototype created for a federal customer.
                </li>
                <li>
                  Developed the front end for other web prototypes
                  using React and Vis.js.
                </li>
                <li>
                  Involved in interviewing candidates and mentored new team members to help them use React and AngularJS to support existing projects.
                </li>
                <li>
                  Attended customer meetings to provide feature status updates and gather feedback.
                </li>
              </ul>
            </section>

          </section>

          <div className="separator"></div>

          <section className="resumeSection">
            <h2>Personal Projects</h2> 

            <section className="subSection">
              <section className="flexSeparated">
                  <h3>ajarana.github.io</h3>
                  <p>December 2016 - Present</p>
            </section>
              <ul>
                <li>
                Portfolio website that I designed and developed.
                </li>
              </ul>
            </section>
          
          </section>

          <div className="separator"></div>

          <section className="resumeSection">
            <h2>Education</h2> 

            <section className="subSection">
              <section className="flexSeparated">
                <h3>Bachelor of Science in Chemistry</h3>
                <p>August 2012 - May 2016</p>
              </section>

              <p>College of William &amp; Mary</p>
            </section>
          </section>
        </article>
      </main>
    )
  }
}

export default Resume;