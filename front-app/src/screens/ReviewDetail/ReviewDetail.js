import React from "react";
import GradeBox from '../../components/HosGrades/GradeBox'
import ReviewPrice from '../../components/ReviewPrice/ReviewPrice'
import styles from './mystyle.module.scss';
import ThumbIcon from '@material-ui/icons/ThumbUpAlt';
import SportsIcon from '@material-ui/icons/Sports';
import classNames from 'classnames/bind';
import history from '../../history';
const cx = classNames.bind(styles)

class ReviewDetail extends React.Component {


  constructor(props) {
    super(props);
    const reviewData = this.props.location.state.review
    const scorelist = [reviewData.rclean, reviewData.rkindness, reviewData.rresult, reviewData.rprofessionality, reviewData.rovertreatment]
    const scorelabel = ['청결', '친절함', '치료결과', '전문성', '적정한 치료']
    const grade = scorelist.map((g, i) => ({ name: scorelabel[i], score: g }))
    const totalgrade = this.calcTotalScore(scorelist)
    this.state = {
      grade: grade,
      totalgrade: totalgrade,
      editablegrade: false,
    };

  }

  calcTotalScore(scorelist) {
    const totalscore = Math.round(((scorelist.reduce((a, b) => a + b, 0) / scorelist.length) + Number.EPSILON) * 100) / 100
    const totalgrade = [{ name: '평균평점', score: totalscore }]
    return totalgrade
  }
  gotoHosDetail() {
    let localhos = this.props.location.state.review.hospital
    history.push(`/hosDetail`, {localhos})
  }
  render() {
    const photolist = [
      'https://lh3.googleusercontent.com/proxy/YW1gMOzSmQrKI2EiqMom2331SuMdj5Ygup6k61knR1JjzZm7_jW3XNH2qvRnx5sA289cZlALQegqeIEP85TRyooZaFoDqY4XPzELpH1dIdKDS0HnXV0TcJp6-1S8mTVsC392ahWDiVUyo__R-w'
      , 'https://image-notepet.akamaized.net/resize/620x-/seimage/20190423%2F6c5334917de8a264671df20a96ed4a17.jpg'
      , 'https://t1.daumcdn.net/liveboard/holapet/12aa7548ebbb46329878bae893899f50.jpg'
    ]
    const photos = photolist.map(
      p => (
        <img className={cx('photo')} src={p} key={p} alt={p}/>
      )
    )

    const totallike = this.props.location.state.review.rtotalgood
    // const tags = []

    // for (const [index, value] of this.props.location.state.reviewData.tags.entries()) {
    //   console.log('ReviewDetail value',value)
    //   tags.push(<div className={cx('tag')} key={index}>#{value}</div>)
    // }

    return (
      <div className={cx('container')}>
        <div className={cx('tag-box')}>
          <div onClick = {() => this.gotoHosDetail()} >
            #{this.props.location.state.review.hospital.hname}
          </div>

          {/* {tags} */}
        </div>
        <div className={cx('meta-box')}>
          {/* <p>{this.props.location.state.review.rtreatmentdata} 진료</p> */}
          <p>{this.props.location.state.review.rdate.substr(0, 7)} 작성</p>
          방문 목적 : {this.props.location.state.review.rpurpose}
        </div>
        <div className={cx('number')}>
          <div className={cx('icon-box')}>
            <SportsIcon fontSize="small" />
            <p>신고다옹</p>
          </div>
          <div className={cx('icon-box')}>
            <ThumbIcon fontSize="small" />
            <p>좋다옹 {totallike}</p>
          </div>
        </div>
        <div className={cx('h-spacer')}></div>
        <div className={cx('category')}><p>병원상세평가</p></div>
        <GradeBox
          grade={this.state.grade}
          dojang={this.props.location.state.review.rrevisit}
          totalgrade={this.state.totalgrade}
          editable={this.state.editablegrade}
        />
        <div className={cx('h-spacer')}></div>
        <div className={cx('category')}><p>진료 후기 상세</p></div>
        <div className={cx('basic-box')}>
          * 이 리뷰는 예시입니다.
          <p>
            {this.props.location.state.review.rcontent}
          </p>
        </div>
        <div className={cx('h-spacer')}></div>
        <div className={cx('category')}><p>사진후기</p></div>
        <div className={cx('photo-box')}>
          {photos}
        </div>
        {/* <div className={cx('category')}><p>비용표</p></div>
        <div className={cx('price-box')}>
          <ReviewPrice careinfo={this.props.location.state.careinfoData}/>
        </div> */}
        <div className={cx('h-spacer')}></div>
        <div
          className={ cx('border-button')}
          onClick = {()=> this.gotoHosDetail()}
        >
          <p>{this.props.location.state.review.hospital.hname} 상세 보기</p>
        </div>
      </div>
    )
  }
}


export default ReviewDetail;


