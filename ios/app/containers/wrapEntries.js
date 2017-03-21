import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveEntries } from '../state/actions/entries';

export default function wrapEntries(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {};
  };

  return connect(mapStateToProps, {
    retrieveEntries
  })(WrapperComponent);
};
