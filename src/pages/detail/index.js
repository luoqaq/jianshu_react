import React, {Component} from 'react'
import Article from './components/article'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper
} from './style'

class Detail extends Component {
  render() {
    const { articleData: data } = this.props
    console.log('外', this.props)
    return (
      <DetailWrapper>
        <div className="left">
          <Article data={data}/>
        </div>
        <div className="right">

        </div>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail()
  }
}

const mapState = (state) => ({
  articleData: state.detail.data
})

const mapDispatch = (dispatch) => ({
  getDetail: () => {
    dispatch(actionCreators.getAticleDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail)