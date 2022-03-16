import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TabContent1 extends Component {
  constructor(){
    super();
    this.state={
      value : "" ,
      List : [] 
    }
    this.submit = this.submit.bind(this)
  }
  submit(e){
    this.setState({ List: [...this.state.List , e.target.value] , value: "" })
  }
  render() {
    return (
      <div>
        <h2 className='h2-content1'>خوش آمدید</h2>
        <Form className='form' onSubmit={this.submit}>
            <Form.Group controlId="formGroupEmail">
              <Form.Control 
                style={{backgroundColor : "rgb(32, 49, 59)" ,  color : "wight"}}
                type="email" 
                placeholder="پست الکترونیک"
                />
            </Form.Group>
            <Form.Label/>
            <Form.Group controlId="formGroupPassword">
              <Form.Control 
                style={{backgroundColor : "rgb(32, 49, 59)" ,  color : "wight"}}
                type="password" 
                placeholder="کلمه عبور" 
              />
            </Form.Group>
            <p className='remember'>فراموش کردید؟</p>
            <Button className='button' 
              type='submit'
              style={{backgroundColor : "rgb(0, 209, 146)" ,
                color : "wight" , 
                border: "1px solid rgb(0, 209, 146)" ,
                borderRadius: "0",
                width: "100%",
                height: "4vw",
                marginLeft: "1px",
                }}>
              ورود
            </Button>
        </Form>
      </div>
    )
  }
}
