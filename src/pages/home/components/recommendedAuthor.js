import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'
import { actionCreators } from '../store'

class RecommendedAuthor extends Component {

  render() {
    const { list } = this.props
    return (
      <div className="RecommendAuthor">
        <div className="title">
          <span>推荐作者</span>
          <span className="switch">
            <i className="iconfont icon-reset"></i>
            换一换
          </span>
        </div>
        <div className="authorList">
          {
            list.map(item => (
              <Author
                key={item.id}
                avtar={item.avtar}
                name={item.name}
                words={item.words}
                likeCount={item.likeCount}/>)
            )
          }
        </div>
        <div className="more">
          查看全部
          <span className="rightArrow">></span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getList()
  }
}

const mapState = (state) => ({
  list: state.home.authorList,
})

const mapDispatch = (dispatch) => ({
  getList: () => {
    dispatch(actionCreators.getAuthorList())
  }
})

export default connect(mapState, mapDispatch)(RecommendedAuthor)