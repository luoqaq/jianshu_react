import { CHANGE_ARTICLE_LIST, CHANGE_BOARD_LIST, CHANGE_APP_IMAGE, CHANGE_AUTHOR_LIST } from './actionTypes'
import axios from 'axios'

const changeArticleList = (list) => ({
  type: CHANGE_ARTICLE_LIST,
  list
})

export const getAticleList = () => {
  return (dispatch) => {
    axios.get('/api/articleList.json').then(res=> {
      if (res.data.success) {
        dispatch(changeArticleList(res.data.data))
      }
    }).catch(err => {
      alert('获取文章列表失败')
    })
  }
}

const changeBoardList = (list) => ({
  type: CHANGE_BOARD_LIST,
  list
})

export const getBoardList = () => {
  return (dispatch) => {
    axios.get('/api/boardList.json').then(res=> {
      if (res.data.success) {
        dispatch(changeBoardList(res.data.data))
      }
    }).catch(err => {
      alert('获取Board列表失败')
    })
  }
}

const changeAppImage = (img) => ({
  type: CHANGE_APP_IMAGE,
  img
})

export const getAppImage = () => {
  return (dispatch) => {
    axios.get('/api/appImage.json').then(res=> {
      if (res.data.success) {
        dispatch(changeAppImage(res.data.data))
      }
    }).catch(err => {
      alert('获取APP二维码失败')
    })
  }
}

const changeAuthorList = (list) => ({
  type: CHANGE_AUTHOR_LIST,
  list
})

export const getAuthorList = () => {
  return (dispatch) => {
    axios.get('/api/recommendAuthorList.json').then(res=> {
      if (res.data.success) {
        dispatch(changeAuthorList(res.data.data))
      }
    }).catch(err => {
      alert('获取推荐作者列表失败')
    })
  }
}

