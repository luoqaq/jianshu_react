import { CHANGE_HEADER_INPUT_VALUE, CHANGE_HEADER_SEARCH_HOT_LIST } from './actionTypes'

const defaultState = {
  inputValue: 'dadan',
  searchHotList: [] 
}

export default (state = defaultState, actions) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (actions.type){
    case CHANGE_HEADER_INPUT_VALUE:
      newState.inputValue = actions.value
      return newState
    case CHANGE_HEADER_SEARCH_HOT_LIST:
      newState.searchHotList = [...actions.data]
      return newState
    default:
      return newState
  }
}
