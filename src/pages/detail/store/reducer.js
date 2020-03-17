import { CHANGE_ARTICLE_DETAIL } from './actionTypes'

const defaultState = {
  data: {
    title: '',
    avtar: '',
    level: '',
    name: '',
    hasFocusd: '',
    diamond: 0,
    time: '',
    words: 0,
    readCount: 0,
    zanCount: 0,
    rewardCount: 0,
    contents: []
  }
}

export default (state=defaultState, actions) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (actions.type) {
    case CHANGE_ARTICLE_DETAIL:
      newState.data = actions.data
      return newState
    default: 
      return newState
  }
}