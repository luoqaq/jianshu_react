import React from 'react';
import { GlobalStyle } from './style';
import { IconFontStyle } from './static/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <div className="App" style={{position: 'realtive'}}>
      <GlobalStyle/>
      <IconFontStyle/>
      <Provider store={store}>
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
