import React, { Component } from 'react';
import axios from 'axios';

function validate(domain, range) {
  return {
    domain: domain.length === 0,
    range: range.length === 0
  };
}

class AddDictionaryInput extends Component {
  constructor(props){
    super(props);
    this.state = { 
      domain: '', 
      range: '', 
      isShowing: false
    };
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }  
   
  canBeSubmitted() {
    const errors = validate(this.state.domain, this.state.range);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  
  toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleFormSubmit = (event) => {
    event.preventDefault();
     
    const { domain, range } = this.state;
    const { dictionaryID } = this.props; 
    
    axios.post(`http://localhost:5000/api/inputs`, { domain, range, dictionaryID })
      .then( () => {
        // after form submit, GET dictionary once more to display the updated input list 
        this.setState({
          domain: '', 
          range: '',
        });
        this.props.getTheDictionary();
      })
      .catch( error => {
        console.log(error.response);
      });
  }

  render(){
    const errors = validate(this.state.domain, this.state.range);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return(
      <div>
        <button onClick={this.toggleForm}> Add Input </button>
        {!this.state.isShowing ? null :(     
          <div>
            <form name="myform">
              <input 
                className={errors.domain ? "error" : ""}
                type="text" 
                placeholder='Domain'
                name="domain" 
                value={this.state.domain}
                onChange={ (e) => this.handleChange(e)}
                required
              />
              <input 
                className={errors.range ? "error" : ""}
                name="range" 
                placeholder='Range'
                value={this.state.range}
                onChange={ (e) => this.handleChange(e)} 
                required
              />
              <button disabled={isDisabled} onClick={this.handleFormSubmit}>Add new input</button>
            </form>
          </div>)
        }
      </div>
    );
  };
}

export default AddDictionaryInput;