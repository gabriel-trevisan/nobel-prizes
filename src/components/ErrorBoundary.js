import React from 'react';

//import { logErrorToMyService } from "../utils";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      
      return <h3>Something went wrong.</h3>;
    }
    return this.props.children;
  }
}