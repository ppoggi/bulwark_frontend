import React, {useEffect, useState} from 'react';
import logo from './bulwark_logo.png';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Pixi from './pixi/index.js'
import Calendar from './Modules/Calendar';

import {CALENDAR, MODULES, PIXI} from "./Constants";

const { Header, Content, Footer } = Layout;

function App() {

  const [route, setRoute] = useState(null)

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1" onClick={()=>setRoute(null)}>Home</Menu.Item>
            <Menu.Item key="2" onClick={()=>setRoute(CALENDAR)}>Calendar</Menu.Item>
            <Menu.Item key="3" onClick={()=>setRoute(MODULES)}>Modules</Menu.Item>
            <Menu.Item key="4" onClick={()=>setRoute(PIXI)}>PIXI STUFF (TBD)</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{route?`${route}`:'Home'}</Breadcrumb.Item>
          </Breadcrumb>
          {!route &&
            <img src={logo} style={{width: 750}} className="logo" alt="logo" />
          }
          {route === CALENDAR &&
              <Calendar/>
          }
          {route === PIXI &&
            <Pixi/>
          }
        </Content>
        <Footer style={{ textAlign: 'center' }}>The Bulwark</Footer>
      </Layout>
    </div>
  );
}

export default App;
