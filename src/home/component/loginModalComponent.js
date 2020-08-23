import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Button, Modal, Form, Input, Tooltip } from 'antd';
import { Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';

const { Header } = Layout;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
};

class loginModalComponent extends Component {

  constructor(props) {
    super(props);
  }

  state = {
      confirmDirty: false,
      autoCompleteResult: [],  
      loginModalVisible : false
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('registrationPassword')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  handleLogin = async (e, methodType) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log('Received values of form Login: ', values);
    });
  };

  
  render() {

    const { getFieldDecorator } = this.props.form;
    const { openLoginModal, onClickCancel } = this.props;

    return(
        <Modal title = 'Sign in into Asset Management' centered  visible = { openLoginModal } footer = {null}
        onCancel = {() => onClickCancel()}> 
        <Form { ...formItemLayout } onSubmit= { this.handleLogin }>
        <Form.Item label="E-mail">
        {getFieldDecorator('loginEmail', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
            ],
        })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
        {getFieldDecorator('loginPassword', {
          rules: [
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              validator: this.validateToNextPassword,
            },
            ],
        })(<Input.Password />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
        Sign In
        </Button>
        </Form.Item>
        </Form>
        </Modal>    
    );
  }
}

const LoginModal = Form.create()(loginModalComponent);
export default LoginModal;