import { Component } from "react";
import PortfolioExternalLink from "../../components/external-link";
import newsFeed1x from "../../assets/projects/news-feed/news-feed-cropped-1x.png";
import newsFeed2x from "../../assets/projects/news-feed/news-feed-cropped-2x.png";
import newsFeed4x from "../../assets/projects/news-feed/news-feed-cropped-4x.png";
import "./index.scss";

class NewsFeedDevelopment extends Component {
  repoUrl = "https://github.com/ajarana/news-feed";

  render() {
    return (
      <main className="blogPage">
        <section className="fullWidthContainerSmall backgroundGray flexCentered">
          <img
            id="reactThumbnail"
            className="heroImage"
            src={newsFeed1x}
            alt="Screenshot of a news feed made using React and Redux."
            srcSet={`${newsFeed1x}, ${newsFeed2x} 2x, ${newsFeed4x} 4x`}
          />
        </section>

        <section className="mainContainer blogContainer">
          <h1>Building a ReactJS News Feed</h1>
          <p>
            This news feed was built using ReactJS and Redux. I also used plain,
            old CSS3 for the layout and icons. I didn't bother generating the
            header or footer with React, however, because it's a static
            component I use across my entire website.
          </p>

          <h2>React</h2>
          <p>
            As I mentioned before, everything besides the header and footer are
            rendered with ReactJS. I separated the layout between{" "}
            <PortfolioExternalLink url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">
              presentational and container components
            </PortfolioExternalLink>{" "}
            in order to separate elements that serve as sources of data versus
            those that are simply passed data to present.
          </p>
          <p>
            This also served as a great introduction to ES6. My components
            included:
          </p>
          <ul>
            <li>
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/src/containers/Filter.js"}
              >
                <strong>Filter</strong>
              </PortfolioExternalLink>{" "}
              (container component)
            </li>
            <li>
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/src/components/Picker.js"}
              >
                <strong>Picker</strong>
              </PortfolioExternalLink>{" "}
              (presentational component)
            </li>
            <li>
              <PortfolioExternalLink
                url={
                  this.repoUrl + "/blob/master/src/components/ProgressBar.js"
                }
              >
                <strong>Progress Bar</strong>
              </PortfolioExternalLink>{" "}
              (presentational component)
            </li>
            <li>
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/src/components/Refresh.js"}
              >
                <strong>Refresh</strong>
              </PortfolioExternalLink>{" "}
              (presentational component)
            </li>
            <li>
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/src/components/Sources.js"}
              >
                <strong>Sources</strong>
              </PortfolioExternalLink>{" "}
              (presentational component)
            </li>
          </ul>
          <h2>Redux</h2>
          <p>
            <PortfolioExternalLink url="http://redux.js.org/docs/basics/DataFlow.html">
              Redux
            </PortfolioExternalLink>{" "}
            was used for state management; it was really annoying to have to
            pass data through a bunch of componenets just so the last one in the
            chain could have access to some data. Redux stores the entire state
            of the application in one object so that you can access it at any
            given point in time.
          </p>
          <p>
            In my project, Ajax calls are made via the Fetch API depending on
            the currently selected category. The returned data is stored in one
            object. Components like Progress Bar can then directly access the
            data to give an accurate representation of how much data has been
            downloaded at any given point in time through the Ajax calls.
          </p>
          <p>
            Another presentational component, Picker, also receives data from my
            Filter container component in order to change its styling according
            to the selected category.
          </p>
          <h2>CSS3</h2>
          <p>
            The styling was very straightforward for this project. The trickiest
            part was making sure components were rendered with the{" "}
            <PortfolioExternalLink
              url={this.repoUrl + "/blob/master/src/components/Picker.js#L9"}
            >
              correct CSS class
            </PortfolioExternalLink>
            .
          </p>
          <p>
            CSS3 transitions work wonderfully even when React has to re-render a
            component.
          </p>
          <h2>Conclusions</h2>
          <p>
            I really enjoyed getting to know the basics of React and Redux here.
            Although I used the JSX preprocessor for React, I was also able to
            use vanilla JS directly alongside it and continue learning its
            nuances.
          </p>
          <h2>Credits</h2>
          <p>
            <PortfolioExternalLink url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">
              Presentational and Container Components
            </PortfolioExternalLink>
          </p>
          <p>
            <PortfolioExternalLink url="http://redux.js.org/docs/basics/DataFlow.html">
              Data Flow
            </PortfolioExternalLink>
          </p>
          <div className="blogDates">
            <p className="spacedOut lightGray">
              <i>Posted on July 21, 2017</i>
            </p>
            <p className="spacedOut lightGray">
              <i>Last edited on July 23, 2017</i>
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default NewsFeedDevelopment;
