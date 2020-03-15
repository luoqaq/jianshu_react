import styled from  'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  height: 500px;
  margin: 58px auto 0;
  overflow: hidden;
  .left {
    float: left;
    width: 68%;
    padding: 30px 0 0 15px;
    box-sizing: border-box;
    height: 100px; 
    background: #f00;
  }
  .right {
    float: left;
    margin-left: 4%;
    width: 28%;
    height: 200px;
    background: #0f0;
    padding-top: 30px;
  }
`