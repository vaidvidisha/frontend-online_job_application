import React, { useState, useEffect } from 'react';
import {
  Form, Button, Col, Row, Input, Select, Switch, Spin, Divider, Empty, notification,Checkbox
} from 'antd';
const EmployeeForm = (props) => {

  useEffect(() => {
    if (props.data) {
      const {
        current_employeer, destination, current_job_description, current_experience,
         previous_employeer,previous_job_description , previous_experience
      } = props.data;
      props.form.setFields({
        current_employeer: {
          value: current_employeer || '',
        },
        destination: {
          value: destination || '',
        },
        current_job_description: {
          value: current_job_description || '',
        },
        current_experience: {
          value: current_experience || '',
        },
        previous_employeer: {
          value: previous_employeer || '',
        },
        previous_job_description: {
          value: previous_job_description || '',
        },
        previous_experience: {
          value: previous_experience || '',
        },
      });
    }
  }, [props.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log(props.data);
      // if (!err) {
      //     const data = {
      //       current_employeer: values.current_employeer || null,
      //       destination: values.destination || null,
      //       current_job_description: values.current_job_description || null,
      //       current_experience: values.current_experience || null,
      //       previous_employeer: values.previous_employeer || null,
      //       previous_job_description: values.previous_job_description || null,
      //       previous_experience: values.previous_experience || null
      //     };
      //     console.log(data);
      //     // props.submit(data);
      // }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <div>
      
        <Form onSubmit={handleSubmit} layout="vertical" hideRequiredMark >
            <Row gutter={16}>
              <Col md={24}>
                <Form.Item label="Current Employeer*">
                  {getFieldDecorator('current_employeer', {
                    rules: [{ required: true, message: 'Please enter Current Employeer' }],
                  })(<Input placeholder="Enter Current Employeer" onChange={e => props.setData( 'current_employeer', e.target.value)}/>)}
                </Form.Item>
              </Col>

              <Col md={24}>
              <Form.Item label="Destination*">
                {getFieldDecorator('destination', {
                  rules: [{
                    required: true, message: 'Please enter Destination',
                  }
                ],
                })(
                  <Input placeholder="Enter your destination" onChange={e => props.setData( 'destination', e.target.value)}/>,
                )}
              </Form.Item >
              </Col>
              <Col md={24}>
              <Form.Item label="Job Description*">
                {getFieldDecorator('current_job_description', {
                  rules: [{ required: true, message: 'Please enter your Job Description' }],
                })(
                  <Input.TextArea placeholder="current_job_description" onChange={e => props.setData( 'current_job_description', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={24}>
              <Form.Item label="Experience in Months*">
                {getFieldDecorator('current_experience', {
                  rules: [{
                    required: true, message: 'Please input experience in months',
                  }
                ],
                })(
                  <Input placeholder="Months" type="number" onChange={e => props.setData( 'current_experience', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={24}>
                <Form.Item label="Previous Employeer*">
                  {getFieldDecorator('previous_employeer', {
                    rules: [{ required: true, message: 'Please enter Previous Employeer' }],
                  })(<Input placeholder="Enter Previous Employeer" onChange={e => props.setData( 'previous_employeer', e.target.value)}/>)}
                </Form.Item>
              </Col>
              <Col md={24}>
              <Form.Item label="Job Description*">
                {getFieldDecorator('previous_job_description', {
                  rules: [{ required: true, message: 'Please enter your Job Description' }],
                })(
                  <Input.TextArea  placeholder="previous_job_description" onChange={e => props.setData( 'previous_job_description', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={24}>
              <Form.Item label="Experience in Months*">
                {getFieldDecorator('previous_experience', {
                  rules: [{
                    required: true, message: 'Please input experience in months',
                  }
                ],
                })(
                  <Input type="number" placeholder="Experience in months" onChange={e => props.setData( 'previous_experience', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit" >
                Save
            </Button>
        </Form>
    </div>
  );
};

const EmployeeFormContainer = Form.create()(EmployeeForm);

export default EmployeeFormContainer;
