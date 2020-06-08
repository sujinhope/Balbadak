import React, { Component } from "react";
import { connect } from "react-redux";
import ReviewInfoCard from '../../components/ReviewInfoCard/ReviewInfoCard';
import { review } from '../../actions'

class ReviewRes extends Component {
  constructor(props) {
    super(props);
    console.log('---', props.review)
    const { searchWord, lat, long, distance, filter } = props.review.mainSearch
    console.log(props.review)
    console.log(searchWord, lat, long, distance, filter, 'yeayeah')
    console.log('---------------', props.review)
    if (props.review.review.length !== 0) {
      if (!(props.review.review.find(s => 
        ((s.searchWord === searchWord) && 
        (s.distance === distance) && 
        (s.filter === filter) && 
        (s.lat === lat) && 
        (s.long === long))))) { props.mainSearch(searchWord, lat, long, distance, filter) }
		} else {
			props.mainSearch(searchWord, lat, long, distance, filter)
		}
  }

  render() {
    let resInfo, list, reviewCards;
    console.log('here', this.props.review)
    console.log('real', this.props.review.mainSearch)
		const { searchWord, lat, long, distance, filter } = this.props.review.mainSearch
		if (this.props.search === true) {
      resInfo = this.props.review.review.find(s => 
        (s.searchWord === searchWord) && 
        (s.distance === distance) && 
        (s.filter === filter) && 
        (s.lat === lat) && 
        (s.long === long))
      
      list = resInfo.list
      reviewCards = list.map(r => <ReviewInfoCard hospitalData={r} key={`newCard${r.hospital.hcode}`}/>)
    } else {
      return (
        reviewCards = null
      )
    }
    return (
      <div>
        {reviewCards}
      </div>
    )

  }
}

const mapStateToProps = state => {
	return {
		review: state.review,
		search: state.status.reviewSearch
	};
};



const mapDispatchToProps = dispatch => {
	return {
		mainSearch: (searchWord, lat, long, distance, filter) => dispatch(review.mainSearch(searchWord, lat, long, distance, filter))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewRes);