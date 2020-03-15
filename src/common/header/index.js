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
    const { value, searchHotList, currentHotPage, hotPageSize, handleChangeValue, handleFocusSearch, handleSearchHotSwitch } = this.props
    console.log(currentHotPage, hotPageSize)
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
            <Search value={value} onChange={(e) => handleChangeValue(e)} onFocus={() => handleFocusSearch(searchHotList)}></Search>
            <i className="iconfont icon-search"></i>
            <SearchPop>
              <SearchHot>
                热门搜索
                <SearchHotSwitch onClick={() => handleSearchHotSwitch(currentHotPage, hotPageSize, searchHotList.length, this.searchHotSwitchIcon)}>
                  <i ref={(el) => {this.searchHotSwitchIcon = el}} className="iconfont icon-reset"></i>
                  换一批
                </SearchHotSwitch>
                <SearchHotList>
                  {searchHotList.map((item, index) => {
                    let start = (currentHotPage - 1) * hotPageSize
                    let end = currentHotPage * hotPageSize
                    if (index >= start && end> index) {
                      return <SearchHotItem key={item}>{item}</SearchHotItem>
                    }else {
                      return ''
                    }
                  })}
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
    searchHotList: state.header.searchHotList,
    currentHotPage: state.header.currentHotPage,
    hotPageSize: state.header.hotPageSize
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    handleChangeValue: (e) => {
      dispatch(actionCreators.changeHeaderInputValue(e.target.value))
    },
    handleFocusSearch: (list) => {
      if (list && list.length > 0) return
      dispatch(actionCreators.getSearchHotList())
    },
    handleSearchHotSwitch: (currentHotPage, pageSize, length, searchHotSwitchIcon) => {
      let deg = searchHotSwitchIcon.style.transform ? searchHotSwitchIcon.style.transform.replace(/\D/g, '') - 0 : 0
      searchHotSwitchIcon.style.transform = `rotate(${180 + deg}deg)`
      let totalPage = Math.ceil(length / pageSize)
      if (currentHotPage < totalPage) {
        dispatch(actionCreators.changeHeaderCurrentHotPage(currentHotPage + 1))
      }else {
        dispatch(actionCreators.changeHeaderCurrentHotPage(1))
      }
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)