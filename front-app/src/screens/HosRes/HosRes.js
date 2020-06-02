import React, { Component } from "react";

import { connect } from "react-redux";

import HosInfoCard from "../../components/HosInfoCard/HosInfoCard";
import {getHosData} from "../../actions";

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
    {
        h_code: 2,
        h_name: "역삼",
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
        h_image: "https://picsum.photos/id/1015/250/150/",
    }
]


class HosRes extends Component {


    componentDidMount() {
        this.state.cards = hosData;
    }

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    onChange = chips => {

    };

    render() {
        this.state.cards = hosData;
        console.log(hosData)
        console.log("======HosREs=====")
        console.log(this.state.cards)
        return (

            <div>

                {this.state.cards
                    ? this.state.cards.map(card => (
                        <HosInfoCard
                            hospitalData={card}
                            widthLength={widthLength}
                            key={`newCard${card.h_code}`}
                        />
                    ))
                    : null}

            </div>

        );
    }
}



export default HosRes