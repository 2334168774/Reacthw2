import React, { Component } from 'react'
import ListA from './container3/ListA';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
export default class All extends Component {
  render() {
    var url = this.props.match.url
    return (
      <>
        <div>
          <Switch>
            <Route path='/home/all/:page' component={ListA}/>
            <Redirect from='/home/all' to='/home/all/1'></Redirect>
          </Switch> 
        </div>
        <div>
        <Link to={`${url}/1`}><button>1</button></Link>
        <Link to={`${url}/2`}><button>2</button></Link>
        <Link to={`${url}/3`}><button>3</button></Link>
        <Link to={`${url}/4`}><button>4</button></Link>
        <Link to={`${url}/5`}><button>5</button></Link>
        <Link to={`${url}/6`}><button>6</button></Link>
        <Link to={`${url}/7`}><button>7</button></Link>
        <Link to={`${url}/8`}><button>8</button></Link>
        <Link to={`${url}/9`}><button>9</button></Link>
        <Link to={`${url}/10`}><button>10</button></Link>
        </div>
        </>
    )
  }
}
