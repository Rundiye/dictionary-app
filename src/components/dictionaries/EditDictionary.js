import React, { Component } from 'react';
import axios from 'axios';

class EditDictionary extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.theDictionary.title
    };
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const { _id } = this.props.theDictionary;
  
    axios.put(
      `http://localhost:5000/api/dictionaries/${_id}`, { title }
    )
    .then( () => {
      this.props.getTheDictionary();	
      this.props.history.push('/dictionaries');    
    })
    .catch( (err) => console.log(err) )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render(){
    return (
      <div class="edit-form">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text"
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange}/>
          <input type="submit" value="Edit Dictionary" />
        </form>
      </div>
    );
  };
}

export default EditDictionary;