
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from './../../redux/actions/actions';

import AddDictionary from './AddDictionary';
import Dictionary from './Dictionary';

class DictionaryList extends Component {
  getAllDictionaries = () => {
    axios.get(`http://localhost:5000/api/dictionaries`).then(response => {
      console.log('response.data', response.data);
      this.props.addAllDictionaries(response.data);
    });
  }

  componentDidMount() {
    this.getAllDictionaries();
  }

  render() {
    const { dictionaries } = this.props;
    return (
      <div class="dictionary-div">
        <div class="dictionary-form">
          <AddDictionary updateDictionaryList={this.getAllDictionaries} />
        </div>
        <div class="dictionary-list">
          {dictionaries &&
            dictionaries.map(dictionary => {
              return (
                <Dictionary 
                  dictionaryData={dictionary} 
                  key={dictionary._id} 
                />
              );
            })  
          }
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    dictionaries: state.dictionaries,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addAllDictionaries: allDictionaries =>
      dispatch(actions.addAllDictionaries(allDictionaries)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DictionaryList);