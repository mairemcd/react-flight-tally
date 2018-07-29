import React, { Component } from 'react';
import '../Contact.css';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    const { name, email, message } = this.state;
    const data = new FormData(event.target);
    event.preventDefault();


    fetch('/auth/comments', {
      method: 'POST',
      body: data,
    });
}

  render () {
    return (
      <div className="container" id="contact-form" style={{margin:'auto'}}>  
      <form id="contact" onSubmit={this.handleSubmit}>
        <h3>QUICK CONTACT</h3>
        <h4>Contact us today!</h4>
        <input id="name" name="name" type="text" placeholder="Name" required onChange={event => this.handleChange(event)}/>
        <input id="email" name="email" type="email" placeholder="Email" required  onChange={event => this.handleChange(event)}/>
        <input id="message" name="message" type="text" placeholder="Message" required onChange={event => this.handleChange(event)} />
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </form>
    </div>
    );
  }
}