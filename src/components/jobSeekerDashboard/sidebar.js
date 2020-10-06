import React, { } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SidebarContainer = (props) => {
return(
    <Menu >
        <Menu.Item key='/'>
        
            <span>Dashboard</span>
        
        </Menu.Item>
    </Menu>
);
}

export default SidebarContainer;