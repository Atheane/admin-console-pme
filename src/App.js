import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Icon } from 'antd';
import Usage from './components/Usage';

import './App.css';
import './logo.svg';

const { Header, Content, Footer } = Layout;



class App extends Component {
  render() {
    return (

      <Layout style={{height:'100vh', width: '100%'}}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Row>
            <Col span={21} push={3}>
              <Menu
                theme="primary"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px', display: 'flex',
                  justifyContent: 'flex-start'}}
              >
                <Menu.Item key="2">Usage</Menu.Item>
                <Menu.Item key="3">Rapport d'audit</Menu.Item>
                <Menu.Item key="4">Rapport individuel</Menu.Item>
                <Menu.Item key="5">Facturation</Menu.Item>
                <Menu.Item key="6">Paramètres</Menu.Item>

              </Menu>
            </Col>
            <Col span={3} pull={21}>
              <img src='mailoop_icon.png' height='50' width='50' />
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Usage> </Usage>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#373839', color: '#fff'}}>
          <Row>
            <Col span={8} >
              <Icon type="phone" />
              <span>  +33 6 27 99 13 31 </span>
            </Col>
            <Col span={8} >
              <Icon type="mail" />
              <span>  contact@mailoop.com </span>
            </Col>
            <Col span={8} >
              <Icon type="user" />
              <span>  www.mailoop.com </span>
            </Col>
          </Row>
        </Footer>
      </Layout>

    );
  }
}

export default App;
