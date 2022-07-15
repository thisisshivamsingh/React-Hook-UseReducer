import { BrowserRouter, Route, Routes } from 'react-router-dom';

// COMPONENTS
import Header from './components/header';
import CssTr from './components/CSStransition';
import Tgroup from './components/Tgroup';
import TransitionComp from './components/Transition';
import Other from './components/other'
import Reducer from './components/reducer';

const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/transition" element={<TransitionComp/>}></Route>
          <Route path="/csstransition" element={<CssTr/>}></Route>
          <Route path="/tgroup" element={<Tgroup/>}></Route>
          <Route path="/other" element={<Other/>}></Route>
          <Route path="/reducer" element={<Reducer/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;