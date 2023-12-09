import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Usage from "./Pages/Usage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Users from "./Pages/Users";
import Details from "./components/Details";
import PageNotFound from "./Pages/PageNotFound";
import Marks from './Pages/Marks'
import Sports from './Pages/Sports'
import Remarks from './Pages/Remarks'

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="/usage" element={<Usage />}/>
                <Route path="/settings" element={<Settings  />}/>
                <Route path="/users" >
                  <Route index element={<Users/>}/>
                  <Route path=":userId" element={<Details/>}>
                    <Route index element={<Marks/>}/>
                    <Route path='sports' element={<Sports/>}/>
                    <Route path='remarks' element={<Remarks/>}/>
                  </Route>
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
              </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
