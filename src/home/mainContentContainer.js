import React, { Component } from 'react';
import { Breadcrumb, Layout, Menu, Icon, Table,Popconfirm, Button } from 'antd';
import { getRequest, deleteRequest } from './common/restApi.js';
import ReferModalComponent from './component/referModalComponent.js';
import EditModalComponent from './component/editModalComponent.js';
const { SubMenu } = Menu;

const { Sider, Content } = Layout;

class MainContentContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
        dataList: [{}],
        referModalVisibility : false,
        editModalVisibility: false,
        rowData:{}
    };
  }

  componentDidMount = () => {
    this.fetchTableData();
  }

  fetchTableData = async() => {
    this.setState({ loading: true });
    const dataList = await getRequest('http://localhost:8050/computingAssets/getAllAssetsData');
    this.setState({ dataList });
  }

  handleDelete = async(_id) => {
    const parameter = { _id };
    const dataList =  await deleteRequest('http://localhost:8050/computingAssets/deleteById', parameter);
    this.setState({ dataList });
  };

  referModalVisible = (referModalVisibility, rowData) => {
    this.setState({ referModalVisibility, rowData });
  }
  
  editModalVisible = (editModalVisibility) => {
    this.setState({ editModalVisibility });
  }
  
  
  render() {
    const { dataList, referModalVisibility, rowData } = this.state;
    const columns = [     
      {
        title: 'Component Type',
        dataIndex : 'type',
        key: 'type', 
        width: 150
      }, {
        title : 'Component Name',
        dataIndex: 'componentName',
        key: 'componentName',
        width: 250
      }, {
        title: 'Serial Id',
        dataIndex: 'serialId',
        key: 'serialId',
        width: 150
      }, {
        title: 'Purchased Date',
        dataIndex: 'purchasedDate',
        key: 'purchasedDate',
        width: 250
      }, {
        title: 'Warranty Exp Date',
        dataIndex: 'warrantyExpDate',
        key: 'warrantyExpDate',
        width: 250
      }, {
        title: 'Action',
        dataIndex : 'action',
        render: (text, oneRowData) =>  (<React.Fragment>
          <Button type="primary" onClick = {() => this.referModalVisible(true, oneRowData)} icon="container" size="small" />
          <Button type="primary" onClick = {() => this.referModalVisible(true)} icon="edit" size="small" style= {{ marginLeft:5, marginRight:5}}/>
          <Popconfirm title="Sure to delete?" onConfirm = {() => this.handleDelete(oneRowData._id)}>
            <Icon type="delete" theme="twoTone" twoToneColor="#eb2f96"/>       
          </Popconfirm>
        </React.Fragment>),
      }
      ];

    return(
      <Content style = {{ padding: '0 50px' }}>
        <Breadcrumb style = {{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style = {{ padding: '24px 0', background: '#fff' }}>
          <Content style = {{ padding: '0 24px', minHeight: 550 }}>
            <Table columns={columns} dataSource={dataList} pagination = {{ pageSize:9 }}/>
            {referModalVisibility && <ReferModalComponent  referModalVisibility = { referModalVisibility } onClickCancel = {()=> this.referModalVisible(false)}
              onClickOk = {()=> this.referModalVisible(false)} data = {rowData}/>}
          </Content>
        </Layout>
      </Content>
    );
  }
}

export default MainContentContainer;
