import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Button, Modal, Form, Input, Tooltip } from 'antd';
import { Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete, Spin} from 'antd';
import { formItemLayout, tailFormItemLayout } from '../common/styleConstants.js';

const { Header } = Layout;
const { Option } = Select;
class ReferModalComponent extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount = () => {
    
    const { data, form } = this.props;
    console.log("I have been called");
    console.log('type valuee..', data);
    
    const { _id, type, componentName, serialId, purchasedDate, warrantyExpDate } = data;
    
    
    
    this.props.form.setFieldsValue({ type, componentName, serialId, purchasedDate, warrantyExpDate });
  }

  state = {
      
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { referModalVisibility, onClickCancel, onClickOk , data } = this.props;
    const {_id, type, componentName, serialId, purchasedDate, warrantyExpDate } = data;
    
    return( 
        <Modal title = 'Refer Computing Asset Data' centered visible = { referModalVisibility } footer={null}
        onCancel = { onClickCancel } >

        <Form { ...formItemLayout }  >
        
          <Form.Item label = 'Component Type'>
            {getFieldDecorator('type', { initialValue: type })(<Input disabled />)}
          </Form.Item>
          
          <Form.Item label = 'Component Name' >
            {getFieldDecorator('componentName', { initialValue: componentName})(<Input disabled/>)}
          </Form.Item>

          <Form.Item label = 'Serial Id' >
            {getFieldDecorator('serialId', {
              initialValue: serialId })(<Input disabled/>)}
          </Form.Item>
          
          <Form.Item label = 'Purchased Date' >
            {getFieldDecorator('purchasedDate', {
              initialValue: purchasedDate })(<Input disabled/>)}
          </Form.Item>
          
          <Form.Item label = 'Warranty Exp Date' >
            {getFieldDecorator('warrantyExpDate', {
              initialValue: warrantyExpDate })(<Input disabled/>)}
          </Form.Item>
        </Form>
        </Modal>  
    );
  }
}

const ReferModal = Form.create()(ReferModalComponent);
export default ReferModal;