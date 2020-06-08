import {
  USER_UPDATED,
  PET_REGISTERED,
  PET_UPDATED,
  PET_DELETED,
  SEARCH_STATUS,
  REVIEW_SEARCH_STATUS,
  HOS_LIKED,
  HOS_DISLIKED,
  REVIEW_GOOD,
  REVIEW_BAD,
  REVIEW_POSTED,
  REVIEW_UPDATED,
  REVIEW_DELETED,
  REVIEW_REPORTED, // report 관련
  REPORT_CANCELED
} from '../actions/types'

const initializer = {
  userUpdated: null,
  petRegistered: null,
  petUpdated: null,
  petDeleted: null,
  search: false,
  reviewSearch: false,
  hosLiked: null,
  hosDisLiked: null,
  reviewGood: null,
  reviewBad: null,
  reviewPosted: null,
  reviewUpdated: null,
  reviewDeleted: null,
  reviewReported: null,
  reportCanceled: null,
  nearHos: [],
  nearHosByStar: [],
  nearHosByReview: [],
  hosByWord: [],
  hosByReview: [],
  hosByStar: [],
}



export default (state = initializer, action) => {
  switch (action.type) {
    case USER_UPDATED:
      return { ...state, userUpdated: action.code }
    case PET_REGISTERED:
      return { ...state, petRegistered: action.code }
    case PET_UPDATED:
      return { ...state, petUpdated: action.code }
    case PET_DELETED:
      return { ...state, petDeleted: action.code }
    case SEARCH_STATUS:
      return { ...state, search: action.code }
    case REVIEW_SEARCH_STATUS:
      return { ...state, reviewSearch: action.code }
    case HOS_LIKED:
      return { ...state, hosLiked: action.code }
    case HOS_DISLIKED:
      return { ...state, hosDisliked: action.code }
    case REVIEW_GOOD:
      return { ...state, reviewGood: action.code }
    case REVIEW_BAD:
      return { ...state, reviewBad: action.code }
    case REVIEW_POSTED:
      return { ...state, reviewPosted: action.code }
    case REVIEW_UPDATED:
      return { ...state, reviewUpdated: action.code }
    case REVIEW_DELETED:
      return { ...state, reviewDeleted: action.code }
    case REVIEW_REPORTED:
      return { ...state, reviewReported: action.code }
    case REPORT_CANCELED:
      return { ...state, reportCanceled: action.code }
    default:
      return state;
  }
}

// 상태는 요청한 다음 필요없어지면 다시 null 설정하기