import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((response) => {
        this.props.addCard(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeHandler(event){
    this.setState({userName: event.target.value});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.userName} onChange={this.changeHandler} placeholder='Github user name....'/>
        <button type='submit'>submit</button>
      </form>
    );
  }
}

export default Form;