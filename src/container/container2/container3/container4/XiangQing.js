import React, { Component } from 'react'

export default class Allone extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            });
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data})
                });
        }
    }
    render() {
        let {url} = this.props.match
        console.log('this.state.data::'+this.state.data)
        return (

            <div>  
                {
                    <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className="markdown-text"></div>
                }
            </div>
            
        )
    }
}