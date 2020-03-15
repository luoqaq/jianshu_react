import { CHANGE_HEADER_INPUT_VALUE, CHANGE_HEADER_SEARCH_HOT_LIST, CHANGE_HEADER_CURRENT_HOT_PAGE } from './actionTypes'
import axios from 'axios'

const changeSearchHotList = (data) => ({
  type: CHANGE_HEADER_SEARCH_HOT_LIST,
  data
})

export const changeHeaderInputValue = (value) => ({
  type: CHANGE_HEADER_INPUT_VALUE,
  value
})

export const getSearchHotList = () => {
  return (dispatch) => {
    axios.get('/api/headerHotList.json').then(res => {
      let data = res.data
      if (data.success) {
        dispatch(changeSearchHotList(data.data))
      }else {
        alert('未获得数据')
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

export const changeHeaderCurrentHotPage = (currentHotPage) => ({
  type: CHANGE_HEADER_CURRENT_HOT_PAGE,
  currentHotPage
})