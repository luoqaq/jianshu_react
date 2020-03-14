import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  RightWrapper,
  Setting,
  RightAWrapper,
  Diamond,
  Button,
  Nav,
  SearchWrapper,
  Search,
  SettingPop,
  SearchPop,
  SearchHot,
  SearchHotSwitch,
  SearchHotList,
  SearchHotItem
} from './style'

class Header extends Component {
  render() {
    const { value, searchHotList, handleChangeValue, handleFocusSearch } = this.props
    return(
      <HeaderWrapper>
        <Logo href="/"></Logo>
        <RightWrapper>
          <Setting href="/">
            <i className="iconfont icon-Aa"></i>
            <SettingPop></SettingPop>
          </Setting>
          <RightAWrapper href="/">
            <Diamond></Diamond>
          </RightAWrapper>
          <Button className="in" href="/">登录</Button>
          <Button className="up" href="/">注册</Button>
          <Button className="write" href="/">
            <i className="iconfont icon-feather"></i>
            写文章
          </Button>
        </RightWrapper>
        <Nav>
          <Button className="index">首页</Button>
          <Button className="app">下载APP</Button>
          <SearchWrapper>
            <Search value={value} onChange={(e) => handleChangeValue(e)} onFocus={handleFocusSearch}></Search>
            <i className="iconfont icon-search"></i>
            <SearchPop>
              <SearchHot>
                热门搜索
                <SearchHotSwitch>
                  <i className="iconfont icon-reset"></i>
                  换一批
                </SearchHotSwitch>
                <SearchHotList>
                  {searchHotList.map(item => (
                    <SearchHotItem key={item}>{item}</SearchHotItem>
                  ))}
                </SearchHotList>
              </SearchHot>
            </SearchPop>
          </SearchWrapper>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    value: state.header.inputValue,
    searchHotList: state.header.searchHotList
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    handleChangeValue: (e) => {
      dispatch(actionCreators.changeHeaderInputValue(e.target.value))
    },
    handleFocusSearch: () => {
      dispatch(actionCreators.getSearchHotList())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)