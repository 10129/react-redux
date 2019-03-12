import React, { Component } from 'react';
import store from './store';
import { Input ,Button,List,Table} from 'antd';
import { getUserNameChange,getPassWordChange,getHandleItemDelete,getItem } from './store/actionCreators';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
class Todolist extends Component {
  
    constructor(props){
        super(props);
        //加入数据源 对象
        this.state=store.getState();
        //订阅Store的改变
         store.subscribe(this.handleStoreChange);
      }
      handleStoreChange=()=>{
        this.setState(store.getState());
      }
      userNameChange=(e)=>{
        // alert(e.target.value);
        const action=getUserNameChange(e.target.value);
        //派发action
        store.dispatch(action);
      }
      passWordChange=(e)=>{
        const action=getPassWordChange(e.target.value);
        //派发action
        store.dispatch(action);
      }
      handleItemDelete=(index)=>{
        const action=getHandleItemDelete(index);
        //派发action
        store.dispatch(action);
      }
      mySubmit=()=>{
        const action=getItem();
        //派发action
        store.dispatch(action);
      }
      
    render(props) {
      return (
        <div style={{width:'300px' ,marginLeft:'500px' ,marginTop :'200px' }}>
          <Input  placeholder="用户名"  value={this.state.userName} onChange={this.userNameChange}/>
          <Input type='password'  placeholder="密码"  value={this.state.passWord} onChange={this.passWordChange}/>
          <Button type="primary" onClick={this.mySubmit}>提交</Button>
          {this.state.userName} , {this.state.passWord}
     <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={this.state.list}
      renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)} >{item}</List.Item>)} />
       
      <Table dataSource={dataSource} columns={columns} />
        </div>
      );
    }
  }
  
  export default Todolist;