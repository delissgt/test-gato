import React from "react";
import {Button, Form, Input, Row, Col, notification} from "antd";

import users from "../data.json";

const Login = ({login, setModalOpen}) => {
  const [notificationStatus, setNotificationStatus] = notification.useNotification();

  const onFinish = (values) => {
    initialiceSession(values);
  }

  const initialiceSession = (values) => {

    const filter = users.users.filter( user => user.email === values.email && user.password === values.password)

    if (filter.length === 1){
      localStorage.setItem("user-login", filter[0].id)
      setModalOpen(true)
      login(true)
    }else {
      notificationStatus.error({
        message: "Not valid values",
        description: "The values are incorrect or the account not exist"
      })
    }

    }


  return (

        <Row justify="space-around" align="middle">
          {setNotificationStatus}
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