import { CHANGE_ARTICLE_DETAIL } from './actionTypes'
import axios from 'axios'

const changeAticleDetail = (data) => ({
  type: CHANGE_ARTICLE_DETAIL,
  data
})

export const getAticleDetail = () => {
  return (dispatch) => {
    axios.get('/api/articleDetail.json').then(res => {
      console.log('获取到文章详情', res.data.data)
      if (res.data.success) {
        dispatch(changeAticleDetail(res.data.data))
      }
    }).catch(err => {
      console.log(err)
      alert('未获得文章详情')
    })
  }
}