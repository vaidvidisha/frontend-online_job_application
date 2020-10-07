import React, { useState, useEffect } from 'react';
import {
  Form, Button, Col, Row, Input, Select, Switch, Spin, Divider, Empty, notification,Checkbox
} from 'antd';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const { Option } = Select;


const PersonalForm = (props) => {

  const [country ,setCountry] = useState(''); 
  const [state ,setRegion] = useState('');

  const selectRegion = (val) =>{
    setRegion(val);
    console.log("val",val);
    props.setData( 'state', val);
    console.log(props.data);
  }

  const selectCountry = (val) =>{
    setCountry(val);
    props.setData( 'country', val);
    console.log(props.data);
  }

  // console.log(props.data);


  useEffect(() => {
    if (props.data) {
      const {
        name, email, password, phone, address , country, state ,city, postal_code,year,month,personal_skills
      } = props.data;
      props.form.setFields({
        name: {
          value: name || '',
        },
        email: {
          value: email || '',
        },
        password: {
          value: password || '',
        },
        phone: {
          value: phone || '',
        },
        address: {
          value: address || '',
        },
        country:{
          value:country || '',
        },
        state:{
          value:state || '',
        },
        city:{
          value:city || '',
        },
        postal_code:{
          value:postal_code || '',
        },
        year:{
          value:year || '',
        },
        month:{
          value:month || '',
        },
        personal_skills:{
          value:personal_skills || '',
        },
      });
    }
  }, [props.data]);

  const onSubmit = (e) =>{
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log(props.data);
    });
  }

  const checkPhone = (value, callback) => {
    const regex = /^\d{10}$/;
    if (value && !regex.test(value)) {
      callback("Phone number should be 10 digit number!");
    } else {
      callback();
    }
  };


  const { getFieldDecorator } = props.form;
  return (
    <div>
      
        <Form layout="vertical" onSubmit = {onSubmit} hideRequiredMark >
            <Row gutter={16}>
              <Col md={24}>
                <Form.Item label="Name*">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter your full name' }],
                  })(<Input onChange={e => props.setData( 'name', e.target.value)} placeholder="Please enter your full name" />)}
                </Form.Item>
              </Col>

              <Col md={24}>
              <Form.Item label="Email Id*">
                {getFieldDecorator('email', {
                  rules: [{
                    required: true, message: 'Please input your E-mail!',
                  },
                  {
                    type: "email",
                    message: "Please enter valid E-mail!"
                  }
                ],
                })(
                  <Input onChange={e => props.setData( 'email', e.target.value)} placeholder="Enter your email id" autoComplete="off" />,
                )}
              </Form.Item >
              </Col>
              <Col md={24}>
              <Form.Item label="Password*">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input.Password type="password" onChange={e => props.setData( 'password', e.target.value)} placeholder="Password" autoComplete="off"/>,
                )}
              </Form.Item>
              </Col>
              <Col md={24}>
              <Form.Item label="Phone*">
                {getFieldDecorator('phone', {
                  rules: [{
                    required: true, message: 'Please input your Phone Number!',
                  },
                  {
                    validator : checkPhone
                  }
                ],
                })(
                  <Input placeholder="Mobile Number" onChange={e => props.setData( 'phone', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={24}>
              <Form.Item label="Address*">
                {getFieldDecorator('address', {
                  rules: [{
                    required: true, message: 'Please enter your address',
                  }
                ],
                })(
                  <Input.TextArea placeholder="Address" onChange={e => props.setData( 'address', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={12}>
              <Form.Item label="Country*">
                {getFieldDecorator('country', {
                  rules: [{
                    required: true, message: 'Please enter your Country',
                  }
                ],
                })(
                  <CountryDropdown value={country} onChange={(val) => selectCountry(val)} />,
                )}
              </Form.Item>
              </Col>
              <Col md={12}>
              <Form.Item label="State*">
                {getFieldDecorator('state', {
                  rules: [{
                    required: true, message: 'Please enter your State',
                  }
                ],
                })(
                  <RegionDropdown
                    country={country}
                    value={state}
                    onChange={(val) => selectRegion(val)} />,
                )}
              </Form.Item>
              </Col>
              <Col md={12}>
              <Form.Item label="City*">
                {getFieldDecorator('city', {
                  rules: [{
                    required: true, message: 'Please enter your City',
                  }
                ],
                })(
                  <Input placeholder="City" onChange={e => props.setData( 'city', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={12}>
              <Form.Item label="Postal Code*">
                {getFieldDecorator('postal_code', {
                  rules: [{
                    required: true, message: 'Please enter your Postal Code',
                  }
                ],
                })(
                  <Input placeholder="Postal Code" onChange={e => props.setData( 'postal_code', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={12}>
              <Form.Item label="Total Work Experience*">
                {getFieldDecorator('year')(
                  <Input placeholder="year" onChange={e => props.setData( 'year', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={12}>
              <Form.Item label="Total Work Experience*">
                {getFieldDecorator('month')(
                  <Input placeholder="Month" onChange={e => props.setData( 'month', e.target.value)}/>,
                )}
              </Form.Item>
              </Col>
              <Col md={24}>
              <Form.Item label="Skills">
                {getFieldDecorator('personal_skills', {
                  rules: [{
                    required: true, message: 'Please enter your Skills',
                  }
                ],
                })(
                  <Input.TextArea placeholder="Skills" onChange={e => props.setData( 'personal_skills', e.target.value)}/>,
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

const PersonalFormContainer = Form.create()(PersonalForm);

export default PersonalFormContainer;
