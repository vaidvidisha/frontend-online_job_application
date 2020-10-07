import React, { useState, useEffect } from 'react';
import {
    Form, Button, Col, Row, Input, Select, Switch, Spin, Divider, Empty, notification, Checkbox
} from 'antd';
const { Option } = Select;


const PostJobForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            const data = {
                job_id: values.job_id || '',
                job_title: values.job_title || '',
                job_posted_date: values.job_posted_date || '',
                role: values.role || '',
                responsiblity: values.responsiblity || '',
                company_name: values.company_name || '',
                experience: values.experience || '',
                salary_range: values.salary_range || '',
                no_of_positions: values.no_of_positions || '',
                location: values.location || '',
                skills_and_qualifications: values.skills_and_qualifications || '',
                degree: values.degree || '',
                company_info: values.company_info || '',
                employment_type: values.employment_type || '',
                industry_type: values.industry_type || '',
                search_keyword: values.search_keyword || '',
                job_description: values.job_description || ''
            };
            console.log("data", data);
            fetch('http://localhost:3600/api/job-details', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        });
    }


    const { getFieldDecorator } = props.form;
    return (
        <div>
            <Form layout="vertical" onSubmit={handleSubmit} hideRequiredMark >
                <Row gutter={16}>
                    <Col md={24}>
                        <Form.Item label="Job Id*">
                            {getFieldDecorator('job_id', {
                                rules: [{ required: true, message: 'Please enter JobId' }],
                            })(<Input placeholder="Enter Job Id" />)}
                        </Form.Item>
                    </Col>

                    <Col md={24}>
                        <Form.Item label="Job Title*">
                            {getFieldDecorator('job_title', {
                                rules: [{
                                    required: true, message: 'Please input your Job Title',
                                }
                                ],
                            })(
                                <Input placeholder="Enter Job title" />,
                            )}
                        </Form.Item >
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Job Posted Date*">
                            {getFieldDecorator('job_posted_date', {
                                rules: [{ required: true, message: 'Please input Job Posted Date' }],
                            })(
                                <Input placeholder="Job Posted Date" type="date" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Role*">
                            {getFieldDecorator('role', {
                                rules: [{
                                    required: true, message: 'Please input your Role!',
                                }
                                ],
                            })(
                                <Input placeholder="Role" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Responsiblity*">
                            {getFieldDecorator('responsiblity', {
                                rules: [{
                                    required: true, message: 'Responsiblity field cannot be empty',
                                }
                                ],
                            })(
                                <Input placeholder="Responsiblity" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Company name*">
                            {getFieldDecorator('company_name', {
                                rules: [{
                                    required: true, message: 'Please enter Company',
                                }
                                ],
                            })(
                                <Input placeholder="Enter Company Name" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Experience*">
                            {getFieldDecorator('experience', {
                                rules: [{
                                    required: true, message: 'Please enter your Experience',
                                }
                                ],
                            })(
                                <Input placeholder="Experience" type="number" />
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Salary Range*">
                            {getFieldDecorator('salary_range', {
                                rules: [{
                                    required: true, message: 'Please enter salary_range',
                                }
                                ],
                            })(
                                <Input placeholder="Salary Range" type="number" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="No of Positions*">
                            {getFieldDecorator('no_of_positions', {
                                rules: [{
                                    required: true, message: 'Please enter no. of positions',
                                }
                                ],
                            })(
                                <Input placeholder="No of Positions" type="number" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Location*">
                            {getFieldDecorator('location')(
                                <Input placeholder="Location" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Skills and Qualifications*">
                            {getFieldDecorator('skills_and_qualifications')(
                                <Input placeholder="Skills and Quallifications" type="string" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Degree">
                            {getFieldDecorator('degree', {
                                rules: [{
                                    required: true, message: 'Please enter Degree',
                                }
                                ],
                            })(
                                <Input placeholder="Degree" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Company Info">
                            {getFieldDecorator('company_info', {
                                rules: [{
                                    required: true, message: 'Please enter Company Info',
                                }
                                ],
                            })(
                                <Input placeholder="Company Info" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Employment Type">
                            {getFieldDecorator('employment_type', {
                                rules: [{
                                    required: true, message: 'Please enter Employment Type',
                                }
                                ],
                            })(
                                <Input placeholder="Employment Type" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Industry Type">
                            {getFieldDecorator('industry_type', {
                                rules: [{
                                    required: true, message: 'Please enter Industry Type',
                                }
                                ],
                            })(
                                <Input placeholder="Industry Type" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Search Keyword">
                            {getFieldDecorator('search_keyword', {
                                rules: [{
                                    required: true, message: 'Please enter Search Keyword',
                                }
                                ],
                            })(
                                <Input placeholder="Search Keyword" />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Job Description">
                            {getFieldDecorator('job_description', {
                                rules: [{
                                    required: true, message: 'Please enter Job Description',
                                }
                                ],
                            })(
                                <Input.TextArea placeholder="Job Description" />,
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

const PostFormContainer = Form.create()(PostJobForm);

export default PostFormContainer;
