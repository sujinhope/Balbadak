import React, { Component } from "react";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import history from "../../history";
// import cat from '../../assets/angry_cat'

const cx = classNames.bind(styles)

class Error extends Component {
  componentDidMount() {
  
  }
  constructor(props) {
    super(props);
    
  }
 
  render() {
    return (
      <div className = {cx('container')}>               
        <div className = {cx('basic-box')}>
            <img
                className = {cx('angry-cat')} 
                src={require('../../assets/catimg.png')}/>      
            <p className = {cx('error-code')}>404</p>
            <p>에러 페이지다냥</p>
            <p
                  onClick={() => history.push('/Main')} 
                  ><b className = {cx('main')}>메인</b>으로 돌아가라냥</p>
        </div>
    </div>
    );
  }
}



export default Error;
