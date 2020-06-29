import React, { Component } from "react";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import history from '../../history';

const cx = classNames.bind(styles)

class EmptyList extends Component {
  constructor(props) {
    super(props)
    let mess
    if (props.mess === 'empty') {
      mess = <p className={cx('message')}>'찾으시는 검색결과가 없대오ㅠㅠ'</p>
    } else {
      mess = 
      <>
      <p className={cx('message')}>회원만 볼 수 있대오 로그인해볼까오</p>
      <div
        className={cx('border-button')}
        onClick={()=> history.push('/SignIn')}
      > <p>로그인하기</p> </div>
      </>
    }
    this.state = {
      mess: mess
    }
  }
  render() {
    return (
      <>
        <div className={cx('container')}>
          <img
            className={cx('cogi')}
            src={require('../../assets/cogi2.png')}
            alt='emptylist'
            />
          {this.state.mess}
        </div>
      </>
    );
  }
}



export default EmptyList;
