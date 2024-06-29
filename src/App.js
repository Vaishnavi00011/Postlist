import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Cardlist from './Pages/Cardlist'
import { Provider } from 'react-redux'
import store from './Store/store'


function App() {
  return (
    <Provider store={store}>
       <HashRouter>
    <Routes>
      <Route path='/' element={<Cardlist/>}></Route>
    </Routes>
  </HashRouter>
    </Provider>
 
  )
}

export default App