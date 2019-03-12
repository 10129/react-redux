
import React from 'react';
/*
react绑定属性注意：

    class要换成className

    for要换成 htmlFor

    style:  <div style={{"color":'red'}}>我是一个红的的 div  行内样式</div>
    其他的属性和以前写法是一样的
*/
class News extends React.Component{

    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象

    constructor(props){
        super(props);   //固定写法
        this.state={
            msg:'我是一个News组件',
            title:'我是一个title',
            color:'red',
            style:{
                color:'red',
                fontSize:'40px'
            }
        }
    }
    render(props){
        return(
            <div>
                <h2>{this.state.msg}</h2>

                <div title="1111">我是一个div</div>

                <br />
                <div title={this.state.title}>我是一个div</div>
                <br />
                <div id="box" className='red'>我是一个红的的div---id</div>
                 <br />
                <div className={this.state.color}>我是一个红的的div  1111</div>

                <br />

                <label htmlFor="name">姓名</label>

                <input id="name"  />
                 <br />
                 <br />
                
                  <br />
                 <br />
                 <div style={this.state.style}>我是一个红的的 div  行内样式</div> 
            </div>
        )

    }    
}
export default News;
