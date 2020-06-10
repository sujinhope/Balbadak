import React, { Component } from "react";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import history from "../../history";

const cx = classNames.bind(styles)

class EmptyList extends Component {
  componentDidMount() {
  
  }
  constructor(props) {
    super(props);
    
  }
 
  render() {
    return (
      <>
        <div className = {cx('container')}>
        <img
                className = {cx('cogi')} 
                src={require('../../assets/cogi2.png')}/>  
          <p className = {cx('message')}>찾으시는 검색결과가 없대오ㅠㅠ</p>
        </div>
      </>
    );
  }
}



export default EmptyList;
