import React, { Component } from 'react'

class Article extends Component {
  render() {
    const { title, img, discription, author, diamonCount, commentCount, likeCount, rewardCount } = this.props
    return(
      <div className="article">
        <div className="article_left">
          <p className="title">{title}</p>
          <p className="content">{discription}</p>
          <div className="meta">
            <span className="diamon">
              <i className="iconfont icon-diamond"></i>
              {diamonCount}
            </span>
            <span>{author}</span>
            <span>
              <i className="iconfont icon-comment"></i>
              {commentCount}
            </span>
            <span>
              <i className="iconfont icon-heart"></i>
              {likeCount}
            </span>
            {
              rewardCount && rewardCount > 0 ?
                (<span>
                  <i className="iconfont icon-reward"></i>
                  {rewardCount}
                </span>) :
                null
            }
          </div>
        </div>
        {
          img ? 
            (<div className="article_right">
              <img className="img" src={img} alt=""/>
            </div>) :
            null
        }
      </div>
    )
  }
}

export default Article