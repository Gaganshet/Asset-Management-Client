import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MainHeaderContainer from './MainHeaderContainer.js';
import MainSiderContainer from './MainSiderContainer.js';
import MainFooterContainer from './MainFooterContainer.js';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class HomeLayoutContainer extends Component {

  state = {
      collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        <MainHeaderContainer />
        <MainSiderContainer />
        <MainFooterContainer />
      </Layout>
    );
  }
}

export default HomeLayoutContainer;