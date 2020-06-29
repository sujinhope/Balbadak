import React from "react";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import history from "../../history";
const cx = classNames.bind(styles)

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={cx('container')}>
          <div className={cx('basic-box')}>
            <img
              className={cx('angry-cat')}
              src={require('../../assets/catimg.png')}
              alt='angry-cat'
            />
            <p className={cx('error-code')}>404</p>
            <p>에러 페이지다냥</p>
            <p
              onClick={() => history.push('/Main')}
            ><b className={cx('main')}>메인</b>으로 돌아가라냥</p>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;