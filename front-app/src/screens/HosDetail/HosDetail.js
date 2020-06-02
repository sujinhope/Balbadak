import React, { Component } from "react";

import styles from './mystyle.module.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Button from '@material-ui/core/Button'


//썸내일은... 리사이징...
const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];
const VetData = [
    {
        Name: '홍길동',
        image: 'https://picsum.photos/id/1019/250/150/',
        hompage: "https://balbbakdoc.com",
        phone: '02-1234-1234'
    }
]
class HosDetail extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);

    }

    handleChange() {

    }
    setHos() {
        return (
            <div>
                <h1>행복 동물 병원</h1>
                <span>{VetData[0].Name}</span>
            </div>
        );

    }
    render() {
        return (
            <>
                <div>
                    <ImageGallery
                        showNav={false}
                        showBullets={false}
                        showPlayButton={false}
                        disableArrowKeys={true}
                        showFullscreenButton={false}
                        items={images}
                    />
                </div>
                <div>
                    {this.setHos()}
                </div>
                <div className={styles.button__container}>
                    <Button variant="outlined" size="large" color="primary" fullWidth={true}>
                        리뷰 작성하기
                    </Button>
                </div>
            </>
        );
    }
}



export default HosDetail;


