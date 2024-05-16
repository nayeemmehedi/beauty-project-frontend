import React from 'react';
import { Form, Input, Button, Rate, message } from 'antd';

const GiveReview = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Review submitted successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Please complete the required fields.');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md my-10">
      <h2 className="text-2xl font-semibold mb-4">ADD A REVIEW</h2>
      <p className="text-gray-600 mb-4">Your email address will not be published. Required fields are marked *</p>

      <Form
        form={form}
        name="review"
        layout="vertical"
        initialValues={{ rating: 3 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="rating"
          label="Your rating"
          rules={[{ required: true, message: 'Please select a rating!' }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item
          name="review"
          label="Your review"
          rules={[{ required: true, message: 'Please enter your review!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-pink-500 hover:bg-pink-600 border-none">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GiveReview;
