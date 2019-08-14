
//core
import React from 'react';
import { Layout, Row } from 'antd';


//css
import './App.css';
import 'antd/dist/antd.css';

//componentx
import HeaderContainer from "./component/Header/HeaderContainer.jsx"
import BodyContainer from "./component/Body/BodyContainer.jsx"
import Router from "./router/router.js"
// const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
      <div className="App-header">
        <HeaderContainer></HeaderContainer>
      </div>
      <div className="App-body">
        <BodyContainer></BodyContainer>
      </div>
    </div>
  );
}

export default App;
