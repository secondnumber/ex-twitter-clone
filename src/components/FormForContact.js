import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import PropTypes from "prop-types";

const FormForContacts = ({onFinish, onFinishFailed}) => {
    const initialValues = {firstName: '', lastName: '', phoneNumber: ''};

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

  return (
      <Form
          {...layout}
          name="basic"
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
      >
          <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
              label="Phone number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
              <Input type="tel" />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                  Submit
              </Button>
          </Form.Item>
      </Form>
  );
};

FormForContacts.propTypes = {
    onFinish: PropTypes.func.isRequired,
    onFinishFailed: PropTypes.func.isRequired,
};

export default FormForContacts;