import React ,{ Component } from 'react';
import { Layout, Menu, Button, Modal, Form, Input, Tooltip } from 'antd';
import { Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';
import LoginModalComponent from './component/LoginModalComponent.js';
import RegistrationModalComponent from './component/RegistrationModalComponent.js';


const { Header } = Layout;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class MainHeaderContainer extends Component {

  constructor(props){
    super(props);
  }

  state = {
      confirmDirty: false,
      autoCompleteResult: [],  
      loginModalVisible : false,
      registrationModalVisible : false
  }

  setLoginModalVisible = (loginModalVisible) => {
    this.setState({ loginModalVisible });
  }

  setRegistrationModalVisible = (registrationModalVisible) => {
    this.setState({ registrationModalVisible });
  } 

  render() {
    const { autoCompleteResult , loginModalVisible, registrationModalVisible } = this.state;

    return(
        <Header className = "header">
        <div className = "logo" />
          <Menu theme = "dark" mode = "horizontal" defaultSelectedKeys = {['2']} style = {{ lineHeight: '64px' }}>
        <Menu.Item key = "1">nav 1</Menu.Item>
        <Menu.Item key = "2">nav 2</Menu.Item>
        <Menu.Item key = "3">nav 3</Menu.Item>
        <Button type="primary" style = {{ float: 'right', top: 20, marginRight : 7, marginLeft:7, marginTop:-3 }} onClick = {() => this.setRegistrationModalVisible(true)} >Sign Up</Button>
        <Button type="primary" style = {{ float: 'right', top: 20, marginTop:-3 }} onClick = {() => this.setLoginModalVisible(true)} >Sign In</Button>
        </Menu>
        <RegistrationModalComponent openRegistrationModal = { registrationModalVisible } onClickCancel = {() => this.setRegistrationModalVisible(false)}/ >
        <LoginModalComponent openLoginModal = { loginModalVisible } onClickCancel = {() => this.setLoginModalVisible(false)} /> 
        </Header>    
    );
  }
}

export default MainHeaderContainer;