/*global kakao*/
import React, { Component } from "react";
import styles from './mystyle.module.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Button from '@material-ui/core/Button';
import classNames from 'classnames/bind';
import BigMap from '../../components/BigMap/BigMap';
import HosInfoCard from '../../components/HosInfoCard/HosInfoCard'
import LittleMap from "../../components/LittleMap/LittleMap";
import HosGrades from '../../components/HosGrades/HosGrades';
//썸내일은... 리사이징...

const widthLength = 100;
const hosData = [
    {
        h_code: 1,
        h_name: "행복 동물 병원",
        h_location: "서울시 역삼동 123번지",
        h_city: "서울시",
        h_gu: "강남구",
        h_station: "역삼역",
        h_tel: "02-123-1234",
        h_holidaytreatment: true,
        h_open: true,
        h_monday: "10:00 ~ 18:00",
        h_tuesday: "10:00 ~ 18:00",
        h_wednesday: "10:00 ~ 18:00",
        h_thursday: "10:00 ~ 18:00",
        h_friday: "10:00 ~ 18:00",
        h_saturday: "10:00 ~ 18:00",
        h_sunday: "10:00 ~ 18:00",
        h_website: "http://edu.ssafy.com",
        h_dong: "역삼동",
        h_address: "서울시 역삼동 123번지",
        h_image: "https://picsum.photos/id/1018/250/150/"
    },

]


const cx = classNames.bind(styles)
class HosMapRes extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className={cx('container')}>

                <div className={cx('time-box')}>
                    <BigMap />
                </div>
                <HosInfoCard
                    hospitalData={hosData[0]}
                    widthLength={widthLength}
                />

            </div>
        );
    }
}



export default HosMapRes;


