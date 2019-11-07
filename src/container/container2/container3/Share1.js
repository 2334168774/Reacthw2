import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Share1 extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match)
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            });
    }
    
    componentDidUpdate(){
        console.log(this.props.match)
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            });
    }
    render() {
        console.log(this.props)
        return (
            <div>  
                {
                    this.state.data.map((item,idx)=>(        
                        <li key="item" className="li1">
                        <img src={item.author.avatar_url} alt="" style={{width:35,height:35}}/>
                        <span dangerouslySetInnerHTML={{__html:item.reply_count+'/'}} style={{width:5,height:35,lineHeight:5}}></span>
                        <span dangerouslySetInnerHTML={{__html:item.visit_count}} style={{width:10,height:35,lineHeight:5,fontSize:10}}></span>
                        {/* <span dangerouslySetInnerHTML={{__html:item.tab}} className="tab"></span> */}
                        <Link to={'/topic/'+item.id}><span class="title" >{item.title}</span></Link>
                        <span dangerouslySetInnerHTML={{__html:'1天前'}} style={{float:"right",lineHeight:5}}></span>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573054780571&di=94963403f466ba5425f80a36eff15af8&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160331%2Fff96aa24b31d481ab251dd1188f51589_th.jpg" alt="" style={{width:35,height:35,float:"right",marginTop:18}} />
                        </li>
                    ))
                }
            </div>
        )
    }
}