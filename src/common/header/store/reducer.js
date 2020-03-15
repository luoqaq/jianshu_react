import { CHANGE_HEADER_INPUT_VALUE, CHANGE_HEADER_SEARCH_HOT_LIST, CHANGE_HEADER_CURRENT_HOT_PAGE } from './actionTypes'

const defaultState = {
  inputValue: 'dadan',
  searchHotList: [],
  currentHotPage: 1,
  hotPageSize: 3,
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
    case CHANGE_HEADER_CURRENT_HOT_PAGE:
      newState.currentHotPage = actions.currentHotPage
      return newState
    default:
      return newState
  }
}
