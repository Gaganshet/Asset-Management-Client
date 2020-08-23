import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Button, Modal, Form, Input, Tooltip } from 'antd';
import { Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete, Spin} from 'antd';
import { formItemLayout, tailFormItemLayout } from '../common/styleConstants.js';

const { Header } = Layout;
const { Option } = Select;
class EditModalComponent extends Component {

  constructor(props) {
    super(props);
  }

  state = {
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { referModalVisibility, onClickCancel, onClickOk , data } = this.props;
    const {type, componentName, serialId, purchasedDate, warrantyExpDate } = data ? data : {} ;
    console.log('type valuee..',type);
    return( 
        <Modal title = 'Edit Computing Asset Data' centered visible = { referModalVisibility }
        onCancel = { onClickCancel } onOk = { onClickOk }>

        <Form { ...formItemLayout } >
        <Form.Item label = 'Component Type'>
        {getFieldDecorator('type', {
          initialValue: ['abc']})}
        <Input />
        </Form.Item>
        <Form.Item label = 'Component Name' hasFeedback>
        {getFieldDecorator('componentName', { initialValue: ['abc']})}
        <Input />
        </Form.Item>

        <Form.Item label = 'Serial Id' hasFeedback>
        {getFieldDecorator('serialId', {
          initialValue: ['abc']})}
        <Input />
        </Form.Item>
        
        <Form.Item label = 'Purchased Date' hasFeedback>
        {getFieldDecorator('purchasedDate', {
          initialValue: ['abc']})}
        <Input />
        </Form.Item>
        
        <Form.Item label = 'Warranty Exp Date' hasFeedback>
        {getFieldDecorator('warrantyExpDate', {
          initialValue: ['abc']})}
        <Input />
        </Form.Item>
        </Form>
        </Modal>  
    );
  }
}

const EditModal = Form.create()(EditModalComponent);
export default EditModal;