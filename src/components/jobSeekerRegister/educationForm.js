import React, { useState, useEffect } from 'react';
import {
  Form, Button, Col, Row, Input,
} from 'antd';
const EducationForm = (props) => {

  useEffect(() => {
    if (props.data) {
      const {
        college, passing_year, graduated, graduate_school, graduated_year, skills, certification
      } = props.data;
      props.form.setFields({
        college: {
          value: college || '',
        },
        passing_year: {
          value: passing_year || '',
        },
        graduated: {
          value: graduated || '',
        },
        graduate_school: {
          value: graduate_school || ''
        },
        graduated_year: {
          value: graduated_year || '',
        },
        skills: {
          value: skills || ','
        },
        certification: {
          value: certification || '',
        }
      });
    }
  }, [props.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {

      // if (!err) {
      //     const data = {
      //       college: values.college || null,
      //       passing_year: values.passing_year || null,
      //       graduated: values.graduated || null,
      //       graduated_school: values.graduated_school ||null,
      //       graduated_year: values.graduated_year || null,
      //       skills: values.skills || null,
      //       certification: values.certification || null
      //     };
      //     console.log(data);
      //     // props.submit(data);
      // }
      console.log(props.data);
      fetch('http://localhost:3600/api/job-seeker', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(props.data)
      })
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <div>

      <Form onSubmit={handleSubmit} layout="vertical" hideRequiredMark >
        <Row gutter={16}>
          <Col md={24}>
            <Form.Item label="College/University*">
              {getFieldDecorator('college', {
                rules: [{ required: true, message: 'Please enter College/University' }],
              })(<Input placeholder="Name of College/ University of attendant" onChange={e => props.setData('college', e.target.value)} />)}
            </Form.Item>
          </Col>

          <Col md={24}>
            <Form.Item label="Year Passed On*">
              {getFieldDecorator('passing_year', {
                rules: [{
                  required: true,
                },
                ],
              })(
                <Input onChange={e => props.setData('passing_year', e.target.value)} />,
              )}
            </Form.Item >
          </Col>
          <Col md={24}>
            <Form.Item label="Graduated*">
              {getFieldDecorator('graduated', {
                rules: [{ required: true, message: 'Please enter graduated or not' }],
              })(
                <Input onChange={e => props.setData('graduated', e.target.value)} />,
              )}
            </Form.Item>
          </Col>
          <Col md={24}>
            <Form.Item label="Graduate School*">
              {getFieldDecorator('graduate_school', {
                rules: [{ required: true, message: 'Please enter graduate school' }],
              })(
                <Input onChange={e => props.setData('graduate_school', e.target.value)} />,
              )}
            </Form.Item>
          </Col>

          <Col md={24}>
            <Form.Item label="Numbers of years attended*">
              {getFieldDecorator('graduated_year', {
                rules: [{ required: true, message: 'Enter your Numbers of years attended' }],
              })(
                <Input placeholder="In Years" type="number" onChange={e => props.setData('graduated_year', e.target.value)} />,
              )}
            </Form.Item>
          </Col>
          <Col md={24}>
            <Form.Item label="Skills/ Qualifications*">
              {getFieldDecorator('skills', {
                rules: [{
                  required: true, message: 'Please enter your Skills/Qualifications'
                }
                ],
              })(
                <Input.TextArea placeholder="Skills" onChange={e => props.setData('skills', e.target.value)} />
              )}
            </Form.Item>
          </Col>
          <Col md={24}>
            <Form.Item label="Certification*">
              {getFieldDecorator('certification', {
                rules: [{
                  required: true, message: 'Please input your Certification',
                }
                ],
              })(
                <Input.TextArea placeholder="Microsoft / Online Certification" onChange={e => props.setData('certification', e.target.value)} />,
              )}
            </Form.Item>
          </Col>

        </Row>
        <Button type="primary" htmlType="submit" >
          Submit
            </Button>
      </Form>
    </div>
  );
};

const EducationFormContainer = Form.create()(EducationForm);

export default EducationFormContainer;
