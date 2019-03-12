import React, { Component } from 'react';
// import './assets/css/App.js';
//引入组件
import Todolist from './componts/Todolist';
// import News from './componts/News';
// import Newsa from './componts/Newsa';
 import Login from './componts/Login';
// import ReactForm from './componts/ReactForm';
// import { Button } from 'antd';
import MyTable from './componts/MyTable';  
class App extends Component {

  render() {
    return (
      <div className="App1">
        {/*<MyTable />*/}
        {/* <Home date={'new Date()'} ></Home> */}
        {/* <News/>
        <Newsa/>
        <ReactForm />
         <Button type="primary">Primary</Button> */}
         <Login/>
      </div>
    );
  }
}

export default App;
