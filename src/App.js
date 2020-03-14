import React from 'react';
import { GlobalStyle } from './style';
import { IconFontStyle } from './static/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App" style={{position: 'realtive'}}>
      <GlobalStyle/>
      <IconFontStyle/>
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  )
}

export default App;
