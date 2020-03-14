import { CHANGE_HEADER_INPUT_VALUE, CHANGE_HEADER_SEARCH_HOT_LIST } from './actionTypes'
import axios from 'axios'

export const changeHeaderInputValue = (value) => ({
  type: CHANGE_HEADER_INPUT_VALUE,
  value
})

const changeSearchHotList = (data) => ({
  type: CHANGE_HEADER_SEARCH_HOT_LIST,
  data
})

export const getSearchHotList = () => {
  return (dispatch) => {
    axios.get('/api/headerHotList.json').then(res => {
      let data = res.data
      console.log(data)
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