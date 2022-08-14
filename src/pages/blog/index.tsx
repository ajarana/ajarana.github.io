import { Component } from "react";
import PortfolioInternalLink from "../../components/internal-link";
import "./index.scss";

class BlogPage extends Component {
  render() {
    return (
      <main>
        <div className="mainContainer">
          <section
            id="blogDirectory"
            className="antiCollapsingMargins"
          >
            <h2>March 2017</h2>
            <p>
              <PortfolioInternalLink
                navLinkProps={{
                  to: "/blog/development-responsive-canvas",
                }}
              >
                Building a Responsive Canvas Using Vanilla JavaScript
              </PortfolioInternalLink>
            </p>
            <h2>July 2017</h2>
            <p>
              <PortfolioInternalLink
                navLinkProps={{
                  to: "/blog/development-canvas-game",
                }}
              >
                Building an HTML5 Canvas Game
              </PortfolioInternalLink>
            </p>
            <p>
              <PortfolioInternalLink
                navLinkProps={{
                  to: "/blog/development-bootstrap-3-site",
                }}
              >
                Building a Bootstrap 3 Image Gallery
              </PortfolioInternalLink>
            </p>
            <p>
              <PortfolioInternalLink
                navLinkProps={{
                  to: "/blog/development-reactjs-news-feed",
                }}
              >
                Building a ReactJS News Feed
              </PortfolioInternalLink>
            </p>
          </section>
        </div>
      </main>
    );
  }
}

export default BlogPage;
