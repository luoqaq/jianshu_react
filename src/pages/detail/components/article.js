import React from 'react'

export default function Article(props) {
  const { title,
          avtar,
          level,
          name,
          hasFocusd,
          diamond,
          time,
          words,
          readCount,
          contents,
          zanCount,
          rewardCount} = props.data
    console.log('内', props)
  return(
    <div className="Article">
      <p className="title">{title}</p>
      <div className="authorInfo">
        <img className="avtar" src={avtar} alt=""/>
        <div className="meta">
          <div className="top">
            <span className="name">{name}</span>
            <img className="reward" alt="" src={level}/>
            <a className={hasFocusd ? 'focusBtn-on focusBtn' : 'foucusBtn focusBtn-off'}>关注</a>
          </div>
          <div className="bot">
            <span className="diamond">
              <i className="iconfont icon-diamond"></i>
              {diamond}
            </span>
            <span>{time}</span>
            <span>字数 {words}</span>
            <span>阅读 {readCount}</span>
          </div>
        </div>
      </div>
      <div className="content">
        {
          contents.map(item => (
            <p key={item}>{item}</p>
          ))
        }
      </div>
    </div>

  )
}