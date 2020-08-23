import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Button, Modal, Form, Input, Tooltip } from 'antd';
import { Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete, Spin, notification } from 'antd';
import { postRequest, jsonHeader } from '../common/restApi.js';
import { formItemLayout, tailFormItemLayout } from '../common/styleConstants.js';

const { Header } = Layout;
const { Option } = Select;

class RegistrationModalComponent extends Component {

  constructor(props) {
    super(props);
  }

  state = {
      confirmDirty: false,
      autoCompleteResult: [],  
      loginModalVisible : false,
      loading : false
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  handleRegister = async(e, methodType) => {
    try{

      e.preventDefault();
      const { onClickCancel } = this.props;
      const { loading } = this.state;

      this.props.form.validateFieldsAndScroll(async(err, values) => {
        if (!err) {
          console.log('Received values of form Register: ', values);
          this.setState({ loading : true });
          const registerDetails = await postRequest('http://localhost:8050/user/saveLoginUserData',values);
          this.setState({ loading : false });
          onClickCancel();
          this.openNotification();
        }
      });


    } catch(err){
      notification['error']({
        message: `Registering user ${email} - failed`,
        description: `${err}`,
      });
    }
  };

  openNotification = (email) => {
    notification.open({
      message: `${email} - Successfully Registered.`,
      description:
        'The Registration is Successful Please Login with the same credential for Sign In'
    });
  };

  render() {

    const { getFieldDecorator } = this.props.form;
    const { openRegistrationModal, onClickCancel } = this.props;

    return(
        <Modal title = 'Create account into Asset Management' centered visible = { openRegistrationModal } footer = { null } onCancel = { onClickCancel } >

        < Spin tip = "Loading..." centered spinning = { this.state.loading }>

        <Form { ...formItemLayout } onSubmit = { this.handleRegister }>
        <Form.Item label = "E-mail">
        {getFieldDecorator('email', {
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

        <Form.Item label = "Password" hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              validator: this.validateToNextPassword,
            },            ],
        })(<Input.Password />)}
        </Form.Item>

        <Form.Item label = "Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: 'Please confirm your password!',
            },
            {
              validator: this.compareToFirstPassword,
            }, 
            ],
        })(<Input.Password onBlur = { this.handleConfirmBlur } />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
        })(<Checkbox>
        I have read the <a href = "">agreement</a>
        </Checkbox>,
        )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout} >
        <Button type = "primary" htmlType = "submit" >
        Register
        </Button>
        </Form.Item>

        </Form>
        </Spin>
        </Modal> 
        );
        }
  }

  const RegistrationModal = Form.create()(RegistrationModalComponent);
  export default RegistrationModal;