import React, { Component } from 'react'

class Author extends Component {
  render() {
    const { name, avtar, words, likeCount} = this.props
    return(
      <div className="author">
        <img className="avtar" src={avtar} alt={name}/>
        <div className="con">
          <p className="name">{name}</p>
          <p className="meta">写了{words}字 · {likeCount}喜欢</p>
        </div>
        <div className="operate">
          + 关注
        </div>
      </div>
    )
  }
}

export default Author