import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from './article'
import { actionCreators } from '../store'

class ArticleList extends Component {

  render() {
    const { list } = this.props
    return (
      <div className="articleList">
        {
          list.map(item => (
            <Article
              key={item.id}
              id={item.id}
              title={item.title}
              author={item.author}
              discription={item.discription} 
              img={item.img}
              commentCount={item.commentCount}
              likeCount={item.likeCount}
              diamonCount={item.diamonCount}
              rewardCount={item.rewardCount}
            ></Article>))
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getList()
  }
}

const mapState = (state) => ({
  list: state.home.articleList,
})

const mapDispatch = (dispatch) => ({
  getList: () => {
    dispatch(actionCreators.getAticleList())
  }
})

export default connect(mapState, mapDispatch)(ArticleList)