import React, { Component } from 'react';
import ReactModalLogin from 'react-modal-login';
import {facebookConfig, googleConfig} from "../socialconfig";


class LoginForm extends Component {
  render() {
    return (
      <div>  
      <form id="contact" style={{backgroundColor: 'white'}} onSubmit={this.handleSubmit}>
        <input id="email" name="email" type="text" placeholder="Email" required onChange={event => this.handleChange(event)}/>
        <input id="password" name="password" type="text" placeholder="Password" required onChange={event => this.handleChange(event)} />
        <button name="submit" type="submit" id="contact-submit">SUBMIT</button>
      </form>
    </div>
    );
  }
}
 
export default class SignUp extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      showModal: false,
      loading: false,
      error: null
    };
 
  }
 
  openModal() {
    this.setState({
      showModal: true,
    });
  }
 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
  
  onLoginSuccess(method, response) {
    console.log('logged successfully with ' + method);
  }
 
  onLoginFail(method, response) {
    console.log('logging failed with ' + method);
    this.setState({
      error: response
    })
  }
 
  startLoading() {
    this.setState({
      loading: true
    })
  }
 
  finishLoading() {
    this.setState({
      loading: false
    })
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
 
 
  render() {
 
    return (
      <div>
 
        <button onClick={() => this.openModal()}>
          SIGN UP
        </button>
 
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
            facebook: {
              config: facebookConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Facebook"
            },
            google: {
              config: googleConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google"
            }
          }}
          aboveSocialsLoginContainer = {<LoginForm/>}
          aboveSocialsRegisterContainer = {<LoginForm/>}
        />
      </div>
    )
  }
}
