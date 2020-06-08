import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import history from '../../history';
import firebase from '../../apis/firebase';
import { connect } from 'react-redux'
import { user } from '../../actions';
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
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
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onNumberInput = this.onNumberInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = () => {
    console.log('smsVer this.state.message.to', this.state.message.to)
    this.setState({ submitting: true });
    var number = '+82' + this.state.message.to.substr(1, 10);
    // var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

    console.log(number)
    // firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
    // .then(function (e) {
      var code = prompt('Enter the otp', '');
      if (code === null) return;
      if (code === '123'){
        // e.confirm(code).then(function (result) {
        // function => () {
          // console.log('smsVer result.user', result.user);
          // document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";
          console.log('smsVer true로 바꿔보자!')
          var sms = {
            usms: true
          }
          user.updateUser(sms)
          // this.movetoMain();
        
        // }).catch(function (error) {
          // console.error(error);
        // });
      }

    // })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }
  movetoMain() {
    history.push('/selectOption');
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
  async onverclick() {

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
          <button onClick={() => this.onverclick()} >
            <strong>번호 인증</strong>
          </button>
        </div>


      )
    }
    else return <div></div>
  }
  render() {
    console.log('smsVer this.props', this.props)
    return (
      <div>
        <div className={cx('row')}>
          <div className={cx('small-col')}>
          </div>
          <div className={cx('spacer')}></div>
        </div>
        <div className={cx('category')}>
          <p> 번호 인증 </p>
        </div>

        <div className={cx('basic-box')}>
          <label htmlFor="to"><strong>보낼 전화번호:</strong></label>
          <input
            className={cx('input-box')}
            type="tel"
            name="to"
            id="to"
            placeholder='번호만 입력해주세요'
            value={this.state.message.to}
            onChange={this.onHandleChange}
          />
          <div id="recaptcha"></div>
          <button className={cx('border-button')} onClick={this.onSubmit}> 인증번호 전송 </button>
        </div>

        {this.displayVerify()}
      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (usms) => dispatch(user.updateUser(usms)),
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(smsVer)
