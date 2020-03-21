import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      // Check if auth exist
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  // function mapStateToProps({ auth }) {
  //   return { auth: auth.authenticated };
  // }

//   return connect(
//     mapStateToProps,
//     {},
//   )(ComposedComponent);
// };


  return ComposedComponent;
};
