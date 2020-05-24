import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PersonIcon from "@material-ui/icons/Person";
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import history from "../../history";
const cx = classNames.bind(styles)


export default function Navigation(props) {

    return (
        <div>
            <React.Fragment>
              <div className={cx('custom-nav')}>
                <div className={cx('nav-icon-box')}>
                  <ChevronLeftIcon onClick={history.goBack}/>
                </div>
                <p className={cx('nav-title')}>행복 동물 병원 후기</p>
                <div className={cx('nav-icon-box')}>
                  <PersonIcon/>
                </div>
              </div>
            </React.Fragment>
            <main>
                {props.children}
            </main>
        </div>
    );
}
