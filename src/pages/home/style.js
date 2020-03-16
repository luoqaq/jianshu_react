import styled from  'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 58px auto 0;
  overflow: hidden;
  .left {
    float: left;
    width: 68%;
    padding: 30px 0 0 15px;
    box-sizing: border-box;
    .articleList {
      .article {
        display: flex;
        align-item: center;
        padding: 15px 0 20px 0;
        margin-bottom: 15px;
        border-bottom: 1px solid #f0f0f0;
        .article_left {
          .title {
            font-size: 18px;
            font-weight: 700;
            line-height; 1.5;
            margin-bottom: 5px;
            color: #333;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
          .content {
            margin-bottom: 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
          }
          .meta {
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: #999;
            span {
              margin-right: 10px;
              .iconfont {
                font-size: 12px;
                margin-right: 3px;
              }
            }
            .diamon {
              color: #ea6f5a;
            }
          }
        }
        .article_right {
          width: 150px;
          margin-left: 15px;
          cursor: pointer;
          .img {
            width: 150px;
            border-radius: 4px;
          }
        }
      }
    }
  }
  .right {
    float: left;
    margin-left: 4%;
    width: 28%;
    padding-top: 30px;
    .Board {
      .boardItem {
        width: 100%;
        height: 50px;
        margin-bottom: 5px;
        cursor: pointer;
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .DownloadAPP {
      display: flex;
      align-items: center;
      wdith: 100px;
      padding: 10px 20px;
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      margin-top: 10px;
      .img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
      .right {
        flex-grow: 1;
        padding: 0;
        .title {
          font-size: 15px;
          color: #333;
          .rightArrow {
            margin-left: 5px;
            font-weight: 700;
          }
        }
        .content {
          margin-top: 5px;
          font-size: 13px;
          color: #999;
        }
      }
    }
    .RecommendAuthor {
      margin-top: 20px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #969696;
        .switch {
          cursor: pointer;
          .iconfont {
            font-size: 12px;
            margin-right: 5px;
          }
        }
      }
      .authorList {
        margin-top: 10px;
        .author {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          .avtar {
            width: 48px;
            height: 48px;
            margin-right: 10px;
            border-radius: 50%;
            cursor: pointer;
          }
          .con {
            .name {
              font-size: 14px;
              color: #333;
              margin-bottom: 5px;
            }
            .meta {
              font-size: 12px;
              color: #969696;
            }
          }
          .operate {
            flex-grow: 1;
            text-align: right;
            font-size: 13px;
            color: #42c02e;
            cursor: pointer;
          }
        }
      }
      .more {
        padding: 7px 10px;
        margin-top: 20px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        font-size: 13px;
        color: #787878;
        text-align: center;
        cursor: pointer;
        .rightArrow {
          margin-left: 5px;
          font-size: 14px;
        }
      }
    }
  }
`