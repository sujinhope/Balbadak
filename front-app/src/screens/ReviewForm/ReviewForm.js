import React from "react";
import DatePicker from '../../components/DatePicker/DatePicker'
import GradeBox from '../../components/HosGrades/GradeBox'
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import FilledInput from '@material-ui/core/FilledInput';

const cx = classNames.bind(styles)

const reviewData = {
  r_no: 0,
  u_id: 'aestas',
  r_nickname: '익명의 코끼리',
  r_photo: 'https://lh3.googleusercontent.com/proxy/QYikpOM5d8B4H0_YTn1sfYzEQcGYjKwUtseoQXBpXqhjh3bsn04ZdeNL533bsCyivn3OzERLxq2zBPl5l9rt_UU_B6PlMBkQHef624cQ8DI0TjJkozUb8Qyhs8kYkTGclUI-uGs83FjcgEo,http://www.busan.com/nas/wcms/wcms_data/photos/2020/02/12/2020021209194665170_l.jpg,https://modo-phinf.pstatic.net/20160629_37/1467141681611RHSrJ_JPEG/mosaazDVas.jpeg?type=w1100',
  r_content: '2010년부터 다니던 병원입니다. 고양이에게 중성화 수술은 꼭 필요한 것 같아요. 계속 힘들어해서 몇 차례 검진 받고 선생님과 상담후에 중성화 수술을 하게되었습니다. 선생님 정말 친절하시고요 여기 애견용 풀도 있는 것 같아서 상처 부위 치료되면 또 오려고요!',
  r_reciept: true,
  r_treatmentdata: '2020-05-10',
  r_date: '2020-05-10',
  tags: ['중성화수술', "고양이", "15kg",'정기적', "친절", "전용풀장", "감사"],
  r_overtreatement: 1,
  r_kindness: 4,
  r_result: 4,
  r_clean: 4,
  r_report: 0,
  r_deleted: false,
  Like: [{u_id:1}, {u_id:2}, {u_id:3}],
  careinfo: [
    {
      ci_no: 2,
      h_code: 1,
      ci_vet: '고양이',
      ci_price:25000,
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
      ci_price:30000,
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
      ci_price:50000,
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

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(),
      grade: [],
      totalgrade: []
    }
  }
  componentWillMount() {
    this.setInitialGrade()
  }
  componentDidMount() {
    console.log(this.state)
  }

  setInitialGrade() {
    const scorelist =  [0, 0, 0, 0]
    const scorelabel = ['적정한 치료', '친절함', '치료결과', '청결']
    const grade = scorelist.map((g, i) => ({name:scorelabel[i], score:g}))
    const totalgrade = this.calcTotalScore(scorelist)
    this.setState({
      grade:grade,
      totalgrade:totalgrade
    })
  }

  calcTotalScore(scorelist) {
    const totalscore = Math.round(((scorelist.reduce((a, b) => a + b, 0) / scorelist.length) + Number.EPSILON) * 100)/100
    const totalgrade = [{name:'평균평점', score:totalscore}]
    return totalgrade
  }

  onChange(field, value) {
    this.setState({
      grade: this.state.grade.map(
        g => {
          if(g.name === field) {
            return {...g, score:value}
          }
          return { ...g }
        }
      ),
      totalgrade: this.calcTotalScore(this.state.grade.map(g => g.score))
    })
    // console.log(this.state)
    // console.log(this.state.grade)
    // this.setState({
    //   totalgrade: this.calcTotalScore(this.state.grade.map(g => g.score))
    // })


    this.state.grade.map(g => console.log(g.name, g.score))
    // this.setState({
    //   totalgrade: this.calcTotalScore(this.state.grade.map(g => g.score))
    // })
  }


  render() {
    const animal = ['rabbit', 'turtle', 'hamster', 'cat', 'dog', 'bird']
    const animalsrc = animal.map( a => require(`../../assets/${a}.png`))
    const animalimg = animalsrc.map( url => 
      {return <img key={url} src={url}/>}
    )
    // const scorelist =  [0, 0, 0, 0]
    // const totalscore = Math.round(((scorelist.reduce((a, b) => a + b, 0) / scorelist.length) + Number.EPSILON) * 100)/100
    // const scorelabel = ['적정한 치료', '친절함', '치료결과', '청결']
    // const grade = scorelist.map((g, i) => ({name:scorelabel[i], score:g}))
    // const totalgrade = [{name:'평균평점', score:totalscore}]

    return (
        <div>
          <div className={cx('row')}>
            <div className={cx('small-category')}><p>방문 날짜</p></div>
            <div className={cx('spacer')}></div>
            <div className={cx('small-category')}><p>진료 대상</p></div>
          </div>
          <div className={cx('row')}>
            <div className={cx('small-col')}>
              <DatePicker value={new Date()} />
            </div>
            <div className={cx('spacer')}></div>
            <div className={cx('small-col','animal-box')}>
              {animalimg}
            </div>
          </div>
          <div className={cx('category')}>
            <p>병원 상세 평가</p>
          </div>
          <GradeBox 
            totalgrade={this.state.totalgrade} 
            grade={this.state.grade}
            onChange={this.onChange.bind(this)}
            />
          <div className={cx('border-button')}>
            <p>다시 방문할 의사 있다옹</p>
          </div>
          <div className={cx('category')}>
            <p>비용표</p>
          </div>
          <div className={cx('border-button')}>
            <p>영수증으로 입력하기</p>
          </div>
          <div className={cx('category')}>
            <p>진료 후기 상세</p>
          </div>
          <div className={cx('box')}>
            <textarea
              placeholder={'후기를 작성해 주세요.'}
              rows="7"
            />
          </div>
          <div className={cx('category')}>
            <p>사진 후기</p>
          </div>
          <div className={cx('border-button')}>
            <p>사진 첨부하기</p>
          </div>
        </div>
    );
  }
}



export default ReviewForm;
