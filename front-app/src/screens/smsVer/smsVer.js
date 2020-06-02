import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import history from '../../history';

class smsVer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      random: '',
      submitting: false,
      verifying: false,
      error: false,
      ver_num: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onNumberInput = this.onNumberInput.bind(this);
  }

  onSubmit() {
    this.setState({ submitting: true });
    if (this.state.random.length < 1) {
      var a = Math.floor(100000 + Math.random() * 900000);
      a = String(a);
      a = a.substring(0, 4);
      console.log(a);
      this.state.random = a;
    }
    console.log(this.state.random)
    console.log(this.state.message);
    this.state.message.body = this.state.random
    
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            message: {
              to: '',
              body: ''
            }
          });

        } else {
          this.setState({
            error: true,
          });
        }
      });
  }
  onVerSummit() {

  }
  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }
  onNumberInput(event) {
    this.state.var_num = event.target.value
  }
  onverclick() {
    console.log(this.state.random)
    if(this.state.var_num === this.state.random) {
      console.log("correct")
    }
    else {
      console.log("incorrect")
    }
  }
  displayVerify() {
    if (this.state.submitting) {
      return (
        <div>
          <div>
            <input
              value={this.state.var_num}
              onChange={this.onNumberInput}
            />
          </div>
          <button onClick ={() => this.onverclick()} >
            <strong>번호 인증</strong>
          </button>
        </div>


      )
    }
    else return <div></div>
  }
  render() {


    return (
      <div>
        <h1>메시지를 전송해보자.</h1>
        <div>
          <label htmlFor="to"><strong>보낼 전화번호:</strong></label>
          <input
            type="tel"
            name="to"
            id="to"
            value={this.state.message.to}
            onChange={this.onHandleChange}
          />
        </div>
        <button onClick={() => this.onSubmit()}>
          <strong>전송 </strong>
        </button>
        <div>
          {this.displayVerify()}
        </div>

      </div>

    );
  }
}

export default smsVer;