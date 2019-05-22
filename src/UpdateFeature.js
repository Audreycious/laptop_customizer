import React, {Component} from 'react';


class UpdateFeature extends Component {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };