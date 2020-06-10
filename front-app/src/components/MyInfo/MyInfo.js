import React, { Component } from "react";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import history from "../../history";
import { connect } from "react-redux";
import { user } from '../../actions';
const cx = classNames.bind(styles)

class MyInfo extends Component {
    componentDidMount() {
        // this.state.user = user.getMyPage()
    }

    constructor(props) {
        super(props);
        this.state = {
            c_log: 1,
            username: props.username,
            password: props.password,
            passwordC: props.passwordC,
            user: props.user,                                                                                                                                                                                                                                                                                                                                                                                                       
        };
        this.updateId = this.updateId.bind(this);
        this.updatePw = this.updatePw.bind(this);
        this.updatePwc = this.updatePwc.bind(this);
    }
    updateId(event) {
        this.setState({ username: event.target.value })
    }
    updatePw(event) {
        this.setState({ password: event.target.value })
    }
    updatePwc(event) {
        this.setState({ password: event.target.value })
    }
    correct_id(e) {
        if (e) return <div> </div>
        else {
            return <div> 잘못된 정보입니다. </div>
        }
    }
    async handleSummit() {
        await this.props.register(this.state.username, this.state.password)
        window.alert('수정이 완료되었다냥')
        // history.push('/')
    }
    render() {
        console.log(this.props)
        if(!this.props.mypage) {
            user.getMyPage();
        }
        console.log('PROPS: ', this.state)
        console.log('props: ', this.state.user)
        return (
            <div className={cx('container')}>
                <div className={cx('basic-box')}>
                    <p>아이디</p>
                    <input type="text" className={cx('input-box')} placeholder={this.state.username} onChange={this.updateId}></input>
                    <p>비밀번호</p>
                    <input type="text" className={cx('input-box')} placeholder={this.state.password} onChange={this.updatePw}></input>
                    <p>비밀번호 확인</p>
                    <input type="text" className={cx('input-box')} placeholder={this.state.passwordC} onChange={this.updatePwc}></input>
                    <div className={cx('border-button')} onClick={() => this.handleSummit()}>
                        <p>수정했다냥</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    // console.log("user");
    // console.log(state.user);
    return {
        mypage: state.user.mypage
        // user: this.state.user
    };
};

const mapStateToDispatch = dispatch => {
    return {
        register: (id, pwd) => {dispatch(user.register(id, pwd))},
        logOut: () => {dispatch(user.logOut())},
        getMyPage: (user) => {dispatch(user.getMyPage())}
    }
}

export default (connect(mapStatetoProps, mapStateToDispatch)(MyInfo));