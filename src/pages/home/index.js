import React, {Component} from 'react'
import ArticleList from './components/articleList'
import Board from './components/board'
import DownloadAPP from './components/downloadApp'
import RecommendAuthor from './components/recommendedAuthor'
import {
  HomeWrapper
} from './style'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div className="left">
          <ArticleList/>
        </div>
        <div className="right">
          <Board/>
          <DownloadAPP/>
          <RecommendAuthor/>
        </div>
      </HomeWrapper>
    )
  }
}