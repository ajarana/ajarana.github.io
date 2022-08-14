import { Component } from "react";
import PortfolioExternalLink from "../../components/external-link";
import "./index.scss";

class Bootstrap3SiteDevelopment extends Component {
  render() {
    return (
      <main>
        <section className="fullWidthContainerSmall flexCentered backgroundGray">
          <PortfolioExternalLink url="https://ajarana.github.io/mixtin">
            <img
              className="images"
              src="assets/mixtin/mixtin-1x.png"
              alt="Screenshot of the mobile menu of a Bootstrap website."
              srcSet="assets/mixtin/mixtin-1x-C.png, assets/mixtin/mixtin-2x-C.png 2x, assets/mixtin/mixtin-4x-C2.png 4x"
            />
          </PortfolioExternalLink>
        </section>

        <section className="mainContainer blogContainer">
          <h1>Building a Bootstrap 3 Image Gallery</h1>
          <p>
            I designed and developed{" "}
            <PortfolioExternalLink url="https://ajarana.github.io/mixtin">
              this gallery
            </PortfolioExternalLink>{" "}
            using Boostrap 3 components, LESS, HTML5, and a little bit of
            JavaScript. Bootstrap takes care of a lot of things for you: the
            design, media queries, modular classes, meta tags, and UI
            transitions and animations. Customization requires a little more
            knowledge, but otherwise it is a very easy framework to work with.
          </p>

          <h2>Boostrap Components</h2>
          <p>
            Components used included navbars, containers, columns, among other
            components. Bootstrap's extensive{" "}
            <PortfolioExternalLink url="http://getbootstrap.com/components/">
              documentation
            </PortfolioExternalLink>{" "}
            does more than enough to get you through any problems.
          </p>
          <h2>LESS</h2>
          <p>
            My{" "}
            <PortfolioExternalLink url="https://github.com/ajarana/mixtin/tree/master/less">
              LESS directory
            </PortfolioExternalLink>{" "}
            consisted of the Bootstrap LESS files along with my own custom ones.
            Vanilla Bootstrap isn't enough for a distinct look, though
            customization does come with its own set of problems since Bootstrap
            3 does not use things like{" "}
            <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Advanced_layouts_with_flexbox">
              flexbox
            </PortfolioExternalLink>
            .
          </p>
          <h2>HTML5</h2>
          <p>
            I used the{" "}
            <PortfolioExternalLink url="http://getbootstrap.com/getting-started/#template">
              basic HTML5 template
            </PortfolioExternalLink>{" "}
            from Bootstrap's website for this part. Included are necessary meta
            tags and links to the external stylesheets and scripts. The rest is{" "}
            <PortfolioExternalLink url="https://github.com/ajarana/mixtin/blob/master/index.html">
              my own code
            </PortfolioExternalLink>
            .
          </p>
          <h2>JS</h2>
          <p>
            I used a little bit of Vanilla JS to make a{" "}
            <PortfolioExternalLink url="https://github.com/ajarana/mixtin/blob/master/js/mixtinTime1.js">
              counter
            </PortfolioExternalLink>{" "}
            that keeps track of the date. jQuery is used for other UI effects,
            such as those for the header and image gallery sorting.
          </p>
          <h2>Conclusions</h2>
          <p>
            Bootstrap is an extremely useful framework for when you need to
            build a responsive front-end both quickly and easily. It will
            require much more work to actually learn about the specific
            technologies they use, but it is still worthwhile to spend your time
            learning Bootstrap.
          </p>

          <p>
            In the future, they will also include other additions to their
            framework including{" "}
            <PortfolioExternalLink url="https://www.quackit.com/bootstrap/bootstrap_4/differences_between_bootstrap_3_and_bootstrap_4.cfm">
              flexbox, SCSS, rem rather than px, among other changes
            </PortfolioExternalLink>
            .
          </p>
          <h2>Credits</h2>
          <p>
            <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Advanced_layouts_with_flexbox">
              Advanced layouts with flexbox
            </PortfolioExternalLink>
          </p>
          <p>
            <PortfolioExternalLink url="http://getbootstrap.com/">
              Bootstrap
            </PortfolioExternalLink>
          </p>
          <p>
            <PortfolioExternalLink url="https://www.quackit.com/bootstrap/bootstrap_4/differences_between_bootstrap_3_and_bootstrap_4.cfm">
              Differences Between Bootstrap 3 and 4
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

export default Bootstrap3SiteDevelopment;
