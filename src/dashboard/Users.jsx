import React from 'react'
import Sidenav from '../component/Sidenav';
import Dashnav from '../component/Dashnav';

function Users() {
  return (
    <div className="main_dashboard d-flex">
        <Sidenav />
        <div className="main">
            <Dashnav />
            <div className="main_content py-5 px-4">
                <div className="users_cont">
                    <div className="header_first">
                        <button>Add New Users</button>
                    </div>
                    <div className="second_main mt-5">
                        <h1>Manage Users</h1>
                        <div className="users_cont_table">
                            <div className="table_head">
                                <h2>N</h2>
                                <h2>Username</h2>
                                <h2>Role</h2>
                                <h2>Action</h2>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users