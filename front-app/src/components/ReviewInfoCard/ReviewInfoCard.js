import React from 'react';
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind';
import history from '../../history';

const cx = classNames.bind(styles)

const ReviewInfoCard = props => {
  const { review, careinfo } = props.hospitalData
  let pet_data = [];
  for (let i = 0; i < careinfo.length; i++) {
    pet_data.push({
      pet: careinfo[i].animal.aspecies,
      c_name: careinfo[i].ciName
    })
  }

  const scorelist =  [review.rclean, review.rkindness, review.rresult, review.rprofessionality, review.rovertreatment]
  const totalgrade = calcTotalScore(scorelist)
  
  function calcTotalScore(scorelist) {
    const totalscore = Math.round(((scorelist.reduce((a, b) => a + b, 0) / scorelist.length) + Number.EPSILON) * 100)/100
    return totalscore
  }

  const cont = review.rcontent.substr(0, 70)

  async function handleClick() {
    history.push("/ReviewDetail", {review, careinfo})
  }


  return (
    <>
      <div className={cx('rev-box')} onClick={handleClick.bind(this)}>
        <div className={cx('rev-header')}>
          <h4>#{review.rpurpose} #{review.hospital.hname}</h4>
        </div>
        <div className={cx('meta-box')}>
          <img className={cx('hos-icon')} src={require('../../assets/star.png')}/>
          <p>{totalgrade} 점</p>
          <img className={cx('hos-icon')} src={require('../../assets/like.png')}/>
          <p>{review.rtotalgood}명 </p>
        </div>
        <div className={cx('rev-content')}>
          <p>* 이 리뷰는 예시 리뷰입니다 :)</p>
          <p>{cont} ...</p>
        </div>
        <div>
          <p>방문 날짜 : {review.rdate.substr(0, 7)}</p>
          
        </div>
      </div>
    </>    
  );
}
export default ReviewInfoCard;