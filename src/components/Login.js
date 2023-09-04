import React from "react";
import {Button, Form, Input, Row, Col} from "antd";



const Login = ({login}) => {

  const onFinish = (values) => {
    // initialiceSession(values);
    console.log("v", values);
    login(true)
  }


  return (

        <Row justify="space-around" align="middle">
          <Col xs={20} sm={20} md={20} lg={20}>
            <Form
                onFinish={onFinish}
            >
              <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Input your email'
                    },
                    {
                      type: 'email',
                      message: 'Please enter a validate email!'
                    }
                  ]}
              >
                <Input placeholder="email" />
              </Form.Item>
              <Form.Item
                  name={"password"}
                  rules={[
                    {
                      required: true,
                      message: 'Input your password'
                    }
                  ]}
              >
                <Input
                    type="password"
                    placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
                <br/>


              </Form.Item>

            </Form>
          </Col>

        </Row>

  )

}

export default Login