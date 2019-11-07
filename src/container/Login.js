import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';

export default class Start extends Component {
  render() {
    return (
        <div>  
            <h5>用户名:</h5><input type="text"/>
            <h5>密码:</h5><input type="password"/>
            <h5><button><Link to='/home'>登录</Link></button></h5>
            <div>
              <Route path='/home' component={Home}/>
            </div>
        </div>
        
    )
  }
}

