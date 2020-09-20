import React, {useEffect, useState} from 'react';
import logo from './bulwark_logo.png';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Progress } from 'antd';
import Pixi from './Pixi/index.js'
import Calendar from './Modules/Calendar';

import {CALENDAR, MODULES} from "./Constants";

const { Header, Content, Footer } = Layout;

function App() {

  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1" onClick={()=>setRoute(null)}>Home</Menu.Item>
            <Menu.Item key="2" onClick={()=>setRoute(CALENDAR)}>Calendar</Menu.Item>
            <Menu.Item key="3" onClick={()=>setRoute(MODULES)}>Modules</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{ route ? `${route}` : 'Home'}</Breadcrumb.Item>
          </Breadcrumb>
          {!route &&
            <div>
              {loading &&
                  <div style={{position: 'absolute', zIndex: 10,left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto',}}>
                    <Progress style={{position: 'absolute', zIndex: 11}}type={'circle'} percent={loadingProgress}/>
                    <img src={logo} style={{width: 750}} className="logo" alt="logo" />
                  </div>
              }
              <Pixi setLoading={setLoading} setLoadingProgress={setLoadingProgress}/>
            </div>
          }
          {route === CALENDAR &&
              <Calendar/>
          }
        </Content>
        <Footer style={{ textAlign: 'center' }}>The Bulwark</Footer>
      </Layout>
    </div>
  );
}

export default App;
