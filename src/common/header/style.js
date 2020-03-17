import styled from 'styled-components'
import image_logo from '../../static/images/logo.png'
import image_diamond from '../../static/images/diamondBeta.png'

const HeaderHeight = '58px'

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${HeaderHeight};
  border-bottom: 1px solid #eee;
`

export const Logo = styled.a`
  float: left;
  display: inline-block;
  width: 100px;
  height: 100%;
  background-image: url(${image_logo});
  background-size: contain;
`

export const RightWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
`

export const Setting = styled.div`
  position: relative;
  height: ${HeaderHeight};
  line-height: ${HeaderHeight};
  margin-right: 20px;
  cursor: pointer;
  .iconfont {
    font-size: 22px;
    color: #666;
  }
`
export const RightAWrapper = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 20px;
`

export const Diamond = styled.img.attrs({
  src: image_diamond
})`
  height: 25px;
`

export const Button = styled.a`
  padding: 0 18px;
  height: 36px;
  line-height: 36px;
  margin-right: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  &.in {
    color: #969696;
  }
  &.up {
    color: #ec7259;
    border-radius: 20px;
    border: 1px solid #ec7259;
  }
  &.write {
    color: #fff;
    background: #ec7259;
    border-radius: 20px;
    .iconfont {
      margin-right: 5px;
    }
  }
  &.index {
    font-size: 17px;
    color: #ec7259;
    padding-left: 0;
  }
  &.app {
    font-size: 17px;
  }
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
`

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  .iconfont {
    position: absolute;
    top: calc(${parseInt(HeaderHeight) / 2}px - 15px);
    right: 4px;
    z-index: 100;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    color: #999;
    transition: color,background .5s ease-in-out;
    cursor: pointer;
  }
`

export const Search = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin-top: calc(${parseInt(HeaderHeight) / 2}px - 19px);
  border-radius: 19px;
  border: none;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  transition: width .5s ease-in-out;
  &::placeholder {
    color: #999;
    font-weight: 500;
    font-size: 14px;
  }
  &:focus {
    width: 250px;
    & + .iconfont {
      background: #999;
      color: #fff;
    }
    & ~ .searchPop {
      display: block;
    }
  }
`

export const SettingPop = styled.div`
  display: none;
  position: absolute;
  top: ${HeaderHeight};
  right: -50px;
  width: 200px;
  height: 200px;
  box-shadow: 0 2px 8px rgba(0 ,0, 0, .1);
  background: #fff;
  border-radius: 4px;
  border-top: 1px solid #eee;
  &::before {
    content: "";
    position: absolute;
    top: -17px;
    right: 52px;
    border: 9px solid transparent;
    border-bottom-color: #fff;
  }
`

export const SearchPop = styled.div.attrs({
  className: 'searchPop'
})`
  display: none;
  position: absolute;
  top: ${HeaderHeight};
  left: 0;
  width: 200px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2); 
  padding: 10px 20px;
  &::before {
    content: "";
    position: absolute;
    top: -24px;
    left: 30px;
    border: 12px solid transparent;
    border-bottom-color: #fff;
  }
  &:hover {
    display: block;
  }
`

export const SearchHot = styled.div`
  font-size: 16px;
  color: #999;
  overflow: hidden;
`

export const SearchHotSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #999;
  cursor: pointer;
  white-space: nowrap;
  .iconfont {
    display: inline-block;
    position: static;
    margin-right: 5px;
    font-size: 13px;
    color: #999;
    transition: transform .3s ease-in-out;
    transform: rotate(0deg)
  }
`

export const SearchHotList = styled.div`
  margin-top: 15px;
`

export const SearchHotItem = styled.a`
  display: inline-block;
  padding: 2px 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #787878;
  margin: 0 10px 10px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  font-size: 13px;
`