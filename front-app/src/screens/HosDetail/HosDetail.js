/*global kakao*/
import React, { Component } from "react";
import styles from './mystyle.module.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Button from '@material-ui/core/Button';
import classNames from 'classnames/bind';
import LittleMap from "../../components/LittleMap/LittleMap";
import HosGrades from '../../components/HosGrades/HosGrades';
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
const reviewData = {
    r_no: 0,
    u_id: 'aestas',
    r_nickname: '익명의 코끼리',
    r_photo: 'https://lh3.googleusercontent.com/proxy/QYikpOM5d8B4H0_YTn1sfYzEQcGYjKwUtseoQXBpXqhjh3bsn04ZdeNL533bsCyivn3OzERLxq2zBPl5l9rt_UU_B6PlMBkQHef624cQ8DI0TjJkozUb8Qyhs8kYkTGclUI-uGs83FjcgEo,http://www.busan.com/nas/wcms/wcms_data/photos/2020/02/12/2020021209194665170_l.jpg,https://modo-phinf.pstatic.net/20160629_37/1467141681611RHSrJ_JPEG/mosaazDVas.jpeg?type=w1100',
    r_content: '2010년부터 다니던 병원입니다. 고양이에게 중성화 수술은 꼭 필요한 것 같아요. 계속 힘들어해서 몇 차례 검진 받고 선생님과 상담후에 중성화 수술을 하게되었습니다. 선생님 정말 친절하시고요 여기 애견용 풀도 있는 것 같아서 상처 부위 치료되면 또 오려고요!',
    r_reciept: true,
    r_treatmentdata: '2020-05-10',
    r_date: '2020-05-10',
    tags: ['중성화수술이다옹', "고양이", "15kg", '정기적', "친절", "풀장", "감사"],
    r_overtreatement: 1,
    r_kindness: 4,
    r_result: 4,
    r_clean: 4,
    r_report: 0,
    r_deleted: false,
    Like: [{ u_id: 1 }, { u_id: 2 }, { u_id: 3 }],
    careinfo: [
        {
            ci_no: 2,
            h_code: 1,
            ci_vet: '고양이',
            ci_price: 25000,
            CareList: {
                c_code: 3,
                c_name: '중성화수술',
                c_category: '수술'
            },
            r_no: 0
        },
        {
            ci_no: 3,
            h_code: 1,
            ci_vet: '고양이',
            ci_price: 30000,
            CareList: {
                c_code: 4,
                c_name: '붕대',
                c_category: '시술'
            },
            r_no: 0
        },
        {
            ci_no: 4,
            h_code: 1,
            ci_vet: '고양이',
            ci_price: 50000,
            CareList: {
                c_code: 2,
                c_name: '마취약',
                c_category: '주사'
            },
            r_no: 0
        }
    ],
    h_code: 1
}

const cx = classNames.bind(styles)
class HosDetail extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);
        this.state = {
            grade: [
                {
                    name: '적절한 치료',
                    score: reviewData.r_overtreatement
                },
                {
                    name: '친절함',
                    score: reviewData.r_kindness
                },
                {
                    name: '치료결과',
                    score: reviewData.r_result
                },
                {
                    name: '청결',
                    score: reviewData.r_clean
                }
            ]
        };
    }

    handleChange() {

    }
    setHos() {
        return (
            <>
                <div className={cx('hos-container')}>
                    <div className={cx('hos-box')}>
                        <br />
                        <div className={cx('hos-name')}>행복 동물 병원</div>
                        <span className={cx('vet-name')}>{VetData[0].Name} <span className={cx('pipe')}>|</span> </span>
                        <span className={cx('vet-name')}>{hosData[0].h_location}</span>
                    </div>
                    <div className={cx('hos-box')}>
                        <br />

                    </div>

                </div>

                <div className={cx('home-container')} >
                    <button className={cx('homepage')} type="button"> 병원 홈페이지 </button>
                    <button className={cx('phone')} type="button"> {hosData[0].h_tel} </button>
                </div>

            </>
        );

    }
    setRunningTime() {
        return (
            <div className={cx('column-box')}>
                <p className={cx('day')} >
                    <span> 월  <span className={cx('pipe')}> </span>  </span>
                    <span> {hosData[0].h_monday} </span>
                </p>
                <p className={cx('day')}>
                    <span> 화  <span className={cx('pipe')}>  </span> </span>
                    <span> {hosData[0].h_monday} </span>
                </p>
                <p className={cx('day')}>
                    <span> 수  <span className={cx('pipe')}>  </span> </span>
                    <span> {hosData[0].h_monday} </span>
                </p>
                <p className={cx('day')}>
                    <span> 목   <span className={cx('pipe')}>  </span></span>
                    <span> {hosData[0].h_monday} </span>
                </p>
                <p className={cx('day')}>
                    <span> 금   <span className={cx('pipe')}>  </span></span>
                    <span> {hosData[0].h_monday} </span>
                </p>
                <p className={cx('day')}>
                    <span> 토  <span className={cx('pipe')}>  </span> </span>
                    <span> {hosData[0].h_monday} </span>
                </p>
                <p className={cx('day')}>
                    <span> 일  <span className={cx('pipe')}>  </span> </span>
                    <span> {hosData[0].h_monday} </span>
                </p>
            </div>
        );
    }
    render() {

        return (
            <div className={cx('container')}>
                <div className={cx('basic-box')}>
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
                <div className={cx('time-box')}>
                    <LittleMap />
                    {this.setRunningTime()}
                </div>

                <div>
                    <HosGrades grade={this.state.grade} />
                </div>
                <div className={styles.button__container}>
                    <Button variant="outlined" size="large" color="primary" fullWidth={true}>
                        리뷰 작성하기
                    </Button>
                </div>
            </div>
        );
    }
}



export default HosDetail;


