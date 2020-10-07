import React, {useState, useEffect}  from 'react';
import PostForm from './postForm';

const AdminPostJob = () => {
return(
    <div class="container-fluid">
        <div class="personalForm">
        <h1>Admin | Employeer Post Jobs</h1>
        <PostForm></PostForm>
        </div>
    </div>
);
};

export default AdminPostJob;