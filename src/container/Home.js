import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import All from './container2/All';
import Give from './container2/Give';
import Jinghua from './container2/Jinghua';
import Answers from './container2/Answers';
import Share from './container2/Share';
export default class Home extends Component {
  render() {
    var url = this.props.match.url
    return (
      <>
          <div className='div1'>
              <Link to={`${url}/all`}>全部</Link>
              <Link to={`${url}/jinghua`}class="all">精华</Link>
              <Link to={`${url}/share`}class="all">分享</Link>
              <Link to={`${url}/Answers`}class="all">问答</Link>
              <Link to={`${url}/give`}class="all">招聘</Link>
          </div>
          <div>
          <Switch>
            <Route path={url+'/all'} component={All}/>
            <Route path={url+'/jinghua'} component={Jinghua}/>
            <Route path={url+'/share'} component={Share}/>
            <Route path={url+'/Answers'} component={Answers}/>
            <Route path={url+'/give'} component={Give}/>
            <Redirect from='/home' to='/home/all/1'></Redirect>
          </Switch> 
          </div>
      </>
    )
  }
}
