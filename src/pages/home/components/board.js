import React, { Component } from 'react'
import { connect } from 'react-redux'
import BoardItem from './boardItem'
import { actionCreators } from '../store'

class Borad extends Component {

  render() {
    const { list } = this.props
    return (
      <div className="Board">
        {
          list.map(item => (
            <BoardItem
              key={item.id}
              title={item.title}
              img={item.img}
            ></BoardItem>))
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getList()
  }
}

const mapState = (state) => ({
  list: state.home.boardList,
})

const mapDispatch = (dispatch) => ({
  getList: () => {
    dispatch(actionCreators.getBoardList())
  }
})

export default connect(mapState, mapDispatch)(Borad)