import React, { Component } from 'react';
import axios from 'axios';

class EditDictionaryInput extends Component {
  constructor(props){
    super(props);
    this.state = { 
      domain: '', 
      range: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { domain, range } = this.state;
    const { _id } = this.props.theInput;

    axios.put(`http://localhost:5000/api/inputs/${_id}`, { domain, range })
    .then( () => {
      this.props.getTheDictionary();
      this.setState({domain: '', range: ''});
    })
    .catch( error => console.log(error) )
  }

  render(){
    return (
      <div class="edit-form">
        <form>
          <input
            type="text"
            placeholder='Domain'
            name="domain"
            value={this.state.domain}
            onChange={ (e) => this.handleChange(e)}
            required
          />

          <input
            name="range"
            placeholder='Range'
            value={this.state.range}
            onChange={ (e) => this.handleChange(e)}
            required
          />
          <button onClick={this.handleFormSubmit}>Edit input</button>
        </form>
      </div>
    );
  };
}

export default EditDictionaryInput;
