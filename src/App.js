import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Usage from "./Pages/Usage";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Details from "./components/Details";
import PageNotFound from "./Pages/PageNotFound";
import Marks from './Pages/Marks'
import Sports from './Pages/Sports'
import Remarks from './Pages/Remarks'
import React, { Suspense } from "react";
import Login from "./Pages/Login";

const MyUsers = React.lazy(() => import('./Pages/Users'))

function App() {
  return (
    <HashRouter>
          <Routes>
              <Route path="login" element={<Login/>}/>
              <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/> {/* Nested Route */}
                <Route path="/usage" element={<Usage />}/>
                <Route path="/settings" element={<Settings  />}/>
                <Route path="/users" >
                  <Route index element={
                    (
                      /* Dynamic Route */
                      <Suspense fallback={<div>Loading...</div>}>
                        <MyUsers/>
                      </Suspense>
                    )
                  }/>
                  <Route path=":userId" element={<Details/>}>
                    <Route index element={<Marks/>}/>
                    <Route path='sports' element={<Sports/>}/>
                    <Route path='remarks' element={<Remarks/>}/>
                  </Route>
                </Route>
                <Route path="*" element={<PageNotFound/>}/> {/* Error handling */}
              </Route>
          </Routes>
    </HashRouter>
  );
}

export default App;
