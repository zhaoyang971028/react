import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Row, Col, Input, Icon, Tooltip, Button } from "antd";
import axios from 'axios';
export default class LoginView extends React.Component {
  constructor() {
    super();
    this.state={
      usename:[],
      password:[]
    }
  }

  toApp() {
    console.log(this.state)
    let usename = document.getElementsByTagName('Input')[0].value
    let password = document.getElementsByTagName('Input')[1].value
    console.log(usename)
    if(this.state.usename.indexOf(usename)==-1){
      alert("该用户名未注册")
    }
    else{
      let index = this.state.usename.indexOf(usename);
      if(this.state.password[index] != password){
        alert("密码错误")
      }
      else{
        this.props.history.goBack({ pathname: "/App", state: {} })
      }
    }
  }

  toRegisterView() {
    this.props.history.push({ pathname: "/register", state: {} });
  }

  componentDidMount() {
    axios.get("http://localhost:8888/reactdata").then(res=>{
      for(let i=0;i<res.data.length;i++){
        this.state.usename.push(res.data[i].usename) 
        this.state.password.push(res.data[i].password)
      }
      console.log(this.state.usename)
      console.log(this.state.password)
    })
  }
  render() {
    return (
      <div className="view">
        <h1 className="title">登录页面</h1>
        <div className="loginVeiw">
          <div className="content">
            <Row className="row">
              <Col span={4}>用户名</Col>
              <Col span={20}>
                <Input
                  className="input"
                  placeholder="输入你的用户名e"
                  prefix={
                    <Icon type="reddit" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon
                        type="info-circle"
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />
              </Col>
            </Row>
            <Row className="row">
              <Col span={4}>密码</Col>
              <Col span={20}>
                <Input.Password
                  placeholder="输入密码"
                  className="input"
                />
              </Col>
            </Row>
            <Row className="row">
              <Col span={12} className="col">
                <Button onClick={this.toApp.bind(this)} type="primary">登录</Button>
              </Col>
              <Col span={12} className="col">
                <Button onClick={this.toRegisterView.bind(this)}>注册</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
