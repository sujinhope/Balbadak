import React from "react";
import GradeBox from '../../components/HosGrades/GradeBox'
import ReviewPrice from '../../components/ReviewPrice/ReviewPrice'
import styles from './mystyle.module.scss';
import ThumbIcon from '@material-ui/icons/ThumbUpAlt';
import SportsIcon from '@material-ui/icons/Sports';
import classNames from 'classnames/bind';
import { connect } from "react-redux";
// import { review } from '../../actions';

const cx = classNames.bind(styles)

class ReviewDetail extends React.Component {
  componentDidMount () {
    // review.getHosReview(10)
  }

  constructor(props) {
    super(props);
    const scorelist =  [0, 0, 0, 0]
    const scorelabel = ['적정한 치료', '친절함', '치료결과', '청결']
    const grade = scorelist.map((g, i) => ({name:scorelabel[i], score:g}))
    const totalgrade = this.calcTotalScore(scorelist)
    this.state = {
      grade: grade,
      totalgrade: totalgrade,
      editablegrade: false,
    };

  }

  calcTotalScore(scorelist) {
    const totalscore = Math.round(((scorelist.reduce((a, b) => a + b, 0) / scorelist.length) + Number.EPSILON) * 100)/100
    const totalgrade = [{name:'평균평점', score:totalscore}]
    return totalgrade
  }

  render() {
    console.log('reviewData?? ', this.props.reviewData)
    const photo1 = this.props.reviewData.r_photo1
    const photo2 = this.props.reviewData.r_photo2
    const photo3 = this.props.reviewData.r_photo3
    console.log("photo2 :  " , photo2)
    // const photos = photolist.map(
    //   p => (
    //     <img className={cx('photo')} src={p} key={p} alt={p}/>
    //   )
    // )

    const totallike = this.props.reviewData.r_totalgood
    const tags = []

    // for (const [index, value] of this.props.reviewData.tags.map()) {
    //   console.log(value)
    //   tags.push(<div className={cx('tag')} key={index}>#{value}</div>)
    // }
    for (const [index, value] of this.props.reviewData.tags.entries()) {
      console.log(value)
      tags.push(<div className={cx('tag')} key={index}>#{value}</div>)
    }
    // const tags = this.props.reviewData.tags.map((value, index) => (
    //   <div className={cx('tag')} key={index}>#{value}</div>
    // ))

    return (
      <div className={cx('container')}>
        <div className={cx('meta-box')}>
          <p>{this.props.reviewData.r_treatmentdata} 진료</p>
          <p>{this.props.reviewData.r_date} 작성</p>
        </div>
        <div className={cx('tag-box')}>
          {tags}
        </div>
        <div className={cx('number')}>
          <div className={cx('icon-box')}>
            <SportsIcon fontSize="small"/>
            <p>신고다옹</p>
          </div>
          <div className={cx('icon-box')}>
            <ThumbIcon fontSize="small"/>
            <p>좋다옹 {totallike}</p>
          </div>
        </div>
        <div className={cx('category')}><p>병원상세평가</p></div>
        <GradeBox 
          grade={this.state.grade} 
          dojang={this.props.reviewData.r_revisit} 
          totalgrade={this.state.totalgrade}
          editable={this.editablegrade}
          />
        <div className={cx('category')}><p>진료 후기 상세</p></div>
        <div className={cx('basic-box')}>
          <p>
            {this.props.reviewData.r_content}
          </p>
        </div>
        <div className={cx('category')}><p>사진후기</p></div>
        <div className={cx('photo-box')}>
          {/* {photos} */}
          <img className={cx('photo')} src={photo1} key={photo1} alt="사진1"/>
          <img className={cx('photo')} src={photo2} key={photo2} alt="사진2"/>
          <img className={cx('photo')} src={photo3} key={photo3} alt="사진3"/>
        </div>
        <div className={cx('category')}><p>비용표</p></div>
        <div className={cx('price-box')}>
          <ReviewPrice careinfo={this.props.reviewData.careinfo}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('reviewData!?!?!?!? ', state.review.hosReview)
  return {
    reviewData: state.review.hosReview
  };
};

export default connect(mapStateToProps)(ReviewDetail);
 

 