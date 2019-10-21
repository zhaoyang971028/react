import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { Row, Col, Input, Icon, Tooltip, Button } from "antd";
export default class RegisterView extends React.Component {
  constructor() {
    super();
    this.state={
      usename:[],
      password:[]
    }
  }

  toLoginView() {
    this.props.history.goBack({ pathname: "/LoginView", state: {} })
  }

  register() {
    let usename = document.getElementsByTagName('Input')[0].value;
    let password = document.getElementsByTagName('Input')[1].value;
    let ishave = 0;
    console.log(usename)
    console.log(password)
    
    for(let i=0;i<=this.state.usename.length;i++){
      if(this.state.usename[i] == usename){
        ishave = 1
      }
    }
    if(ishave == 1){
      alert('该用户名已被注册')
    }
    else{
      this.state.usename.push(usename)
    this.state.password.push(password)
    console.log(this.state.usename)
    console.log(this.state.password)
    alert("注册成功")
    }
    
  }

  render() {
    return (
      <div className="view">
        <h1>注册页面</h1>
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
                  placeholder="input password"
                  className="input"
                />
              </Col>
            </Row>
            <Row className="row">
              <Col span={12} className="col">
                <Button type="primary" onClick={this.register.bind(this)}>注册</Button>
              </Col>
              <Col span={12} className="col">
                <Button onClick={this.toLoginView.bind(this)}>登录页面</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
