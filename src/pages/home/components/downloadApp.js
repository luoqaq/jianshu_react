import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class DownloadApp extends Component {

  render() {
    const { img } = this.props
    return (
      <div className="DownloadAPP">
        <img className="img" src={img} alt=""/>
        <div className="right">
          <p className="title">下载简书手机APP<span className="rightArrow">></span></p>
          <p className="content">随时随地发现和创作内容</p>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getAppImage()
  }
}

const mapState = (state) => ({
  img: state.home.appImage,
})

const mapDispatch = (dispatch) => ({
  getAppImage: () => {
    dispatch(actionCreators.getAppImage())
  }
})

export default connect(mapState, mapDispatch)(DownloadApp)