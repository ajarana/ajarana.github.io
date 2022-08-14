import { Project } from "../types/Project";
import blockAid1x from "../assets/projects/block-aid/block-aid-1x.png";
import blockAid2x from "../assets/projects/block-aid/block-aid-2x.png";
import blockAid4x from "../assets/projects/block-aid/block-aid-4x.png";
import mixtin1x from "../assets/projects/mixtin/mixtin-menu-1x.png";
import mixtin2x from "../assets/projects/mixtin/mixtin-menu-2x.png";
import mixtin4x from "../assets/projects/mixtin/mixtin-menu-4x.png";
import newsFeed1x from "../assets/projects/news-feed/news-feed-cropped-1x.png";
import newsFeed2x from "../assets/projects/news-feed/news-feed-cropped-2x.png";
import newsFeed4x from "../assets/projects/news-feed/news-feed-cropped-4x.png";
import { deepFreeze } from "../utils";

export const PROJECTS: Project[] = deepFreeze([
  {
    title: "Block Aid",
    description:
      "An HTML5 canvas game made with vanilla JavaScript and CSS3 via LESS. Maintains pixel-perfect quality even on high DPI screens.",
    asset: {
      src: blockAid1x,
      alt: "Screenshot of a memory game.",
      srcset: `${blockAid1x}, ${blockAid2x} 2x, ${blockAid4x} 4x`,
    },
    blogPath: "/blog/development-canvas-game",
    projectUrl: "https://ajarana.github.io/block-aid",
    codeUrl: "https://github.com/ajarana/block-aid",
    repoName: "block-aid",
  },
  {
    title: "Mixtin",
    description:
      "A responsive website designed and developed using Bootstrap 3 components, HTML5, and CSS3 via LESS.",
    asset: {
      src: mixtin1x,
      alt: "Screenshot of the mobile menu of a Bootstrap website.",
      srcset: `${mixtin1x}, ${mixtin2x} 2x, ${mixtin4x} 4x`,
    },
    blogPath: "/blog/development-bootstrap-3-site",
    projectUrl: "https://ajarana.github.io/mixtin",
    codeUrl: "https://github.com/ajarana/mixtin",
    repoName: "mixtin",
  },
  {
    title: "News Feed",
    description:
      "A tech, gaming, and science news feed designed and developed using React, Redux, HTML5, and CSS3. Data is gathered from an external JSON API using Ajax via the Fetch API.",
    warning:
      "Unfortunately, this API has now only enabled CORS from localhost, so this project is no longer functional.",
    asset: {
      src: newsFeed1x,
      alt: "Screenshot of a news feed made using React and Redux.",
      srcset: `${newsFeed1x}, ${newsFeed2x} 2x, ${newsFeed4x} 4x`,
    },
    blogPath: "/blog/development-reactjs-news-feed",
    codeUrl: "https://github.com/ajarana/news-feed",
    repoName: "news-feed",
  },
]);
