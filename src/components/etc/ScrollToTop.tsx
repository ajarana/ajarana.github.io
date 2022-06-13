import { Component } from 'react'
import { RouteComponentProps, withRouter } from "react-router-dom"

interface ScrollToTopProps extends RouteComponentProps {
  children: any;
}

class ScrollToTop extends Component<ScrollToTopProps> {
  componentDidUpdate(prevProps: ScrollToTopProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);