import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import * as actions from './../../redux/actions/actions';

class AddDictionary extends Component {
  state = { title: ''};

  handleFormSubmit = event => {
    event.preventDefault();
    const { title } = this.state;

    axios
      .post(`http://localhost:5000/api/dictionaries`, { title })
      .then(() => {
        this.props.addDictionary({ title });

        this.setState(
          { title: ''},
          this.props.updateDictionaryList(),
        );
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDictionary: dictionary => dispatch(actions.addDictionary(dictionary)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AddDictionary);
