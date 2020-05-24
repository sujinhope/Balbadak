/*global kakao*/

import React, { Component } from 'react';
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

class LittleMap extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e78c23fbd9656d2db2f5df69fb693cfb&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(523951.25, 1085073.75)
                });
            });
        };
    }

    render() {
        return (
            <div className={cx('map')} id="map"></div>
        );
    }
}

export default LittleMap;