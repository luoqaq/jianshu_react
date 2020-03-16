import { CHANGE_ARTICLE_LIST, CHANGE_BOARD_LIST, CHANGE_APP_IMAGE, CHANGE_AUTHOR_LIST } from './actionTypes'

const defaultState = {
  articleList: [],
  boardList: [],
  appImage: '',
  authorList: []
}

export default (state = defaultState, actions) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (actions.type) {
    case CHANGE_ARTICLE_LIST:
      newState.articleList = [...actions.list]
      return newState
    case CHANGE_BOARD_LIST:
      newState.boardList = [...actions.list]
      return newState
    case CHANGE_APP_IMAGE: 
      newState.appImage = actions.img
      return newState
    case CHANGE_AUTHOR_LIST:
      newState.authorList = [...actions.list]
      return newState
    default: 
      return newState
  }
}