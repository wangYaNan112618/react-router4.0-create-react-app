import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class Home extends Component {

    go(){
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <h2>登陆</h2>
                {console.log(this.props)}
                <Link to="/register">去注册</Link>
                <button onClick={this.go.bind(this)}>点击注册</button>
            </div>
        )
    }
}

export default Home