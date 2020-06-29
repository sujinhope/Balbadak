import {
  REVIEW_ACTION,
  SIGNIN, // 유저 
  GET_MY_PAGE,
  USER_UPDATED,
  LOGOUT,
  SIGNOUT,
  GET_MY_PETS, // 펫
  GET_PET_DETAIL,
  PET_REGISTERED,
  PET_UPDATED,
  PET_DELETED,
  GET_MY_LIKE_HOS,
} from './types'
import apis from '../apis/apis';



// ------------- user 관련 action --------------

let config = sessionStorage.getItem('user') ? {
  headers: {
    Authorization: JSON.parse(sessionStorage.getItem('user')).accessToken,
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  }
} : null

export const reviewIng = ( now, code) => {
  return {
    type: REVIEW_ACTION,
    now, code
  }
}



// 1. 로그인 요청하기
export const signIn = (user_id, user_pw) => {
  return dispatch => {
    return apis.post('/user/login?uId=' + user_id + '&uPw=' + user_pw)
      .then(res => {
        dispatch(signedIn(res.data))
        dispatch(getMyPage())
      })
  }
};

// 1.1. 유저 정보를 user 에 저장하기
export const signedIn = (userInfo) => {
  window.sessionStorage.setItem('user', JSON.stringify(userInfo))
  return {
    type: SIGNIN,
    userInfo
  }
}

// 2. 회원가입 요청하기
export const register = (user_id, user_pw) => {
  const body = { uid: user_id, upw: user_pw }
  return dispatch => {
    return apis.post('user/signup', body, config)
      .then(() => dispatch(signIn(user_id, user_pw)))
  }
}

// 3. 마이페이지 조회 요청하기
export const getMyPage = () => {
  config = sessionStorage.getItem('user') ? {
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem('user')).accessToken,
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  } : null
  return dispatch => {
    return apis.post('user/mypage', null, config)
      .then((res) => dispatch(recieveMyPage(res.data)))
  }
}

// 3.1. 마이페이지 user 에 저장하기
export const recieveMyPage = (mypage) => {
  const result = mypage.message
  window.sessionStorage.removeItem('myPage')
  window.sessionStorage.setItem('myPage', JSON.stringify(result))
  return {
    type: GET_MY_PAGE,
    result
  }
}

// 4. 회원정보 수정 요청하기
export const updateUser = (sms) => {
  return dispatch => {
    dispatch(userUpdated(false))
    return apis.post('user/sms?sms='+sms, null, config)
      .then(() => {
        dispatch(userUpdated(true))
        dispatch(getMyPage())
      })
  }
}

// 4.1. 회원정보 수정 요청 결과 status 에 저장하기
export const userUpdated = (code) => {
  return {
    type: USER_UPDATED,
    code
  }
}

// 5. 로그아웃결과 user에 저장하기
export const logOut = () => {
  window.sessionStorage.removeItem('user')
  window.sessionStorage.removeItem('myPage')
  apis.defaults.headers.common['Authorization'] = null
  return {
    type: LOGOUT
  }
}

// 6. 회원 탈퇴 요청하기
export const signOut = (uid) => {
  const body = { uId: uid }
  return dispatch => {
    dispatch(signedOut(false))
    return apis.post('user/signout', body, config)
      .then(() => {
        dispatch(signedOut(true))
        dispatch(logOut())
      })
  }
}

// 7. 탈퇴 결과 user에 저장하기
export const signedOut = (code) => {
  apis.defaults.headers.common['Authorization'] = null
  return {
    type: SIGNOUT
    ,code
  }
}

// ------------- pet 관련 action --------------

// 1. 유저의 모든 펫 정보 요청하기
export const getMyPets = (u_id) => {
  return dispatch => {
    return apis.post('animal/mycompanion/all?u_id=' + u_id, null, config)
      .then(res => dispatch(recieveMyPets(res.data)))
  }
}

// 1.1. 유저의 모든 펫 정보 user_info 에 저장하기
export const recieveMyPets = (list) => {
  return {
    type: GET_MY_PETS,
    list
  }
}

// 2.1. 유저의 펫 상세 정보 요청하기
export const getPetDetail = (a_code, u_id) => {
  return dispatch => {
    return apis.post('animal/one?a_code=' + a_code + '&u_id=' + u_id, null, config)
      .then(res => dispatch(recievePetDetail(res.data)))
  }
}

// 2.2. 유저의 펫 상세 정보 저장하기
export const recievePetDetail = (animal) => {
  return {
    type: GET_PET_DETAIL,
    animal
  }
}

// 3.1. 펫 정보 등록하기
export const registerPet = (body) => {
  return dispatch => {
    dispatch(petRegistered(false))
    return apis.post('animal/insert', body, config)
      .then(() => dispatch(petRegistered(true)))
  }
}

// 3.2. 등록한 결과 status에 저장하기
export const petRegistered = (code) => {
  return {
    type: PET_REGISTERED,
    code
  }
}

// 4. 펫 정보 수정하기
export const updatePet = (body) => {
  return dispatch => {
    dispatch(petUpdated(false))
    return apis.post('animal/update', body, config)
      .then(() => dispatch(petUpdated(true)))
  }
}

// 4.1. 수정한 결과 status에 저장하기
export const petUpdated = (code) => {
  return {
    type: PET_UPDATED,
    code
  }
}

// 5. 펫 삭제하기
export const deletePet = (a_code, u_id) => {
  return dispatch => {
    dispatch(petDeleted(false))
    return apis.post('animal/delete?a_code=' + a_code + '&u_id=' + u_id, null, config)
      .then(() => dispatch(petDeleted(true)))
  }
}

// 5.1. 삭제된 결과 status에 저장하기
export const petDeleted = (code) => {
  return {
    type: PET_DELETED,
    code
  }
}




// 6. 유저의 병원 즐겨찾기 조회 요청
export const getMyLikeHos = (u_id) => {
  return dispatch => {
    return apis.post('favoriteHospital/findById?uId=' + u_id, null, config)
      .then(res => dispatch(recieveMyLikeHos(res.data)))
  }
}

// 6.1. 즐겨찾기 결과 user에 저장
export const recieveMyLikeHos = (data) => {
  return {
    type: GET_MY_LIKE_HOS,
    data
  }
}