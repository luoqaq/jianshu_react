import React, { Component } from 'react'

class BoardItem extends Component {
  render() {
    const { title, img} = this.props
    return(
      <div className="boardItem">
        <span className="title"></span>
        <img className="img" src={img} alt={title}/>
      </div>
    )
  }
}

export default BoardItem