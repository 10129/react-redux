import React from 'react';

import logo from '../assets/images/1.jpg';

class Newsa extends React.Component{

    constructor(props){
        super(props);
        this.state={
            msg:'新闻',
            list:['11111111111','222222222222','3333333333333'],            
            
            list2:[<h2 key='1'>我是一个h2</h2>,<h2 key='2'>我是一个h2</h2>],


            list3:[

                {title:"新闻11111111"},
                {title:"新闻22222"},
                {title:"新闻33333333"},
                {title:"新闻444444444"}
            ]
        }
    }

    render(){

        let listResult=this.state.list.map(function(value,key){

                return <li key={key}>{value}</li>
        })



        return(
            <div className="newsa">

                {this.state.msg}

                <img src={logo} />
                <img src={require('../assets/images/1.jpg')} />

                <img src="https://www.baidu.com/img/xinshouye_353af22a7f305e1fb6cfa259394dea9b.png" />


                <hr/>
               

                {this.state.list2}
                <hr/>
                <ul>
                     {listResult}
                </ul>

                 <hr/>

                <ul>

                     {

                        this.state.list3.map(function(value,key){

                            return (<li key={key}>{value.title}</li>);

                        })
                    }
                </ul>

            </div>
        )
    }

}

export default Newsa;