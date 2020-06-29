import {
    SELECT_HOS
  } from './types'


  export const setPathName = (pathname) => {
    return {
      type: SELECT_HOS,
      pathname
    }
  }