import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import EditDictionary from './EditDictionary';
import AddDictionaryInput from './../inputs/AddDictionaryInput';
import EditDictionaryInput from './../inputs/EditDictionaryInput';

class DictionaryDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '', 
      inputs: [],
    };
  }
  
  renderEditForm = () => {
    /* Check if `renderEditForm` is triggered before the state gets populated. 
     If the state is empty nothing can be passed to `EditDictionary` as the
    value in `theDictionary` prop to populate the form  */
    if (!this.state.title) return <p>LOADING...</p>; 
    else {
      return (
        <EditDictionary 
          theDictionary={this.state}
          getTheDictionary={this.getSingleDictionary} 
          {...this.props} 
        /> 
       // {...this.props}  so that we can use 'this.props.history' in EditProject  
      );      
    };
  }

  renderAddInputForm = () => {
    return (
      <AddDictionaryInput 
        dictionaryID={this.state._id} 
        getTheDictionary={this.getSingleDictionary} 
      />
      // pass the dictionaryID and method `getSingleDictionary()` to AddDictionaryInput component
    );  
  }

  renderEditInputForm = () => {
    return (
      <EditDictionaryInput 
        inputID={this.state._id} 
        getTheInput={this.getSingleInput} 
      />
    );  
  }

  deleteDictionary = () => {
    const { id } = this.props.match.params;
    
    axios.delete(`http://localhost:5000/api/dictionaries/${id}`)
    	.then( () => this.props.history.push('/dictionaries') )
    	.catch( (err) => console.log(err));
  }

  deleteInput = (id) => {
    axios.delete(`http://localhost:5000/api/inputs/${id}`)
      .then( () => this.getSingleDictionary())
      .catch( (err) => console.log(err));
  }
  

  componentDidMount() {
    this.getSingleDictionary();
  }

  getSingleDictionary = () => {
    const { id } = this.props.match.params;
  
    axios.get(`http://localhost:5000/api/dictionaries/${id}`)
      .then( (apiResponse) =>{
        const theDictionary = apiResponse.data;
        this.setState(theDictionary);
      })
      .catch((err) => console.log(err));
  }

  getSingleInput = (_id) => {
    axios.get(`http://localhost:5000/api/inputs/${_id}`)
      .then( (apiResponse) =>{
        const theInput = apiResponse.data;
        this.setState(theInput);
      })
      .catch((err) => console.log(err));
  }

  
  render() {
    return (
      <div>
        <div class="details-div">
          <div class="goback-button">
            <Link to={'/dictionaries'}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            { this.renderEditForm() }  
            <button onClick={() => this.deleteDictionary()}>
              Delete Dictionary
            </button>
          </div>

          { this.renderAddInputForm() }
          </div>
        <div>
          { 
            (this.state.inputs.length === 0) ?
            <h2>NO INFO TO DISPLAY</h2> :
            this.state.inputs.map((input) => {
              const { domain, range, _id } = input;
              return(
                <div class="input-box">
                  <p>{ domain } - { input.range }</p>
                  <button onClick={() => this.deleteInput(_id)}>
                    Delete
                  </button>
                  <button onClick={() => this.renderEditInputForm(_id)}>
                    Edit
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}


export default DictionaryDetails;