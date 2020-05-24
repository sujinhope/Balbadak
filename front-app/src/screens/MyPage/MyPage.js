import React from "react";

import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import FilledInput from '@material-ui/core/FilledInput';
import imgA from "../../assets/imgA.png";
const cx = classNames.bind(styles)

const petData = [
    {
        a_code: 1,
        a_type: "dog",
        a_species: "dog",
        a_kig: 10,
        a_year: 5,
        image: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        a_code: 2,
        a_type: "dog",
        a_species: "cat",
        a_kig: 9,
        a_year: 5,
    },

]

class MyPage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.state)
    }



    render() {

        return (
            <div>
                <div className={cx('row')}>
                    <div className={cx('small-col')}>
                    </div>
                    <div className={cx('spacer')}></div>

                </div>
                <div className={cx('category')}>
                    <p>나의 팻 </p>
                </div>
                <div className={cx('container-box')}>
                    <div className={cx('photo-box')}>
                        <img src={imgA} className={cx('photo')}></img>
                    </div>
                    <div className={cx('column-box')}>
                        <div className={cx('vet-name')}> sdfasdfa </div>
                    </div>
                </div>
                <div className={cx('category')}>
                    <p>내가 작성한 리뷰</p>
                </div>

                <div className={cx('category')}>
                    <p>내가 찜한 병원</p>
                </div>
            </div>
        );
    }
}



export default MyPage;
