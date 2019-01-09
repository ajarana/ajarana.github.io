import React from 'react'
import moment from 'moment';

const Projects = (props) => {
  console.log('props bro', props)
  let projects = [
    {
      title: 'Block Aid',
      description: 'An HTML5 canvas game made with vanilla JavaScript and CSS3 via LESS. Maintains pixel-perfect quality even on high DPI screens.',
      assets: {
        src: './assets/agame/agame-1x.png',
        alt: 'Screenshot of a memory game.',
        srcset: './assets/agame/agame-1x.png, ./assets/agame/agame-2x.png 2x, ./assets/agame/agame-4x.png 4x'
      },
      lastUpdated: props.githubData.blockAid.lastUpdated
    },
    {
      title: 'Mixtin',
      description: 'A responsive website designed and developed using Bootstrap 3 components, HTML5, and CSS3 via LESS.',
      assets: {
        src: './assets/mixtin/mixtin-1x-C.png',
        alt: 'Screenshot of the mobile menu of a Bootstrap website.',
        srcset: './assets/mixtin/mixtin-1x-C.png, ./assets/mixtin/mixtin-2x-C.png 2x, ./assets/mixtin/mixtin-4x-C2.png 4x'
      },
      lastUpdated: props.githubData.mixtin.lastUpdated
    },
    {
      title: 'News Feed',
      description: 'A tech, gaming, and science news feed designed and developed using React, Redux, HTML5, and CSS3. Data is gathered from an external JSON API using Ajax via the Fetch API.',
      assets: {
        src: './assets/arcade/arcade-1x-C2.png',
        alt: 'Screenshot of a news feed made using React and Redux.',
        srcset: './assets/arcade/arcade-1x-C2.png, ./assets/arcade/arcade-2x-C2.png 2x, ./assets/arcade/arcade-4x-C2.png 4x'
      },
      lastUpdated: props.githubData.newsFeed.lastUpdated
    }
  ];

  const projectList = projects.map((project, i) => 
    <section className="flexCenteredToFlexTopLeft flexWrapThenNoWrap sectionContainer project" key={ i }>
      <figure className="imageHolder flexCentered">
        <a href="/agame/">
          <img className="images" 
               src={ project.assets.src } 
               alt={ project.assets.alt }
               srcSet={ project.assets.srcset } />
        </a>
      </figure>

      <div className="listContainer">
        <header>
          <h3 className="sectionHeaders">
           { project.title } <span className="updated-time">Last updated: {project.lastUpdated}</span>
          </h3>

          <p>
            { project.description }
          </p>
        </header>

        <ul className="linkContainer">
          <li>
            <a href="/agame/" className="linkIcon">View project</a>
          </li>
          <li>
            <a href="https://github.com/ajarana/agame" className="linkIcon" target="_blank" rel="noopener noreferrer">View code</a>
          </li>
          <li>
            <a href="/blog/development-canvas-game" className="linkIcon">Read more</a>
          </li>
        </ul>
      </div>
    </section>
  )

  return (
    <div className="mainContainer">
      { projectList }
    </div>
  )
};

class Home extends React.Component {
  constructor() {
    super() 
    console.log(moment('2017-07-24T06:03:06Z').format("MMMM Do YYYY, h:mm:ss a"))
    this.state = {
      githubData: {
        blockAid: {
          lastUpdated: 'No data received yet.'
        },
        mixtin: {
          lastUpdated: 'No data received yet.'
        },
        newsFeed: {
          lastUpdated: 'No data received yet.'
        }
      }
    }
  }

  async componentDidMount() {
    // let blockResponse = await fetch('https://api.github.com/repos/ajarana/agame');

    // let blockJson = await blockResponse.json();

    // let formattedBlockJson = moment(blockJson.pushed_at).format("MMMM Do YYYY, h:mm:ss a")

    // let mixtinResponse = await fetch('https://api.github.com/repos/ajarana/mixtin');

    // let mixtinJson = await mixtinResponse.json();

    // let formattedMixtinJson = moment(mixtinJson.pushed_at).format("MMMM Do YYYY, h:mm:ss a")

    // let newsFeedResponse = await fetch('https://api.github.com/repos/ajarana/arcade');

    // let newsFeedJson = await newsFeedResponse.json();

    // let formattedNewsFeedJson = moment(newsFeedJson.pushed_at).format("MMMM Do YYYY, h:mm:ss a")

    // this.setState(
    //   { 
    //     githubData: { 
    //       ...this.state.githubData,
    //       blockAid: { 
    //         ...this.state.githubData.blockAid, 
    //         lastUpdated: formattedBlockJson 
    //       },
    //       mixtin: {
    //         ...this.state.githubData.mixtin, 
    //         lastUpdated: formattedMixtinJson
    //       },
    //       newsFeed: {
    //         ...this.state.githubData.newsFeed, 
    //         lastUpdated: formattedNewsFeedJson
    //       }
    //     } 
    //   }
    // )
  }

  render() {
    return (
      <main>

        <article className="portfolio">

          <header id="introduction" className="main-container-full-width textAlignCenter">
            <div className="hero-header-text">
              <h2>UI Developer</h2>

              <p>I am a UI developer with a chemistry degree. This mobile-first web app was made with <span id="react">React</span> and, for the purposes of learning, without any <span id="css3">CSS3</span> frameworks/libraries or <span id="html5">HTML5</span> templates. The site and resume design are my own. Below are some of my personal projects.</p>

              <ul className="linkContainer">
                  <li>
                    <a href="https://github.com/ajarana/ajarana.github.io"className="linkIcon">Site code</a>
                  </li>
                  <li>
                    <a href="https://github.com/ajarana/resume" className="linkIcon" target="_blank" rel="noopener noreferrer">Resume</a>
                  </li>
                </ul>
            </div>
          </header>

          <Projects githubData={this.state.githubData} />

        </article>

      </main>
    )
  }
}

export default Home