
import React, { Component } from 'react';
import AddDictionary from './AddDictionary';
import Dictionary from './Dictionary';
import axios from 'axios';
import * as actions from './../../redux/actions/actions';

import { connect } from 'react-redux';

class DictionaryList extends Component {
  getAllDictionaries = () => {
    axios.get(`http://localhost:5000/api/dictionaries`).then(response => {
      console.log('response.data', response.data);
      this.props.addAllDictionariess(response.data);
    });
  };

  componentDidMount() {
    this.getAllDictionaries();
  }

  render() {
    const { dictionaries } = this.props;

    return (
      <div>
        <AddDictionary updateDictionaryList={this.getAllDictionaris} />
        <div>
          {dictionaries &&
            dictionaries.map(dictionary => {
              return <Dictionary dictionaryData={dictionary} key={dictionary._id} />;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dictionaries: state.dictionaries,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAllDictionaries: allDictionaries =>
      dispatch(actions.addAllDictionaris(allDictionaries)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DictionaryList);