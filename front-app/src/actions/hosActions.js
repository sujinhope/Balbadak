import {
  MAIN_SEARCH,
  SEARCH_STATUS,
  GET_HOS_BY_LOC,
  GET_HOS_BY_WORD,
  HOS_LIKED,
  HOS_DISLIKED,
  GET_MY_LIKE_HOS
} from './types'
import apis from '../apis/apis';

let config = sessionStorage.getItem('user') ? {
  headers: {
    Authorization: JSON.parse(sessionStorage.getItem('user')).accessToken,
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  }
} : null


// ---------- main.js ---------------------
export const mainSearch = (searchWord, lat, long, category, filter, page=null) => {
  console.log('mainSearch')
  page = page === null ? 0 : page
  return dispatch => {
    dispatch(setSearchStatus(false))
    dispatch(setMainSearch(searchWord, lat, long, category, filter))
    if (category === 'hosByLoc') {
      if (filter === 'hosByReview') {
        return dispatch(getHosByReview(lat, long, page, null, category, filter))
      } else if (filter === 'hosByStar') {
        return dispatch(getHosByStar(lat, long, page, null, category, filter))
      } else {
        let mode
        if (filter === 'nearHosByReview') {
          mode = 'review'
        } else if (filter === 'nearHosByStar') {
          mode = 'starrating'
        } else {
          mode = null
        }
        console.log('mode----------', mode)
        return dispatch(getNearHos(lat, long, page, mode, category, filter))
      }
    } else {
      return dispatch(getHosByWord(searchWord, page, category, filter))
    }
  }
}

export const setMainSearch = (searchWord, lat, long, category, filter) => {
  console.log('setMainSearch')
  const item = {searchWord: searchWord,lat: lat,long: long,category: category,filter: filter}
  window.localStorage.setItem('mainSearch', JSON.stringify(item))
  return {
    type: MAIN_SEARCH,
    searchWord, lat, long, category, filter
  }
}

export const setSearchStatus = (code) => {
  console.log('setSearchStatus')
  return {
    type: SEARCH_STATUS,
    code
  }
}

// ------------- hospital 관련 action --------
// 1. 현재 내 위치에서 3km 이내의 병원 조회 with 필터
export const getNearHos = (lat, long, page, mode, category, filter) => {
  console.log('getNearHospitals')
  const url = 'hospital/location/'+page+ '?latitude=' + lat + '&longtitude=' + long
  const reqURL = mode === null ? url : url + '&mode=' + mode
  return dispatch => {
    return apis.post(reqURL, null, config)
      .then(res => {
        dispatch(recieveHosByLoc(lat, long, page, res.data.next, res.data.hospital, category, filter))
        dispatch(setSearchStatus(true))
      })
  }
}

// 3. 전체 지역 병원 검색 리뷰순 요청하기
export const getHosByReview = (lat, long, page, category, filter) => {
  console.log('getHosByReview')
  return dispatch => {
    return apis.post('hospital/reviewcnt/'+page+ '?latitude=' + lat + '&longtitude=' + long, null, config)
      .then(res => {
        dispatch(recieveHosByLoc(lat, long, page, res.data.next, res.data.hospital, category, filter))
        dispatch(setSearchStatus(true))
      })
  }
}

// 4. 전체 지역 병원 검색 별점순 요청하기
export const getHosByStar = (lat, long, page, category, filter) => {
  console.log('getHosByStar')
  return dispatch => {
    return apis.post('hospital/starrating/'+page+ '?latitude=' + lat + '&longtitude=' + long, null, config)
      .then(res => {
        dispatch(recieveHosByLoc(lat, long, page, res.data.next, res.data.hospital, category, filter))
        dispatch(setSearchStatus(true))
      })
  }
}

// 1.2 getNearHospitals로 받은 병원 리스트를 hos_info 에 저장하기
export const recieveHosByLoc = (lat, long, page, next, list, category, filter) => {
  console.log('recieveHos')
  return {
    type: GET_HOS_BY_LOC,
    lat, long, page, next, list, category, filter
  }
}


// 2. 병원 키워드로 검색하기
export const getHosByWord = (keyword, page, category, filter) => {
  console.log('getHosByword')
  return dispatch => {
    return apis.post('hospital/name/'+page+'?keyword='+keyword, null, config)
      .then(res => {
        dispatch(recieveHosByWord(keyword, page, res.data.next, res.data.hospital, category, filter))
        dispatch(setSearchStatus(true))
      })
  }
}

// 2.1. 키워드 검색 결과 hos_info에 저장하기
export const recieveHosByWord = (keyword, page, next, list, category, filter) => {
  console.log('recieveHosByWord')
  return {
    type: GET_HOS_BY_WORD,
    keyword, page, next, list, category, filter
  }
}

// ------------- 병원 즐겨찾기 기능 관련 action --------------
// 1. 즐겨찾기 추가 요청
export const likeHos = (hcode, ucode) => {
  console.log('likeHos')
  const favoriteHospital = {
    hcode : hcode
  }
  return dispatch => {
    dispatch(hosLiked(false))
    return apis.post('favoriteHospital/insert', favoriteHospital, config)
      .then(() => dispatch(hosLiked(true)))
  }
}


// 2. 즐겨찾기 취소 요청
export const dislikeHos = (hcode, ucode) => {
  console.log('dislikeHos')
  const favoriteHospital = {
    hcode: hcode
  }
  return dispatch => {
    dispatch(hosDisliked(false))
    return apis.post('favoriteHospital/delete', favoriteHospital, config)
      .then(() => dispatch(hosDisliked(true)))
  }
}

// 1.1. 즐겨찾기 추가 결과 status에 저장
export const hosLiked = (code) => {
  console.log('hosLiked')
  return {
    type: HOS_LIKED,
    code
  }
}

// 2.1. 즐겨찾기 삭제 결과 status에 저장
export const hosDisliked = (code) => {
  console.log('hosDisliked')
  return {
    type: HOS_DISLIKED,
    code
  }
}



// 3. 유저의 병원 즐겨찾기 조회 요청
export const getMyLikeHos = (u_id) => {
  console.log('getMyLikeHos')
  const body = {
    u_id: u_id
  }
  return dispatch => {
    return apis.post('favoriteHospital/findById', body, config)
      .then(res => dispatch(recieveMyLikeHos(res.data)))
  }
}

// 3.1. 즐겨찾기 결과 user에 저장
export const recieveMyLikeHos = (likeHos) => {
  console.log('recieveMyLikeHos')
  return {
    type: GET_MY_LIKE_HOS,
    likeHos
  }
}