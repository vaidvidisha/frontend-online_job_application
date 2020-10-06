import React, {useState, useEffect}  from 'react';
import PersonalForm from './personalForm';
import EducationForm from './educationForm';
import EmployeementForm from './employeeForm'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Register = (props) => {
    const [formData, setFormData] = useState({});

    const setData =  (name, value) => {
            let data = {...formData}
            data[name] = value
            setFormData(data);
      };

return(
    <div class="container-fluid">
        <div class="personalForm">
        <h1>Job seeker Registration</h1>
        <Tabs >
            <TabList >
                <Tab>Personal</Tab>
                <Tab>Employeement</Tab>
                <Tab>Education</Tab>
            </TabList>
            <TabPanel>
                <PersonalForm data = {formData} setData={setData}/>
            </TabPanel>
            <TabPanel>
            <EmployeementForm data = {formData} setData={setData}/>
            </TabPanel>
            <TabPanel>
                <EducationForm data = {formData} setData={setData} />
            </TabPanel>
        </Tabs>
        </div>
    </div>
);
};

export default Register;