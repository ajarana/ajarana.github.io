export interface Project {
  asset: {
    src: string;
    alt: string;
    srcset: string;
  };
  blogPath: string;
  description: string;
  title: string;
  codeUrl: string;
  projectUrl?: string;
  warning?: string;
  repoName: string;
}
