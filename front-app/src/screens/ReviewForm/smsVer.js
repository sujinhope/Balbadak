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
      message: '',
      random: '',
      submitting: false,
      verifying: false,
      error: false,
      ver_num: '',
    };
  }
  async onSubmit () {
    console.log('smsVer this.state.message', this.state.message)
    this.setState({ submitting: true });
    const number = '+82' + this.state.message.substr(1, 10);
    const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    const res = await firebase.auth().signInWithPhoneNumber(number, recaptcha)
    const code = prompt('Enter the otp', '')
    const final = res.confirm(code).catch(() => {alert('예상치 못한 에러가 발생했습니다. 다시 시도해주세요')})
    if (final) {
      await this.props.updateUser(true)
      await this.props.reviewIng('isSms', false)
    }
  }

  render() {
    return (
      <div className={cx('modal')}>
        <h3 className={cx('modal-header')}>번호 인증하기</h3>
        <div className={cx('search-box')}>
          <input
            className={cx('input-box')}
            type="tel"
            placeholder='번호만 입력해주세요'
            value={this.state.message}
            onChange={(e) => 
              this.setState({message: e.target.value})}
          />
        </div>
        <div className={cx('h-spacer')}></div>
        <div className={cx('modal-body')}>
          <div id="recaptcha"></div>
          <button className={cx('border-button')} onClick={() => this.onSubmit()}> 인증번호 전송 </button>
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    myPage: state.user.myPage,
    isSearching: state.status.isSearching,
    isSms: state.status.isSms,
    isReciepting: state.status.isReciepting,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (body) => dispatch(user.updateUser(body)),
    reviewIng : (now, code) => dispatch(user.reviewIng(now, code))
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(smsVer)
