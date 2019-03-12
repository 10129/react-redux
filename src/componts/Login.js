import React, { Component } from 'react';
import store from './store';
import { Input ,Button} from 'antd';
import 'whatwg-fetch';
import { getUserNameChange,getPassWordChange } from './store/actionCreators';

class Login extends Component {
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
      //登录
      mySubmit=(e)=>{
          e.preventDefault();
          let url = "http://localhost:8080/test/login";
          let formData = new FormData();
          formData.append('username', "admin");
          formData.append('userpwd', "admin");
          fetch(url, {
              method: 'post',
              mode: '',
              body: formData
          }).then(function (response) {
              return response.text()
          }).then(function (body) {
              // message.info(body);
          });
      }
    render(props) {
      return (
        <div style={{width:'300px' ,marginLeft:'500px' ,marginTop :'200px' }}>
          <Input  placeholder="用户名"  value={this.state.userName} onChange={this.userNameChange}/>
          <Input type='password'  placeholder="密码"  value={this.state.passWord} onChange={this.passWordChange}/>
          <Button type="primary" onSubmit={this.mySubmit}>提交</Button>
          {this.state.userName} , {this.state.passWord}
        </div>
      );
    }
  }
  
  export default Login;