import React from "react";

import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'
import FilledInput from '@material-ui/core/FilledInput';
import imgA from "../../assets/imgA.png";
import plus_b from "../../assets/plus_b.png";
import MyPetList from "../../components/MyPetList/MyPetList";
import MyInfo from "../../components/MyInfo/MyInfo";
import Modal from '@material-ui/core/Modal';
import { user } from "../../actions"
import { CssBaseline } from "@material-ui/core";
const cx = classNames.bind(styles)

class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
            a_name: '',
            a_type: '',
            a_species: '',
            a_kig: 0,
            a_year: 0,
            user: this.props.user
        }
        this.toggleAdd = this.toggleAdd.bind(this);
        this.addPetName = this.addPetName.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
    }
    async onSelect(e) {
        this.state.a_species = e;
    }
    toggleAdd(e) {
        this.setState({
            isSearching: e,
        })
    }
    addPetName(e) {
        this.setState({
            a_name: e,
        })
    }
    addMyPet() {

    }
    render() {

        const body = (
            <div className={cx('modal')}>
                <p>반려동물 이름 </p>
                <input type="text" className={cx('input-box')} placeholder="반려동물 이름 " onChange={this.addPetName}></input>
                <label>대분류 </label>
                <select name="speices" onChange={e => this.onSelect(e.target.value)}>
                    <option value="강아지">강아지</option>
                    <option value="고양이">고양이</option>
                    <option value="소동물">소동물</option>
                </select>
                <p>몸무게 </p>
                <input type="text" className={cx('input-box')} placeholder="몸무게 " onChange={this.addPetName}></input>
                <p>나이 </p>
                <input type="text" className={cx('input-box')} placeholder="나이 " onChange={this.addPetName}></input>
                <div onClick={() => this.toggleAdd(false)}>
                    <p>추가 하기</p>
                </div>
            </div>

        );


        return (
            <div>
                <div className={cx('row')}>
                    <div className={cx('small-col')}>
                    </div>
                    <div className={cx('spacer')}></div>
                </div>
                <div className={cx('category')}>
                    <p>내 정보 </p>
                </div>
                <div>
                    <MyInfo user = {this.state.user}/>
                    {/* <MyInfo user = {this.state.user}/> */}
                </div>
                <div className={cx('category')}>
                    <p>나의 펫 </p>
                </div>
                <div>
                    <MyPetList />
                </div>
                <div align="center" onClick={() => this.toggleAdd(true)}>
                    <img src={plus_b} width="20" height="20" ></img>
                </div>
                <div className={cx('category')}>
                    <p>내가 작성한 리뷰</p>
                </div>
                <div>
                    {/* <MyInfo /> */}
                </div>
                <div className={cx('category')}>
                    <p>내가 찜한 병원</p>
                </div>
                <div>
                    {/* <MyInfo /> */}
                </div>
                <Modal
                    open={this.state.isSearching}
                >
                    {body}
                </Modal>
            </div>
        );
    }
}



export default MyPage;
