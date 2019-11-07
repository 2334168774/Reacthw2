import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Allone from './container/container2/container3/container4/XiangQing';
export default class App extends Component {
    render() {
        
        return (
            <Router database="Reacthw2">
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/topic/:page' component={Allone}/>
                        <Redirect from='/' to='/home/all/1'></Redirect>
                    </Switch>
                        
                    </div>
                    <div className="right">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573054780571&di=94963403f466ba5425f80a36eff15af8&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160331%2Fff96aa24b31d481ab251dd1188f51589_th.jpg"/>
                    </div>
                </div>
            </Router>
        )
    }
}