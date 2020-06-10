import React, { Component } from "react";
import { connect } from "react-redux";
import { review } from '../../actions'

import ReviewInfoCard from '../../components/ReviewInfoCard/ReviewInfoCard';
import EmptyList from '../../components/Error/EmptyList'

import styles from './mystyle.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class ReviewRes extends Component {
  constructor(props) {
    super(props);
    let isLoggedIn = true
    if (props.user !== {}) {
      const { searchWord, lat, long, distance, filter } = props.rmainSearch
      if (props.review.length !== 0) {
        if (!(props.review.find(s =>
          ((s.searchWord === searchWord) &&
            (s.distance === distance) &&
            (s.filter === filter) &&
            (s.lat === lat) &&
            (s.long === long))))) {
          props.mainSearch(searchWord, lat, long, distance, filter)
        }
      } else {
        props.mainSearch(searchWord, lat, long, distance, filter)
      }
    } else {
      isLoggedIn = false
    }
    this.state = {
      isLoggedIn: isLoggedIn
    }
  }

  render() {
    if (this.state.isLoggedIn === true) {
      let resInfo, list, reviewCards;
      if (this.props.search === true) {
        const { searchWord, lat, long, distance, filter } = this.props.rmainSearch
        resInfo = this.props.review.find(s =>
          (s.searchWord === searchWord) &&
          (s.distance === distance) &&
          (s.filter === filter) &&
          (s.lat === lat) &&
          (s.long === long))
        list = resInfo.list
        reviewCards = list.map(r => <ReviewInfoCard hospitalData={r} key={`newCard${r.review.rcode}`} />)
      } else {
        return (
          reviewCards = <EmptyList mes='empty'/>
        )
      }
      return (
        <div className={cx('place-center')}>
          {reviewCards}
        </div>
      )
    } else {
      return (
        <div>
          <EmptyList mes='noAuth'/>
        </div>
      )
    }


  }
}

const mapStateToProps = state => {
  return {
    user: state.user.myPage,
    review: state.review.review,
    rmainSearch: state.review.rmainSearch,
    search: state.status.reviewSearch
  };
};



const mapDispatchToProps = dispatch => {
  return {
    mainSearch: (searchWord, lat, long, distance, filter) => dispatch(review.mainSearch(searchWord, lat, long, distance, filter))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewRes);