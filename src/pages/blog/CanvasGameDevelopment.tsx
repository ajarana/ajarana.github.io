import { Component } from "react";
import PortfolioExternalLink from "../../components/external-link";
import PortfolioInternalLink from "../../components/internal-link";
import "./index.scss";
import blockAid1x from "../../assets/projects/block-aid/block-aid-1x.png";
import blockAid2x from "../../assets/projects/block-aid/block-aid-2x.png";
import blockAid4x from "../../assets/projects/block-aid/block-aid-4x.png";

class CanvasGameDevelopment extends Component {
  repoUrl = "https://github.com/ajarana/block-aid";

  render() {
    return (
      <main className="blogPage">
        <section className="fullWidthContainerSmall backgroundGray flexCentered">
          <PortfolioExternalLink url="https://ajarana.github.io/block-aid/">
            <img
              className="heroImage"
              src={blockAid1x}
              alt="Screenshot of a memory game."
              srcSet={`${blockAid1x}, ${blockAid2x} 2x, ${blockAid4x} 4x`}
            />
          </PortfolioExternalLink>
        </section>

        <section className="mainContainer blogContainer">
          <h1>Building an HTML5 Canvas Game</h1>
          <p>
            I built{" "}
            <PortfolioExternalLink url="https://ajarana.github.io/block-aid/">
              this game
            </PortfolioExternalLink>{" "}
            game using vanilla JavaScript as my main tool. Below I elaborate on
            the things I learned about both JS and responsive design.
          </p>

          <h2>Responsive Design</h2>
          <p>
            If you're building a web game these days, it should be responsive .
            Mobile usage is only going to increase as more users get access to
            powerful handheld devices with their ever-increasing capabilities.
          </p>
          <p>
            Unfortunately, I didn't begin by building this game with a
            mobile-first approach, and it made development hell later on down
            the road. Designing a game that fits on large viewports is very
            simple; the more screen real estate, the less you have to worry
            about fitting in all of your necessary elements.
          </p>
          <p>
            But when you're trying to make the main content fit on a screen
            whose limiting dimension is, for example, 320 logical pixels, then
            it's a whole other story. Once I had finished the large viewport
            version of my game, the code didn't transfer so gracefully over to
            smaller viewports. Worse yet, I was using an{" "}
            <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
              HTML5 canvas
            </PortfolioExternalLink>{" "}
            element, which doesn't have a whole lot written about it when it
            comes to responsive design.
          </p>
          <p>
            <PortfolioInternalLink
              navLinkProps={{
                to: "/blog/development-responsive-canvas",
              }}
            >
              This article
            </PortfolioInternalLink>{" "}
            I wrote is a very solid start in order to develop a fully responsive
            canvas element using pure JavaScript, HTML5, and CSS3.
          </p>
          <h2>The JS</h2>
          <p>
            I certainly learned a lot from{" "}
            <PortfolioExternalLink
              url={this.repoUrl + "/blob/master/js/agame.js"}
            >
              the code
            </PortfolioExternalLink>{" "}
            I wrote. To be frank, it's inelegant, and I could do much better if
            I had the time to re-write it today. There's way too much use of
            recursive functions, global variables, and for loops with the
            plethora of better options currently available these days.
          </p>
          <p>
            Attempting to decipher every huge chunk of code that makes my game
            wouldn't be as fruitful as describing what I accomplished:
          </p>
          <ul>
            <li>
              <strong>
                An original method for making a responsive canvas.
              </strong>{" "}
              I went through a whole lot of different ways in order to
              accomplish my goal, but I learned why things worked the way they
              did.
            </li>
            <li>
              <strong>
                Quick responsiveness for user selection on tablet and mobile
                devices.
              </strong>{" "}
              The default way mobile browsers take into account user selection
              is through the{" "}
              <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/Events/click">
                click event
              </PortfolioExternalLink>
              . My game responds to the user's{" "}
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/js/agame.js#L482-L485"}
              >
                first contact with a touchscreen
              </PortfolioExternalLink>{" "}
              using{" "}
              <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/Events/touchstart">
                touchstart
              </PortfolioExternalLink>
              . Whether the user is on any device with or without touchscreen
              functionality, the game is immediately responsive.
            </li>
            <li>
              <strong>
                Figuring out an algorithm for detecting adjacency.
              </strong>{" "}
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/js/agame.js#L360-L383"}
              >
                Green blocks are aware of other green blocks around them
              </PortfolioExternalLink>
              ; the same is true for blue blocks.
            </li>
            <li>
              <strong>Preventing easy-to-memorize patterns.</strong>{" "}
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/js/agame.js#L100-L143"}
              >
                This
              </PortfolioExternalLink>{" "}
              prevents easy patterns such as 2x2 squares in the game consisting
              of blocks of the same color.
            </li>
            <li>
              <strong>Basic design considerations.</strong> This includes a{" "}
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/js/agame.js#L626-L644"}
              >
                point system
              </PortfolioExternalLink>
              ,{" "}
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/js/agame.js#L528-L566"}
              >
                checking to see if the user selected the correct block
              </PortfolioExternalLink>
              , and a{" "}
              <PortfolioExternalLink
                url={this.repoUrl + "/blob/master/js/agame.js#L750-L768"}
              >
                countdown
              </PortfolioExternalLink>{" "}
              before the game starts.
            </li>
          </ul>
          <h2>Conclusions</h2>
          <p>
            Implementation is the key to learning how things function and work
            together. I'm not proud of my code; I'm proud of what I learned from
            making my code.
          </p>
          <h2>Credits</h2>
          <p>
            <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
              Canvas API
            </PortfolioExternalLink>
          </p>
          <p>
            <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/Events/click">
              Click
            </PortfolioExternalLink>
          </p>
          <p>
            <PortfolioExternalLink url="https://developer.mozilla.org/en-US/docs/Web/Events/touchstart">
              Touchstart
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

export default CanvasGameDevelopment;
