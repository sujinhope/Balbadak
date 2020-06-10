import React, { Component } from 'react';
import firebase from '../../apis/firebase';
import { connect } from 'react-redux'
import { user } from '../../actions';
import history from "../../history";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
class smsVer extends Component {
  constructor(props) {
    super(props);
    this.recaptcha = React.createRef()
    this.state = {
      message: '',
      verifying: false
    };
  }

  async onSubmit () {
    await this.setState({verifying: true})
    const number = '+82' + this.state.message.substr(1, 10);
    const recaptcha = this.recaptcha.current
    const isrecaptcha = new firebase.auth.RecaptchaVerifier(recaptcha);
    const res = await firebase.auth().signInWithPhoneNumber(number, isrecaptcha)
    const code = prompt('문자로 전달받은 코드를 입력해주세요', '')
    if (code) {
      const final = res.confirm(code)
      if (final) {
        await this.props.updateUser(true)
        await this.props.reviewIng('isSms', false)
      }
    } else {
      await window.alert('입력 과정에서 문제가 발생했습니다. 다시 시도해주세요.')
      history.push('/selectOption')
    }
  } 

  render() {
    const phone = this.state.verifying === false ?
      <img src={require('../../assets/phone.png')} alt='phone-img'/> : null

    return (

      <div className={cx('modal')}>
        <h3 className={cx('modal-header')}>번호 인증하기</h3>
        <div className={cx('h-spacer')}></div>
        <div className={cx('auth-body')}>
          {phone}
          <input
              className={cx('input-box')}
              type="tel"
              placeholder='핸드폰 번호를 입력해주세요(- 제외)'
              value={this.state.message}
              onChange={(e) => this.setState({message: e.target.value})}
            />
          <div ref={this.recaptcha}></div>
          <div className={cx('h-spacer')}></div>
          <div className={cx('border-button')} onClick={() => this.onSubmit()}> 인증번호 전송 </div>
          <div className={cx('explain')}><p>핸드폰 번호 확인은 불필요한 리뷰 중복을 방지하기 위한 목적으로 본 목적 이외에는 핸드폰 번호를 사용하지 않습니다.</p></div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    userUpdated: state.userUpdated,
    myPage: state.user.myPage,
    isSearching: state.status.isSearching,
    isSms: state.status.isSms,
    isReciepting: state.status.isReciepting,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (body) => dispatch(user.updateUser(body)),
    reviewIng : (now, code) => dispatch(user.reviewIng(now, code))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(smsVer)
