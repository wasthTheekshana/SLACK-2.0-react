import React from 'react';
import './App.css';
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";
import Header from "./component/Header";
import SideBAr from "./component/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <AppBody>
              <SideBAr/>
              <Routes>
                  <Route path="/"/>
              </Routes>
          </AppBody>

      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
  height: 100vh;
`;