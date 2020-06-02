/*global kakao*/
import React, { Component } from "react";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import firebase from 'react-native-firebase';
const cx = classNames.bind(styles)

class SignUp extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);
        this.state = {
            phone: '',

        };
        this.updatePhone = this.updatePhone.bind(this);
    }
    updatePhone(event) {
        this.setState({ phone: event.target.value })
    }

    correct_id(e) {
        if (e) return <div> </div>
        else {
            return <div> 잘못된 정보입니다. </div>
        }
    }
    handleSummit() {
        //login
    }   
    render() {
        return (
            <div className={cx('container')}>
                <div className={cx('category')}><p>Sign In</p></div>

                <div className={cx('basic-box')}>
                    <p>핸드폰번호</p>
                    <input type="text" className={cx('input-box')} placeholder="Your Id.." onChange={this.updateId}></input>
                    <div className={cx('border-button')} onClick={() => this.handleSummit()}>
                        <p>Send</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default SignUp ;


