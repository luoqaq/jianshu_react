import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 960px;
  margin: 58px auto 0;
  overflow: hidden;
  padding-top: 30px;
  .left {
    float: left;
    width: calc(100% - 250px);
    .Article {
      .title {
        font-size: 30px;
        font-weight: 700;
        color: #404040;
        margin-bottom: 15px;
      }
      .authorInfo {
        display: flex;
        align-items: center;
        .avtar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .meta {
          .top {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            .name {
              font-size: 16px;
              color: #404040;
              margin-right: 8px;
              cursor: pointer;
            }
            .reward {
              width: 16px;
              height: 16px;
              margin-right: 8px;
            }
            .focusBtn {
              padding: 2px 9px;
              border: 1px solid #ec7259;
              border-radius: 12px;
              font-size: 12px;
              color: #ec7259;
              cursor: pointer;
            }
          }
          .bot {
            font-size: 13px;
            color: #969696;
            .diamond {
              color: #ec7259;
              .iconfont {
                margin-right: 5px;
              }
            }
            span {
              margin-right: 10px;
            }
          }
        }
      }
      .content {
        margin-top: 30px;
        p {
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 400;
          word-break: break-word;
          line-height: 28px;
        }
      }
    }
  }
  .right {
    float: right;
    width: 230px;
    height: 200px;
    background: #ff0;
    margin-left: 20px;
  }
`